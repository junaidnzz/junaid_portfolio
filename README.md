# Junaid Nazir — Portfolio

Personal portfolio: dark futuristic single-page site built with React 19, Vite, TypeScript 5, Tailwind CSS 3, and Framer Motion.

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build locally
```

## Content

All content lives in `src/data/` — edit these files, not the components:

| File | Contents |
|---|---|
| `profile.ts` | Name, title, links, hero stats |
| `about.ts` | About narrative, competencies, stats |
| `ai.ts` | AI Engineering section cards + terminal art |
| `skills.ts` | Skill categories and badges |
| `experience.ts` | Work history (AI bullets flagged with `ai: true`) |
| `projects.ts` | Project cards |
| `icons.tsx` | String-key → icon component registry |

## Deploying to Hostinger

1. `npm run build`
2. Upload the **contents** of `dist/` to `public_html/` via hPanel File Manager or FTP.
3. `dist/.htaccess` (copied from `public/`) handles compression and caching — make sure hidden files are included in the upload.

Before going live, replace the placeholder domain `junaidnazir.com` in `index.html`, `public/robots.txt`, and `public/sitemap.xml` with the real domain.
