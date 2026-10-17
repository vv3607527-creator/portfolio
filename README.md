# Portfolio

A React, TypeScript, Vite, and React Three Fiber portfolio site.

## Development

```sh
npm ci --ignore-scripts
npm run dev
```

## Verification

Run the dependency-free regression suite, type-check/build, and linter:

```sh
npm test
npm run build
npm run lint
```

`npm ci --ignore-scripts` is recommended for reproducible local verification; it avoids running dependency lifecycle scripts during installation. The production build is emitted to `dist/`, and deployment is configured for Vercel via `vercel.json`.
