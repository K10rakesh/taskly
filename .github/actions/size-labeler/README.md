# Size Labeler

Automatically categorizes pull requests according to their size by calculating the total number of added and deleted lines.

The action ensures that every pull request always has exactly one size label, making it easier for reviewers to quickly estimate the scope of the proposed changes.

---

# Features

- Automatically calculates pull request size
- Applies exactly one size label
- Removes outdated size labels
- Generates a workflow summary
- Works automatically on pull request events

---

# Labels

The action applies one of the following labels.

| Label | Total Changed Lines |
|--------|--------------------:|
| `size: XS` | 0 – 9 |
| `size: S` | 10 – 49 |
| `size: M` | 50 – 249 |
| `size: L` | 250 – 499 |
| `size: XL` | 500+ |

The total number of changed lines is calculated as:

```text
Additions + Deletions
```

---

# Directory Structure

```text
size-labeler/
│
├── dist/                  # Compiled JavaScript
├── src/
│   ├── github.ts
│   ├── index.ts
│   ├── labels.ts
│   ├── summary.ts
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
| `github-token` | ✅ | GitHub token used to access the GitHub REST API |

---

# Workflow

```text
Pull Request Opened / Updated
            │
            ▼
Fetch Pull Request
            │
            ▼
Calculate Total Changes
            │
            ▼
Determine Size Label
            │
            ▼
Remove Existing Size Labels
            │
            ▼
Apply New Size Label
            │
            ▼
Generate Workflow Summary
```

---

# Architecture

The action follows the same modular architecture as the other custom actions.

| File | Responsibility |
|------|----------------|
| `index.ts` | Coordinates the workflow |
| `github.ts` | GitHub REST API operations |
| `labels.ts` | Determines the appropriate size label |
| `summary.ts` | Generates the workflow summary |
| `types.ts` | Shared TypeScript interfaces |

---

# Workflow Summary

After execution, the action generates a summary containing:

- Additions
- Deletions
- Total changed lines
- Applied size label

This provides maintainers with a quick overview directly in the GitHub Actions run.

---

# Usage

Example workflow:

```yaml
name: PR Size Labeler

on:
  pull_request:
    types:
      - opened
      - synchronize
      - reopened

jobs:
  label:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: ./.github/actions/size-labeler
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

---

# Design Principles

The action is designed around a few core principles.

## Single Label

A pull request should always have exactly one size label.

---

## Automatic Synchronization

Whenever new commits are pushed, the previous size label is removed and replaced with the updated one if necessary.

---

## Reviewer Experience

Size labels provide reviewers with immediate context before reviewing code.

---

## Maintainability

Business logic is separated from GitHub API interactions to keep the codebase modular and easy to extend.

---

# Related Documentation

- `../../workflows/README.md`
- `../README.md`