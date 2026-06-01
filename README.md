# ActuallyPortfolio

**ActuallyPortfolio** is a full‑stack application that demonstrates a simple portfolio / showcase web app with a TypeScript backend API and a modern JavaScript front‑end. The project is built with a lightweight stack to keep the codebase readable and easy to extend.

---

## Structure

```
├── backend/           # API written in TypeScript
│   └── src/
│       ├── api/
│       │   ├── admin.ts
│       │   └── ...
│       └── ...
├── frontend/          # Front‑end (React/Vite/Webpack)
│   └── src/
│       ├── app.tsx
│       └── ...
├── package.json
├── tsconfig.json
└── README.md
```

## Prerequisites

- Node.js 20.x or newer
- npm (or pnpm if you prefer)

## Getting Started

```bash
# install dependencies
npm install

# run backend & frontend concurrently
npm run dev
```

The dev server starts the API on `localhost:4000` and the front‑end on `localhost:5173`. Open the latter in a browser to view the app.

## Running Tests

The repository contains unit tests for the backend logic. To run them:

```bash
npm test
```

Ensure there are no lint or type‑checking errors before committing.

## Building for Production

To generate a production build of both the client and the server:

```bash
npm run build
```

The output will be in `frontend/dist` and the compiled back‑end code in `backend/dist`.

## Contributing

Feel free to open pull requests or issues. We appreciate:

- Small, self‑contained changes
- Tests covering new logic
- Documentation updates if you modify public APIs

Please check the existing styling and coding conventions before submitting.

---

## License

MIT
