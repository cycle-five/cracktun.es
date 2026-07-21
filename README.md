# cracktun.es

The [Obsidian](https://obsidian.md) vault behind **[cracktun.es](https://cracktun.es)** —
home of [Crack Tunes](https://github.com/cycle-five/cracktunes), plus a digital garden
of dev logs, book summaries, and notes on math and type theory.

Published with [Quartz v5](https://quartz.jzhao.xyz) and deployed to GitHub Pages by
GitHub Actions on every push to `master`.

## Editing

The vault lives in [`content/`](content/) — open **that** folder in Obsidian, not the
repo root. Write, commit, push; the site rebuilds automatically.

```sh
npm i                       # first time only
npx quartz build --serve    # local preview at http://localhost:8080
```

## Updating Quartz

```sh
git fetch quartz && git merge quartz/v5
```

Styling lives in `quartz/styles/`; site settings in `quartz.config.yaml`.

---
cracktun.es is a product of, and wholly owned by, Cycle Five Syndicate.
Quartz is MIT-licensed by Jacky Zhao — see [`LICENSE.txt`](LICENSE.txt).
