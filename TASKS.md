# Project Tasks & Roadmap

A concise list of recommended tasks to move Portfilio from "almost there" to a production-ready portfolio app.

---

## 🚨 Immediate (High Priority)

- [x] **Add CI (GitHub Actions)** — run install, build (and tests/lint when added)
- [in_progress] **Add backend unit tests** — Vitest is present for backend (backend/src/__tests__/admin.test.ts); expand tests and replace placeholder script
- [in_progress] **Add linting & type checks** — frontend has an ESLint script; add ESLint/TypeScript checks to CI
- [in_progress] **Document production build & start** — document backend build/start and env semantics; backend serves frontend/dist in production

## ⚙️ Next (Medium Priority)

- [ ] Add frontend unit/integration tests
- [ ] Harden CORS and auth/token handling in backend
- [ ] Add pre-commit hooks (husky) and commit linting
- [ ] Add Dockerfile(s) for local production testing

## ✨ Nice-to-have (Low Priority)

- [ ] Add monitoring/health endpoints and basic logging
- [ ] Add accessibility & performance audits (Lighthouse)
- [ ] Add deploy docs (Vercel, Netlify, or Docker + cloud)
- [ ] Add README badges (build, license, node)

---

Estimated effort
- Immediate: 1–2 days (CI + basic tests + lint)
- Medium: 2–3 days
- Nice-to-have: ongoing

Progress updates
- Added CI (GitHub Actions) that installs both packages and builds the frontend.
- Backend: added tsconfig, type-check and build scripts, Vitest tests, and test isolation (tests use TEST_DATA_DIR).
- CI: now runs backend tests and backend type-check, plus frontend lint.
- Note: run `npm --prefix backend install` after pulling these changes to install new devDependencies.

