# Nguyen Duc Huy — Portfolio

A personal portfolio site. Front-end engineer & product builder — Flutter, React, TypeScript, with a system-design mindset.

Built with **React + TypeScript + Vite**, zero UI dependencies, hand-written CSS.

## Stack

- React 18
- TypeScript
- Vite 6
- Plain CSS (custom properties, no framework)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-check + bundle to /dist
npm run preview  # preview the production build
```

## Editing content

All copy lives in [`src/data/content.ts`](src/data/content.ts) — profile, projects,
skills, principles and interests. Edit that one file; components read from it.

Before publishing, update the placeholders in `content.ts`:

- `profile.github` → your GitHub URL
- `profile.linkedin` → your LinkedIn (optional)
- `profile.email` → contact email

## Deploy to GitHub Pages

1. Push to a GitHub repo on the `main` branch.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push.

If the repo is a **project page** (`username.github.io/repo-name`), set the base path
in `vite.config.ts`:

```ts
base: "/repo-name/",
```

For a **user page** (`username.github.io`) or custom domain, keep `base: "/"`.

## License

MIT
