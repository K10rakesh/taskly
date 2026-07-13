# GitHub Workflows

This directory contains all GitHub Actions workflows used to automate repository maintenance, security, quality assurance, and development workflows.

The goal is to minimize manual repository management by automating repetitive tasks and enforcing repository standards.

---

# Directory Structure

```text
workflows/
│
├── auto-assign.yml
├── ci.yml
├── codeql.yml
├── commitlint.yml
├── dependency-review.yml
├── issue-auto-label.yml
├── pr-auto-label.yml
├── size-labeler.yml
├── stale.yml
└── sync-labels.yml
```

---

# Workflow Overview

| Workflow | Purpose | Trigger |
|----------|----------|---------|
| `auto-assign.yml` | Automatically assigns newly created issues | Issues |
| `ci.yml` | Builds and validates the project | Push, Pull Request |
| `codeql.yml` | Performs static code analysis | Push, Pull Request, Schedule |
| `commitlint.yml` | Validates commit messages | Pull Request |
| `dependency-review.yml` | Reviews dependency changes for security risks | Pull Request |
| `issue-auto-label.yml` | Automatically labels issues | Issues |
| `pr-auto-label.yml` | Automatically labels pull requests | Pull Request |
| `size-labeler.yml` | Applies size labels to pull requests | Pull Request |
| `stale.yml` | Marks and closes inactive issues and pull requests | Schedule |
| `sync-labels.yml` | Synchronizes repository labels from configuration | Manual |

---

# Workflow Details

## auto-assign.yml

Automatically assigns newly created issues to the repository owner.

### Trigger

- Issue opened

### Purpose

Ensures that every issue has an assignee immediately after creation.

---

## ci.yml

Runs the Continuous Integration pipeline.

### Responsibilities

- Install dependencies
- Build the project
- Run project validation
- Fail on build errors

### Trigger

- Push
- Pull Request

---

## codeql.yml

Performs static security analysis using GitHub CodeQL.

### Responsibilities

- Detect common security vulnerabilities
- Detect coding mistakes
- Upload security findings to GitHub Security

### Trigger

- Push
- Pull Request
- Scheduled analysis

---

## commitlint.yml

Validates commit messages against the Conventional Commits specification.

### Responsibilities

- Prevent invalid commit messages
- Encourage consistent commit history

### Trigger

- Pull Request

---

## dependency-review.yml

Analyzes dependency changes introduced in pull requests.

### Responsibilities

- Detect vulnerable packages
- Detect license issues
- Detect risky dependency updates

### Trigger

- Pull Request

---

## issue-auto-label.yml

Automatically applies labels to newly created issues.

### Responsibilities

- Read issue title
- Match configured prefixes
- Apply appropriate labels

Configuration is defined in:

```text
config/labels.json
```

---

## pr-auto-label.yml

Automatically labels pull requests based on branch naming conventions.

### Responsibilities

- Read source branch
- Match configured prefixes
- Apply appropriate labels

Configuration is defined in:

```text
config/labels.json
```

---

## size-labeler.yml

Automatically categorizes pull requests according to the total number of changed lines.

### Responsibilities

- Calculate additions and deletions
- Determine pull request size
- Remove outdated size labels
- Apply the correct size label
- Generate a workflow summary

This workflow uses the custom Size Labeler GitHub Action.

---

## stale.yml

Automatically manages inactive issues and pull requests.

### Responsibilities

- Mark inactive items as stale
- Close items after the configured grace period

This helps keep the repository clean and focused.

---

## sync-labels.yml

Synchronizes repository labels with the configuration stored in:

```text
config/labels.json
```

### Responsibilities

- Create missing labels
- Update existing labels
- Optionally remove unmanaged labels
- Support dry-run execution

This workflow uses the custom Sync Labels GitHub Action.

---

# Workflow Philosophy

Every workflow in this repository follows a common set of principles.

## Small Responsibilities

Each workflow performs one well-defined task.

---

## Reusability

Whenever possible, workflows delegate logic to reusable custom GitHub Actions instead of embedding complex scripts.

---

## Automation First

Routine maintenance tasks should be automated to reduce manual effort and improve consistency.

---

## Security by Default

Security checks are integrated into the development workflow rather than treated as optional steps.

---

# Related Documentation

- `../README.md`
- `../actions/README.md`
- `../../config/README.md`