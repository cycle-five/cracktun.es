import path from "node:path"
import fs from "node:fs/promises"

/**
 * Markdown for Agents — emit `<slug>.md` beside every `<slug>.html`.
 *
 * WHY
 * ---
 * An agent asking for a page gets ~21x more bytes than the document contains.
 * Measured on this site: avatars.html is 20,615 bytes for a 950-byte document,
 * of which <head> alone is 5,193. index.html is 21x. RuneCast.html is 153x.
 * The excess is component CSS links, OG meta, font preloads, the SPA prescript
 * and the explorer/graph/search scaffolding -- none of it the document.
 *
 * The structure that matters to a reader of any kind -- headings, lists, links,
 * emphasis, code -- survives Markdown intact. What is dropped is presentation,
 * which for an agent is noise. This is not a lossy shortcut; the Markdown IS
 * the source, and the HTML is the derived artifact.
 *
 * Cloudflare sells this as "Markdown for Agents" on a paid plan, converting
 * HTML back to Markdown at the edge. This site's source is already Markdown,
 * so it has nothing to convert -- serving the original is both cheaper and
 * more faithful than a round trip.
 *
 * 🚨 TWO WAYS A NAIVE VERSION OF THIS PLUGIN LEAKS. Both are silent, and
 *    neither is hypothetical -- the encrypted-pages plugin is enabled in
 *    quartz.config.yaml with passwordField: password.
 *
 *    1. AN ENCRYPTED PAGE'S SOURCE IS ITS PLAINTEXT. encrypted-pages ships
 *       ciphertext in the HTML and decrypts client-side behind a password.
 *       Emitting that page's Markdown would publish the plaintext next to it
 *       and defeat the whole mechanism. Such pages are skipped outright.
 *
 *    2. THE PASSWORD IS IN THE FRONTMATTER. Copying a source file verbatim
 *       would publish `password:` along with it. So frontmatter is never
 *       passed through -- a small ALLOWLIST is rebuilt from known-safe fields.
 *       An allowlist, not a denylist: a frontmatter key nobody here has
 *       thought of yet must default to unpublished.
 *
 * Pages with no Markdown source on disk -- tag pages, folder listings, and
 * anything else Quartz generates -- are skipped. There is no source to serve.
 */

// Rebuilt onto every emitted file. Anything not named here is dropped, however
// harmless it looks: see leak #2 above.
const FRONTMATTER_ALLOWLIST = ["title", "tags", "date", "description", "aliases"] as const

// Frontmatter is fenced by --- at the very start of the file. Kept deliberately
// strict: it must be the first thing in the file, so a horizontal rule further
// down is never mistaken for a fence and used to lop off the document.
const FRONTMATTER_RE = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/

function stripFrontmatter(raw: string): string {
  return raw.replace(FRONTMATTER_RE, "").replace(/^\s+/, "")
}

function yamlScalar(v: unknown): string {
  const s = String(v)
  // Quote anything that could change the meaning of the line. Cheap and
  // conservative -- over-quoting a title costs nothing, under-quoting one
  // containing a colon produces a file that will not parse.
  return /^[\w .,'()/-]+$/.test(s) && !/^\s|\s$/.test(s) ? s : JSON.stringify(s)
}

function buildFrontmatter(fm: Record<string, unknown>, url: string): string {
  const lines: string[] = ["---"]
  for (const key of FRONTMATTER_ALLOWLIST) {
    const v = fm[key]
    if (v === undefined || v === null || v === "") continue
    if (Array.isArray(v)) {
      if (v.length === 0) continue
      lines.push(`${key}: [${v.map(yamlScalar).join(", ")}]`)
    } else if (v instanceof Date) {
      lines.push(`${key}: ${v.toISOString()}`)
    } else {
      lines.push(`${key}: ${yamlScalar(v)}`)
    }
  }
  lines.push(`source: ${url}`)
  lines.push("---", "")
  return lines.join("\n")
}

export const MarkdownForAgents: any = () => ({
  name: "MarkdownForAgents",
  async emit(ctx: any, content: any[]): Promise<string[]> {
    const emitted: string[] = []
    const baseUrl = ctx?.cfg?.configuration?.baseUrl
    const contentDir: string = ctx.argv.directory
    const outDir: string = ctx.argv.output

    for (const [, file] of content) {
      const data = (file?.data ?? {}) as Record<string, unknown>

      // Leak #1. Not negotiable, and first for a reason.
      if (data.encrypted === true) continue

      const slug = data.slug as string | undefined
      const relativePath = data.relativePath as string | undefined
      if (!slug || !relativePath) continue // generated page, no source to serve

      const src = path.join(contentDir, relativePath)
      let raw: string
      try {
        raw = await fs.readFile(src, "utf-8")
      } catch {
        // A page whose source cannot be read is skipped, not failed. One
        // unreadable file must not take the whole site build with it.
        continue
      }

      const body = stripFrontmatter(raw)
      if (body.trim() === "") continue

      const url = baseUrl ? `https://${baseUrl}/${slug}` : `/${slug}`
      const fm = (data.frontmatter as Record<string, unknown> | undefined) ?? {}
      const out = path.join(outDir, `${slug}.md`)
      await fs.mkdir(path.dirname(out), { recursive: true })
      await fs.writeFile(out, buildFrontmatter(fm, url) + body, "utf-8")
      emitted.push(out)
    }
    return emitted
  },
  async *partialEmit() {},
})

export default MarkdownForAgents
