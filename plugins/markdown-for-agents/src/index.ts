import path from "node:path"
import fs from "node:fs/promises"

/**
 * Markdown for Agents — emit `<slug>.md` beside every `<slug>.html`.
 *
 * WHY
 * ---
 * An agent asking for a page gets ~21x more bytes than the document contains.
 * Measured on this site: avatars.html is 20,615 bytes for a 950-byte document,
 * of which <head> alone is 5,193. index.html is the same ratio. Across the
 * whole build, 1.40 MB of HTML against 184 KB of Markdown.
 *
 * The excess is component CSS links, OG meta, font preloads, the SPA prescript
 * and the explorer/graph/search scaffolding -- none of it the document. The
 * structure that matters to a reader of any kind (headings, lists, links,
 * emphasis, code) survives Markdown intact; what is dropped is presentation.
 * This is not a lossy shortcut: the Markdown IS the source and the HTML is the
 * derived artifact.
 *
 * Cloudflare sells this as "Markdown for Agents" on a paid plan, converting
 * HTML back to Markdown at the edge. A site whose source is already Markdown
 * has nothing to convert -- serving the original is cheaper and more faithful
 * than a round trip.
 *
 * 🚨 TWO WAYS A NAIVE VERSION OF THIS PLUGIN LEAKS. Both silent, neither
 *    hypothetical wherever the encrypted-pages plugin is enabled.
 *
 *    1. AN ENCRYPTED PAGE'S SOURCE IS ITS PLAINTEXT. encrypted-pages ships
 *       ciphertext in the HTML and decrypts client-side behind a password.
 *       Emitting that page's Markdown would publish the plaintext beside it
 *       and defeat the mechanism entirely. Such pages are skipped outright.
 *
 *    2. THE PASSWORD IS IN THE FRONTMATTER (`passwordField`, default
 *       `password`). Copying a source file verbatim would publish it. So
 *       frontmatter is never passed through -- a small ALLOWLIST is rebuilt
 *       from known-safe fields. An allowlist, not a denylist: a frontmatter
 *       key nobody has thought of yet must default to unpublished.
 *
 * 🪤 ORDERING AGAINST encrypted-pages DOES NOT MATTER, which is worth knowing
 *    rather than guessing at. That plugin may well be ordered after this one
 *    (it is 900 on cracktun.es, against 246 here) and the guard still holds,
 *    because `data.encrypted` is set by its TRANSFORMER during the parse
 *    phase, which completes before any emitter runs at all.
 *
 * Pages with no Markdown source on disk -- tag pages, folder listings, and
 * anything else the generator synthesises -- are skipped. There is no source
 * to serve.
 */

/** The subset of Quartz's BuildCtx this plugin needs. */
export interface AgentMarkdownCtx {
  argv: { directory: string; output: string }
  cfg?: { configuration?: { baseUrl?: string } }
}

/** The subset of a Quartz vfile's `data` this plugin reads. */
export interface AgentMarkdownFileData {
  slug?: string
  relativePath?: string
  encrypted?: boolean
  frontmatter?: Record<string, unknown>
}

export interface AgentMarkdownFile {
  data?: AgentMarkdownFileData
}

/** Quartz hands emitters `[tree, vfile]` pairs; the tree is unused here. */
export type AgentMarkdownContent = readonly [unknown, AgentMarkdownFile]

export interface AgentMarkdownOptions {
  /**
   * Frontmatter keys copied onto the emitted file. Deliberately an allowlist:
   * see leak #2 above. Overriding this replaces the default entirely.
   */
  frontmatterAllowlist?: readonly string[]
}

const DEFAULT_ALLOWLIST: readonly string[] = ["title", "tags", "date", "description", "aliases"]

/**
 * Frontmatter is fenced by `---` at the very start of the file. Kept strict on
 * purpose: the fence must be the first thing in the file, so a horizontal rule
 * further down is never mistaken for one and used to lop off the document.
 */
const FRONTMATTER_RE = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/

function stripFrontmatter(raw: string): string {
  return raw.replace(FRONTMATTER_RE, "").replace(/^\s+/, "")
}

/**
 * Quote anything that could change the meaning of a YAML line. Conservative by
 * design -- over-quoting a title costs nothing, while under-quoting one that
 * contains a colon produces a file that will not parse.
 */
function yamlScalar(v: unknown): string {
  const s = String(v)
  return /^[\w .,'()/-]+$/.test(s) && !/^\s|\s$/.test(s) ? s : JSON.stringify(s)
}

function buildFrontmatter(
  fm: Record<string, unknown>,
  url: string,
  allowlist: readonly string[],
): string {
  const lines: string[] = ["---"]
  for (const key of allowlist) {
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

export const MarkdownForAgents = (opts?: AgentMarkdownOptions) => ({
  name: "MarkdownForAgents",
  async emit(ctx: AgentMarkdownCtx, content: readonly AgentMarkdownContent[]): Promise<string[]> {
    const allowlist = opts?.frontmatterAllowlist ?? DEFAULT_ALLOWLIST
    const emitted: string[] = []
    const baseUrl = ctx.cfg?.configuration?.baseUrl
    const contentDir = ctx.argv.directory
    const outDir = ctx.argv.output

    for (const [, file] of content) {
      const data = file?.data ?? {}

      // Leak #1. Not negotiable, and checked first for a reason.
      if (data.encrypted === true) continue

      const { slug, relativePath } = data
      if (!slug || !relativePath) continue // synthesised page, no source to serve

      let raw: string
      try {
        raw = await fs.readFile(path.join(contentDir, relativePath), "utf-8")
      } catch {
        // A page whose source cannot be read is skipped, not fatal. One
        // unreadable file must not take the whole site build down with it.
        continue
      }

      const body = stripFrontmatter(raw)
      if (body.trim() === "") continue

      const url = baseUrl ? `https://${baseUrl}/${slug}` : `/${slug}`
      const out = path.join(outDir, `${slug}.md`)
      await fs.mkdir(path.dirname(out), { recursive: true })
      await fs.writeFile(out, buildFrontmatter(data.frontmatter ?? {}, url, allowlist) + body, "utf-8")
      emitted.push(out)
    }
    return emitted
  },
  async *partialEmit(): AsyncGenerator<string> {},
})

export default MarkdownForAgents
