# Harsha Deep Nallamothu — Portfolio

Source for my personal portfolio site, with the cloud-hosted NEXUS agent
embedded.

**Live:** https://harsha99-99.github.io/portfolio/ (GitHub Pages, branch `main`,
root folder).

## Files

| File | Role |
|---|---|
| `index.html` | Single-page portfolio: hero, experience & education, projects, skills, contact. |
| `styles.css` | NEXUS dark sci-fi theme (self-contained, no build step). |
| `app.js` | Typewriter, stat count-up, reveal-on-scroll. |
| `PROFILE.md` | My original profile intro (kept from this repo's first README). |

The ✦ agent is **completely cloud-based** — one script tag in `index.html`
pointing at `https://listen.thesaratech.com/nexus-widget.js`. No backend in this
repo.

## What the agent knows

The agent's knowledge lives in the NEXUS repo at
`webapp/portfolio-context.md` (cloud-hosted). To change what it says, edit that
file and redeploy NEXUS.

**Keep section ids in sync:** the agent scrolls the page to `#about`,
`#experience`, `#projects`, `#skills`, `#contact` — if you rename ids here,
update the `## Page anchors` list in `portfolio-context.md` too.

## Deploy

GitHub Pages from this branch's root: Settings → Pages → Deploy from a branch →
`main` → `/ (root)` → Save.

Contact: harshadeep.nallamothu@gmail.com · [GitHub](https://github.com/Harsha99-99) ·
[LinkedIn](https://www.linkedin.com/in/harshadeepn/)
