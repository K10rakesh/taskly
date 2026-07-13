# Custom GitHub Actions

This directory contains reusable custom GitHub Actions developed specifically for the K10 Starter Kit.

Unlike marketplace actions, these actions are maintained as part of this project, making them easier to customize, extend, and reuse across repositories.

---

# Directory Structure

```text
actions/
│
├── apply-label/
├── sync-labels/
└── size-labeler/
```

Every custom action follows the same project structure.

```text
action-name/
│
├── dist/              # Compiled JavaScript
├── src/               # TypeScript source code
│
├── action.yml         # Action metadata
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# Design Principles

Every custom action follows the same architecture.

```text
index.ts
        │
        ▼
Business Logic
        │
        ▼
GitHub API
        │
        ▼
Workflow Summary
```

Responsibilities are intentionally separated.

| File | Responsibility |
|------|----------------|
| `index.ts` | Coordinates the action |
| `github.ts` | GitHub API interactions |
| `labels.ts` | Label-related business logic |
| `summary.ts` | Workflow summary generation |
| `types.ts` | Shared TypeScript interfaces |

Not every action requires every file. Smaller actions may omit files that are unnecessary.

---

# Included Actions

## Apply Label

Automatically applies labels to issues and pull requests based on repository conventions.

Documentation:

```text
apply-label/README.md
```

---

## Sync Labels

Synchronizes repository labels with the configuration defined in `config/labels.json`.

Features include:

- Create missing labels
- Update existing labels
- Optional pruning of unmanaged labels
- Dry-run support

Documentation:

```text
sync-labels/README.md
```

---

## Size Labeler

Automatically categorizes pull requests based on the total number of changed lines.

Features include:

- Calculates additions and deletions
- Removes outdated size labels
- Applies exactly one size label
- Generates a workflow summary

Documentation:

```text
size-labeler/README.md
```

---

# Development Workflow

Whenever a new custom action is added, it should follow the established project structure and design principles.

Typical development steps are:

1. Create a new action directory.
2. Implement the action in TypeScript.
3. Build the action to generate the `dist` directory.
4. Add a workflow that consumes the action.
5. Document the action with its own `README.md`.

---

# Related Documentation

- `.github/README.md`
- `.github/workflows/README.md`
- `../config/README.md`