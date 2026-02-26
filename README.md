# fullstack-template

A fullstack starter project with a React frontend and Hono backend, built with Bun.

## Stack

**Frontend** (`packages/client`)
- [React 19](https://react.dev/) — UI framework
- [Vite](https://vite.dev/) — build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) — accessible component library built on Radix UI

**Backend** (`packages/server`)
- [Hono](https://hono.dev/) — fast, lightweight web framework
- [Bun](https://bun.sh/) — JavaScript runtime and package manager

**Tooling**
- [TypeScript](https://www.typescriptlang.org/) — type safety across both packages
- [Prettier](https://prettier.io/) — code formatting
- [Husky](https://typicode.github.io/husky/) + lint-staged — pre-commit hooks

## Getting started

Install dependencies:

```bash
bun install
```

Run both client and server in development mode:

```bash
bun run dev
```

The client runs on `http://localhost:5173` and the server on `http://localhost:3000` by default.

## Project structure

```
fullstack-template/
├── packages/
│   ├── client/   # React + Vite + Tailwind + shadcn frontend
│   └── server/   # Hono backend
├── package.json  # Workspace root
└── CLAUDE.md
```
