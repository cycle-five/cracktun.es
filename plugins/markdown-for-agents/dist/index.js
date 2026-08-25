// src/index.ts
import path from "node:path";
import fs from "node:fs/promises";
var DEFAULT_ALLOWLIST = ["title", "tags", "date", "description", "aliases"];
var FRONTMATTER_RE = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/;
function stripFrontmatter(raw) {
  return raw.replace(FRONTMATTER_RE, "").replace(/^\s+/, "");
}
function yamlScalar(v) {
  const s = String(v);
  return /^[\w .,'()/-]+$/.test(s) && !/^\s|\s$/.test(s) ? s : JSON.stringify(s);
}
function buildFrontmatter(fm, url, allowlist) {
  const lines = ["---"];
  for (const key of allowlist) {
    const v = fm[key];
    if (v === void 0 || v === null || v === "") continue;
    if (Array.isArray(v)) {
      if (v.length === 0) continue;
      lines.push(`${key}: [${v.map(yamlScalar).join(", ")}]`);
    } else if (v instanceof Date) {
      lines.push(`${key}: ${v.toISOString()}`);
    } else {
      lines.push(`${key}: ${yamlScalar(v)}`);
    }
  }
  lines.push(`source: ${url}`);
  lines.push("---", "");
  return lines.join("\n");
}
var MarkdownForAgents = (opts) => ({
  name: "MarkdownForAgents",
  async emit(ctx, content) {
    const allowlist = opts?.frontmatterAllowlist ?? DEFAULT_ALLOWLIST;
    const emitted = [];
    const baseUrl = ctx.cfg?.configuration?.baseUrl;
    const contentDir = ctx.argv.directory;
    const outDir = ctx.argv.output;
    for (const [, file] of content) {
      const data = file?.data ?? {};
      if (data.encrypted === true) continue;
      const { slug, relativePath } = data;
      if (!slug || !relativePath) continue;
      let raw;
      try {
        raw = await fs.readFile(path.join(contentDir, relativePath), "utf-8");
      } catch {
        continue;
      }
      const body = stripFrontmatter(raw);
      if (body.trim() === "") continue;
      const url = baseUrl ? `https://${baseUrl}/${slug}` : `/${slug}`;
      const out = path.join(outDir, `${slug}.md`);
      await fs.mkdir(path.dirname(out), { recursive: true });
      await fs.writeFile(out, buildFrontmatter(data.frontmatter ?? {}, url, allowlist) + body, "utf-8");
      emitted.push(out);
    }
    return emitted;
  },
  async *partialEmit() {
  }
});
var index_default = MarkdownForAgents;
export {
  MarkdownForAgents,
  index_default as default
};
