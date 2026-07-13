# Workflow Guide

This document explains every GitHub Actions workflow included in the Starter Kit.

Each workflow is designed to automate a specific repository management task while following the project's design principles of modularity, automation, and maintainability.

---

# Workflow Overview

```text
Repository Event
        │
        ▼
GitHub Workflow
        │
        ▼
Validation
        │
        ▼
Custom Action (if required)
        │
        ▼
Repository Update
```

Each workflow has a single responsibility and, whenever possible, delegates business logic to reusable custom GitHub Actions.

---

# Workflow Summary

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| auto-assign.yml | Issues | Automatically assigns new issues |
| ci.yml | Push, Pull Request | Builds and validates the project |
| codeql.yml | Push, Pull Request, Schedule | Static code analysis |
| commitlint.yml | Pull Request | Validates commit messages |
| dependency-review.yml | Pull Request | Reviews dependency changes |
| issue-auto-label.yml | Issues | Automatically labels issues |
| pr-auto-label.yml | Pull Request | Automatically labels pull requests |
| size-labeler.yml | Pull Request | Applies pull request size labels |
| stale.yml | Schedule | Manages inactive issues and pull requests |
| sync-labels.yml | Manual | Synchronizes repository labels |

---

# Repository Lifecycle

The following diagram illustrates how workflows interact throughout the development lifecycle.

```text
Create Issue
      │
      ▼
Auto Assign
      │
      ▼
Issue Auto Label
      │
      ▼
Project Management
```

---

```text
Create Branch
      │
      ▼
Implement Feature
      │
      ▼
Commit Changes
      │
      ▼
Open Pull Request
      │
      ▼
Commitlint
      │
      ▼
CI
      │
      ▼
Dependency Review
      │
      ▼
CodeQL
      │
      ▼
PR Auto Label
      │
      ▼
Size Labeler
      │
      ▼
Merge
```

---

# Workflow Details

## auto-assign.yml

### Purpose

Automatically assigns newly created issues to the configured maintainer.

### Trigger

```
issues:
  opened
```

### Responsibilities

- Assign issue
- Keep issue ownership consistent

---

## ci.yml

### Purpose

Runs the Continuous Integration pipeline.

### Trigger

```
push

pull_request
```

### Responsibilities

- Install dependencies
- Build project
- Execute validation
- Prevent broken code from being merged

---

## commitlint.yml

### Purpose

Ensures commit messages follow the Conventional Commits specification.

### Example

Valid

```text
feat: add authentication
```

Invalid

```text
updated login
```

---

## dependency-review.yml

### Purpose

Reviews dependency changes introduced by pull requests.

The workflow helps identify:

- vulnerable packages
- risky dependency updates
- unexpected dependency additions

---

## codeql.yml

### Purpose

Runs GitHub CodeQL static analysis.

Detects:

- security vulnerabilities
- common coding mistakes
- unsafe programming patterns

---

## issue-auto-label.yml

### Purpose

Automatically labels issues based on their title.

Configuration:

```text
config/labels.json
```

Example:

```text
[Bug]: Login fails
```

↓

```text
bug
```

---

## pr-auto-label.yml

### Purpose

Automatically labels pull requests based on branch naming.

Example

```text
feature/auth
```

↓

```text
feature
```

---

## size-labeler.yml

### Purpose

Calculates pull request size and applies exactly one size label.

Example

```text
Added: 145

Deleted: 38

↓

Total: 183

↓

size: M
```

---

## stale.yml

### Purpose

Keeps the repository clean.

Automatically:

- marks inactive issues as stale
- marks inactive pull requests as stale
- closes inactive items after the configured grace period

---

## sync-labels.yml

### Purpose

Synchronizes repository labels using:

```text
config/labels.json
```

Supports:

- create
- update
- prune
- dry-run

---

# Execution Philosophy

Every workflow follows the same philosophy.

```text
Trigger

↓

Validate

↓

Execute

↓

Report
```

This keeps workflows predictable and easy to maintain.

---

# Workflow Dependencies

Some workflows operate independently.

Others share common configuration.

```text
labels.json
      │
      ├──────────────┐
      │              │
      ▼              ▼
Sync Labels    Issue Auto Label
                     │
                     ▼
             PR Auto Label
```

Likewise:

```text
Pull Request
      │
      ▼
Commitlint
      │
      ▼
CI
      │
      ▼
Dependency Review
      │
      ▼
CodeQL
```

Each workflow focuses on a single responsibility while contributing to the overall repository quality.

---

# Best Practices

- Keep workflows focused on one task.
- Delegate business logic to custom actions whenever practical.
- Prefer configuration over hardcoded values.
- Validate changes before merging.
- Regularly review workflow permissions and update dependencies.

---

# Related Documentation

- architecture.md
- customization.md
- repository-structure.md
- ../.github/workflows/README.md