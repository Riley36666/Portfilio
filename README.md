# Portfilio

Portfilio is a full‑stack portfolio web application showcasing a TypeScript Express API (backend/) and a modern React + Vite frontend (frontend/). It’s designed as a small, easy-to-extend example app you can run and adapt.

Highlights
- TypeScript backend with simple API routes
- React frontend built with Vite and client-side routing
- Minimal, easy-to-follow project structure for learning or portfolio use

Quick start (root)

1. Install dependencies:

   npm install

2. Start both dev servers (frontend + backend):

   npm run dev

3. Frontend: http://localhost:3000, Backend: http://localhost:9999 (or PORT env)

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
- Tests: backend now has Vitest tests (backend/src/__tests__) and CI was updated to run them. Expand coverage as needed.
- Linting / type checks: backend now includes a tsconfig and "type-check"/"build" scripts; CI runs frontend lint and backend type-check. Run locally with:
  - npm --prefix backend run test
  - npm --prefix backend run type-check
  - npm --prefix backend run build
- Production: backend now emits compiled server to backend/dist/server.js (tsc). Run backend build before starting production (root: npm run build then npm start).

Contributing
- Open issues or PRs. Small, focused changes and tests are appreciated. Consider adding tests when changing backend routes to avoid regressions.

License
- MIT

AI assistance
- Some edits in this repository were assisted by GitHub Copilot. Commit messages that assisted edits may include a "Co-authored-by: Copilot" trailer or a note indicating Copilot was used.
