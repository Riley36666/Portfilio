# ActuallyPortfolio

ActuallyPortfolio is a full‑stack portfolio web application showcasing a TypeScript Express API (backend/) and a modern React + Vite frontend (frontend/). It’s designed as a small, easy-to-extend example app you can run and adapt.

Highlights
- TypeScript backend with simple API routes
- React frontend built with Vite and client-side routing
- Minimal, easy-to-follow project structure for learning or portfolio use

Quick start (root)

1. Install dependencies:

   npm install

2. Start both dev servers (frontend + backend):

   npm run dev

3. Frontend: http://localhost:5173, Backend: http://localhost:9999 (or PORT env)

If you prefer to run services separately:
- Backend: npm --prefix backend install && npm --prefix backend run dev
- Frontend: npm --prefix frontend install && npm --prefix frontend run dev

Project structure
```
/backend   - TypeScript API (src/)
/frontend  - React + Vite app (src/)
package.json - root helper scripts (dev/build)
README.md  - this file
```

Scripts (root)
- npm run dev — starts frontend and backend concurrently (requires devDependencies installed at root)
- npm run build — builds the frontend (and any build steps configured for backend)

Notes & next steps
- Tests: backend currently has no automated tests; add unit tests and CI before production
- Linting / type checks: add ESLint/TypeScript checks in CI
- Production: add a build and start script for the backend and document deployment

Contributing
- Open issues or PRs. Small, focused changes and tests are appreciated.

License
- MIT
