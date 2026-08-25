/**
 * Markdown for Agents — content negotiation at the edge.
 *
 * A client that says it wants Markdown gets the `.md` the build emitted beside
 * each page; everyone else gets the HTML, unchanged. Cloudflare sells this as a
 * paid feature by converting HTML back to Markdown; this site's source IS
 * Markdown, so it just serves the original — cheaper and more faithful than a
 * round trip.
 *
 * 🪤 `Vary: Accept` IS NOT OPTIONAL. Two different bodies are served from one
 *    URL. Without Vary, the first response cached for a URL is handed to
 *    everyone — so one agent's Markdown gets served to browsers, or a browser's
 *    HTML to every agent. It is set on BOTH branches, because the HTML response
 *    is just as cacheable and just as wrong to reuse across content types.
 *
 * 🪤 THE ACCEPT CHECK MUST NOT MATCH `* / *`. Browsers send Accept headers
 *    ending in `*​/​*`, so a naive substring or wildcard-tolerant match would
 *    hand Markdown to every browser. Only an explicit `text/markdown` (or the
 *    `text/x-markdown` spelling) counts, and a `q=0` on it counts as a refusal.
 */

const MARKDOWN_TYPES = ["text/markdown", "text/x-markdown"]

/** True only if the client explicitly asked for markdown and did not refuse it. */
function wantsMarkdown(accept) {
  if (!accept) return false
  for (const part of accept.split(",")) {
    const [rawType, ...params] = part.trim().split(";")
    const type = rawType.trim().toLowerCase()
    if (!MARKDOWN_TYPES.includes(type)) continue
    // `text/markdown;q=0` is an explicit refusal, not a request.
    const q = params
      .map((p) => p.trim().toLowerCase())
      .find((p) => p.startsWith("q="))
    if (q && parseFloat(q.slice(2)) === 0) return false
    return true
  }
  return false
}

/** `/`, `/about`, `/about/` -> the slug the build emitted a .md for. */
function slugFor(pathname) {
  let p = pathname.replace(/\/+$/, "")
  if (p === "") p = "/index"
  return p
}

export async function onRequest(context) {
  const { request, next } = context
  const url = new URL(request.url)

  // Only ever negotiate page requests. An explicit .md, an asset, or anything
  // with a file extension is passed through untouched.
  const isPageRequest =
    !/\.[a-z0-9]+$/i.test(url.pathname) && (request.method === "GET" || request.method === "HEAD")

  if (!isPageRequest || !wantsMarkdown(request.headers.get("Accept"))) {
    const res = await next()
    // Vary on the HTML branch too: this response is cacheable and must not be
    // reused for a client that asked for Markdown.
    const out = new Response(res.body, res)
    out.headers.append("Vary", "Accept")
    return out
  }

  const mdUrl = new URL(url)
  mdUrl.pathname = `${slugFor(url.pathname)}.md`
  const md = await context.env.ASSETS.fetch(new Request(mdUrl, request))

  if (!md.ok) {
    // No .md for this page -- a generated tag or folder listing, or an
    // encrypted page the emitter deliberately skipped. Fall back to HTML
    // rather than 404: the page exists, only this representation does not.
    const res = await next()
    const out = new Response(res.body, res)
    out.headers.append("Vary", "Accept")
    return out
  }

  const out = new Response(md.body, md)
  out.headers.set("Content-Type", "text/markdown; charset=utf-8")
  out.headers.append("Vary", "Accept")
  out.headers.set("X-Content-Type-Options", "nosniff")
  return out
}
