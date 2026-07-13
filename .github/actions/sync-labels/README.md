# Sync Labels

Synchronizes GitHub repository labels with the configuration defined in `config/labels.json`.

Instead of manually creating and updating labels through the GitHub interface, this action treats the configuration file as the single source of truth.

Running the action ensures that the repository labels always match the configuration.

---

# Features

- Create missing labels
- Update existing labels
- Optional removal of unmanaged labels
- Dry-run mode for previewing changes
- Duplicate label detection
- Fully configurable through `labels.json`

---

# Directory Structure

```text
sync-labels/
│
├── dist/                  # Compiled JavaScript
├── src/
│   ├── github.ts
│   ├── index.ts
│   ├── summary.ts
│   └── types.ts
│
├── action.yml
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# Configuration

Repository labels are defined in:

```text
config/labels.json
```

The configuration contains three sections.

## Repository Labels

Defines the labels that should exist.

Example:

```json
{
    "name": "feature",
    "color": "0E8A16",
    "description": "New functionality"
}
```

---

## Issue Label Mapping

Maps issue title prefixes to labels.

Example:

```json
"[Feature]:": "feature"
```

---

## Pull Request Label Mapping

Maps branch prefixes to labels.

Example:

```json
"feature/": "feature"
```

---

# Inputs

| Input | Required | Description |
|--------|:-------:|-------------|
| `github-token` | ✅ | GitHub token used for API requests |
| `prune` | ❌ | Remove labels not present in the configuration |
| `dry-run` | ❌ | Preview changes without modifying labels |

---

# Workflow

```text
Read labels.json
        │
        ▼
Validate Configuration
        │
        ▼
Fetch Repository Labels
        │
        ▼
Compare Labels
        │
        ▼
Create Missing Labels
        │
        ▼
Update Existing Labels
        │
        ▼
Optionally Remove Unmanaged Labels
```

---

# Architecture

The action follows a modular architecture.

| File | Responsibility |
|------|----------------|
| `index.ts` | Coordinates the synchronization process |
| `github.ts` | GitHub REST API operations |
| `summary.ts` | Generates workflow summaries |
| `types.ts` | Shared TypeScript interfaces |

---

# Usage

Example workflow:

```yaml
name: Sync Labels

on:
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: ./.github/actions/sync-labels
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          prune: true
          dry-run: false
```

---

# Best Practices

- Keep all label changes in `config/labels.json`.
- Use `dry-run` before enabling `prune`.
- Commit configuration changes before running synchronization.
- Avoid manually editing labels through the GitHub UI.

---

# Related Documentation

- `../../workflows/README.md`
- `../../../config/README.md`
- `../README.md`