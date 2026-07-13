# Customization Guide

This document explains how to customize the Starter Kit to match your own repository while preserving its architecture and automation.

Most customizations can be performed without modifying workflow or TypeScript source code.

---

# Configuration Philosophy

The Starter Kit separates configuration from implementation.

Instead of modifying workflows directly, customize the repository through centralized configuration files whenever possible.

Current configuration:

```text
config/
└── labels.json
```

Future versions may introduce additional configuration files for other repository settings.

---

# Customizing Repository Labels

Repository labels are managed through:

```text
config/labels.json
```

Each label contains:

- Name
- Color
- Description

Example:

```json
{
    "name": "feature",
    "color": "0E8A16",
    "description": "New functionality or enhancement"
}
```

After modifying labels, run the **Sync Labels** workflow to apply the changes.

---

# Customizing Issue Labels

Issue labels are determined by title prefixes.

Example:

```json
{
    "[Feature]:": "feature",
    "[Bug]:": "bug",
    "[Docs]:": "documentation"
}
```

Example issue:

```text
[Feature]: Add user authentication
```

Automatically receives:

```text
feature
```

---

# Customizing Pull Request Labels

Pull requests are labeled using branch prefixes.

Example:

```json
{
    "feature/": "feature",
    "fix/": "bug",
    "docs/": "documentation"
}
```

Example branch:

```text
feature/dashboard
```

Automatically receives:

```text
feature
```

---

# Customizing Label Colors

Each repository label uses a hexadecimal color.

Example:

```json
{
    "name": "bug",
    "color": "D73A4A"
}
```

GitHub expects hexadecimal colors without the leading `#`.

---

# Adding a New Label

Suppose you want to introduce a new label called:

```text
performance
```

## Step 1

Add the label.

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

Map issue titles.

```json
{
    "[Performance]:": "performance"
}
```

---

## Step 3

(Optional)

Map branch prefixes.

```json
{
    "perf/": "performance"
}
```

---

## Step 4

Run the Sync Labels workflow.

The repository will automatically update.

---

# Customizing Pull Request Size Labels

The Size Labeler action categorizes pull requests based on the total number of changed lines.

Current thresholds:

| Label | Total Changed Lines |
|--------|--------------------:|
| size: XS | 0 – 9 |
| size: S | 10 – 49 |
| size: M | 50 – 249 |
| size: L | 250 – 499 |
| size: XL | 500+ |

To customize these thresholds, modify the Size Labeler custom action.

---

# Customizing Issue Templates

Issue templates are located in:

```text
.github/ISSUE_TEMPLATE/
```

You may:

- Add new templates
- Remove templates
- Update acceptance criteria
- Modify required information

If new templates introduce new title prefixes, update:

```text
config/labels.json
```

---

# Customizing Pull Request Template

The default pull request template is located at:

```text
.github/pull_request_template.md
```

Modify it to match your team's review process.

---

# Customizing Dependabot

Dependabot configuration is located at:

```text
.github/dependabot.yml
```

Common customizations include:

- Update frequency
- Target directories
- Package ecosystems
- Pull request limits
- Grouping rules

---

# Customizing CODEOWNERS

Repository ownership is defined in:

```text
.github/CODEOWNERS
```

Update this file to automatically request reviews from the appropriate maintainers.

---

# Customizing Repository Rules

Repository rules are configured directly through GitHub.

Examples include:

- Required status checks
- Required reviews
- Branch protection
- Merge restrictions

These settings are not stored in the repository itself.

---

# Customizing Workflows

Workflows are located in:

```text
.github/workflows/
```

You can customize:

- Workflow triggers
- Permissions
- Scheduling
- Job dependencies
- Environment variables

When modifying workflows, prefer adjusting configuration rather than changing business logic.

---

# Customizing Custom Actions

Reusable actions are located in:

```text
.github/actions/
```

Each action is implemented as an independent TypeScript project.

Changes generally involve:

- Updating TypeScript source
- Rebuilding the action
- Committing the generated `dist/` directory

---

# Recommended Customization Order

For a new repository, the recommended order is:

1. Rename the repository.
2. Update CODEOWNERS.
3. Configure repository rules.
4. Update `labels.json`.
5. Run the Sync Labels workflow.
6. Customize issue templates.
7. Customize the pull request template.
8. Review Dependabot settings.
9. Verify GitHub Actions permissions.
10. Create the first issue and pull request to validate the setup.

---

# Best Practices

- Prefer centralized configuration over modifying workflows.
- Keep repository conventions consistent.
- Document any custom automation.
- Test changes in a feature branch before merging.
- Keep custom actions focused and reusable.

---

# Related Documentation

- architecture.md
- workflow-guide.md
- repository-structure.md
- ../config/README.md