# Frontend — React + Vite

This directory contains the React frontend built with Vite. It’s a lightweight SPA using React Router for navigation and common UI libraries.

Quick start (inside frontend/)

1. Install dependencies:

   npm install

2. Start dev server:

   npm run dev

3. Build for production:

   npm run build

Helpful scripts
- dev — starts Vite with hot-module replacement
- build — creates an optimized production build
- preview — serves the production build locally
- lint — run ESLint

Notes
- Uses React Router for client-side routing. Routes are defined in src/App.jsx.
- Tailwind/Vite plugins may be included — check package.json for devDependencies.
- If enabling TypeScript, add type-aware ESLint rules and update tsconfig.json.

Troubleshooting
- If the app fails to compile, delete node_modules and reinstall:

  rm -rf node_modules && npm install

- Run the frontend independently (useful when debugging):

  npm --prefix frontend run dev

Links
- Vite: https://vitejs.dev/
- React: https://reactjs.org/

License: MIT
