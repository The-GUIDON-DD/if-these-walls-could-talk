# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Router 8.0.0 project in **Framework Mode** - a full-stack React application with server-side rendering, built using Vite as the bundler and Tailwind CSS for styling.

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Run the production server (after build)
npm run start

# Type checking (generates route types)
npm run typecheck
```

The dev server runs at `http://localhost:5173`.

## Architecture

### Framework Mode Structure

This project uses React Router's Framework Mode with the following conventions:

- **`app/`** - Application root directory
  - `root.tsx` - Root layout with HTML shell, error boundary, and global links
  - `routes.ts` - Route configuration using `index()` and file-based routing
  - `app.css` - Tailwind CSS entry point with theme configuration
  - `routes/home.tsx` - Home page route module
  - `welcome/welcome.tsx` - Reusable welcome component

- **`react-router.config.ts`** - React Router configuration (SSR enabled by default)
- **`vite.config.ts`** - Vite configuration with React Router and Tailwind plugins

### Routing

Routes are defined in `app/routes.ts` using the file-based routing convention:
- `index("routes/home.tsx")` maps the root path to `routes/home.tsx`
- Route modules export a default component and optional data functions (`loader`, `action`, `meta`, `links`, `headers`, `ErrorBoundary`)

### Type Safety

- Route types are auto-generated in `.react-router/types/**/*`
- Use `~/*` path alias for imports (e.g., `import { Welcome } from "~/welcome/welcome"`)
- Run `npm run typecheck` to generate type definitions and check for errors

## Styling

Uses Tailwind CSS v4 with the `@tailwindcss/vite` plugin. The theme is configured with Inter font and a dark mode toggle via `prefers-color-scheme`.

## Deployment

The project builds to a `build/` directory containing:
- `client/` - Static assets
- `server/` - Server-side code

Deploy by serving `build/server/index.js` and serving `build/client/` as static files.