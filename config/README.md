# Configuration

This directory contains centralized configuration files used throughout the repository.

The objective is to keep repository behavior configurable without modifying workflow or action source code.

---

# Directory Structure

```text
config/
│
└── labels.json
```

Currently, all repository label configuration is managed through `labels.json`.

As the project grows, additional configuration files may be added to this directory while following the same centralized configuration philosophy.

---

# labels.json

`labels.json` is the single source of truth for repository labels and label mappings.

Several workflows and custom GitHub Actions consume this file to ensure repository behavior remains consistent.

Instead of hardcoding labels throughout workflows, every label is defined once in this configuration.

---

# File Structure

The configuration consists of three sections.

```text
labels
│
├── Repository Labels
├── Issue Mapping
└── Pull Request Mapping
```

---

# Repository Labels

Defines every label that should exist in the repository.

Each label contains three properties.

| Property | Description |
|----------|-------------|
| `name` | Label name |
| `color` | Label color (hexadecimal without `#`) |
| `description` | Description displayed in GitHub |

Example:

```json
{
    "name": "feature",
    "color": "0E8A16",
    "description": "New functionality or enhancement"
}
```

These labels are synchronized using the **Sync Labels** action.

---

# Issue Mapping

Maps issue title prefixes to repository labels.

Example:

```json
{
    "[Feature]:": "feature",
    "[Bug]:": "bug",
    "[Docs]:": "documentation"
}
```

When a new issue is created, the issue title is matched against these prefixes.

If a match is found, the corresponding label is automatically applied.

Example:

```
[Bug]: Login page crashes
```

Automatically receives:

```
bug
```

---

# Pull Request Mapping

Maps branch name prefixes to repository labels.

Example:

```json
{
    "feature/": "feature",
    "fix/": "bug",
    "docs/": "documentation"
}
```

When a pull request is opened, the source branch is matched against these prefixes.

Example:

```
feature/user-authentication
```

Automatically receives:

```
feature
```

---

# Repository Workflow

```text
labels.json
      │
      ▼
Sync Labels
      │
      ▼
Repository Labels
      │
      ▼
Issue Auto Label
      │
      ▼
PR Auto Label
```

This configuration is shared by multiple workflows and custom GitHub Actions, ensuring that labels remain consistent throughout the repository.

---

# Customization

Adding a new label typically involves three steps.

## Step 1

Add the label definition.

Example:

```json
{
    "name": "performance",
    "color": "5319E7",
    "description": "Performance improvements"
}
```

---

## Step 2

(Optional)

Map issue prefixes.

Example:

```json
"[Performance]:": "performance"
```

---

## Step 3

(Optional)

Map branch prefixes.

Example:

```json
"perf/": "performance"
```

---

## Step 4

Run the **Sync Labels** workflow.

The repository labels will be updated automatically.

---

# Best Practices

- Keep this file as the single source of truth.
- Avoid manually creating labels through the GitHub interface.
- Use descriptive label names.
- Keep naming conventions consistent.
- Run Sync Labels after every configuration change.
- Use `dry-run` before enabling `prune`.

---

# Related Components

The following components consume this configuration.

| Component | Purpose |
|-----------|---------|
| Sync Labels | Synchronizes repository labels |
| Issue Auto Label | Applies labels to issues |
| PR Auto Label | Applies labels to pull requests |

---

# Related Documentation

- `../.github/actions/sync-labels/README.md`
- `../.github/workflows/README.md`
- `../.github/README.md`