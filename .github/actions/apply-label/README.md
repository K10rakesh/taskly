# Apply Label

Applies labels to GitHub issues and pull requests based on repository conventions.

Instead of hardcoding labels inside multiple workflows, this action centralizes the label application logic into a reusable GitHub Action.

The action is used by workflows responsible for automatically labeling newly created issues and pull requests.

---

# Features

- Reusable across multiple workflows
- Supports issues and pull requests
- Uses GitHub REST API
- Applies labels consistently
- Simple and lightweight

---

# Directory Structure

```text
apply-label/
│
├── dist/                  # Compiled JavaScript
├── src/
│   ├── github.ts
│   ├── index.ts
│   └── types.ts
│
├── action.yml
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# Inputs

| Input | Required | Description |
|--------|:-------:|-------------|
| `github-token` | ✅ | GitHub token used to authenticate GitHub API requests |
| `label` | ✅ | Label to apply |
| `issue-number` | ✅ | Issue or pull request number |

---

# Workflow

```text
Receive Inputs
       │
       ▼
Validate Inputs
       │
       ▼
Connect to GitHub API
       │
       ▼
Apply Label
       │
       ▼
Finish
```

---

# Architecture

The action follows the same modular structure used throughout the Starter Kit.

| File | Responsibility |
|------|----------------|
| `index.ts` | Coordinates execution |
| `github.ts` | GitHub REST API operations |
| `types.ts` | Shared TypeScript interfaces |

---

# Usage

Example workflow:

```yaml
- name: Apply Label
  uses: ./.github/actions/apply-label
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    label: feature
    issue-number: 42
```

---

# Design Principles

## Reusability

The action is intentionally generic so it can be used by multiple workflows without modification.

---

## Simplicity

The action performs a single task—applying a label—and leaves all label selection logic to the calling workflow.

---

## Separation of Concerns

Determining *which* label should be applied is handled by the workflow or configuration.

Applying the label is the responsibility of this action.

---

# Related Documentation

- `../../workflows/README.md`
- `../README.md`
- `../../../config/README.md`