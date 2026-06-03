# Project Tasks & Roadmap

A concise list of recommended tasks to move ActuallyPortfolio from "almost there" to a production-ready portfolio app.

---

## 🚨 Immediate (High Priority)

- [x] **Add CI (GitHub Actions)** — run install, build (and tests/lint when added)
- [ ] **Add backend unit tests** — replace placeholder test script
- [ ] **Add linting & type checks** — ESLint + TypeScript checks in CI
- [ ] **Document production build & start** — backend build/start, env semantics

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

How to proceed
1. Decide CI scope (simple build vs lint+tests).  
2. Add a GitHub Actions workflow in `.github/workflows/` (I can create one).  
3. Add tests and update package.json scripts.

If you want, pick a CI option and I will create the workflow file for you.
