# GitHub Configuration

This directory contains all GitHub-specific configuration for the repository, including GitHub Actions workflows, custom actions, issue templates, pull request templates, and repository automation.

The goal is to keep repository management automated, consistent, and easy to maintain.

---

# Directory Structure

```text
.github/
│
├── actions/                  # Reusable custom GitHub Actions
├── workflows/                # GitHub Actions workflows
├── ISSUE_TEMPLATE/           # Issue templates
│
├── CODEOWNERS                # Default code reviewers
├── dependabot.yml            # Dependency update configuration
└── pull_request_template.md  # Default pull request template
```

---

# Contents

## actions/

Contains reusable custom GitHub Actions developed specifically for this repository.

Current custom actions include:

- Apply Label
- Sync Labels
- Size Labeler

These actions are designed to be reusable across repositories and reduce workflow duplication.

See:

```
.github/actions/README.md
```

---

## workflows/

Contains all GitHub Actions workflows responsible for repository automation.

Examples include:

- Continuous Integration
- Commit Message Validation
- CodeQL Analysis
- Dependency Review
- Automatic Issue Assignment
- Automatic Labeling
- Pull Request Size Labeling
- Label Synchronization
- Stale Issue Management

See:

```
.github/workflows/README.md
```

---

## ISSUE_TEMPLATE/

Contains standardized issue templates used when creating new issues.

Templates help maintain consistent issue reporting and simplify repository management.

Available templates include:

- Feature Request
- Bug Report
- Documentation
- Refactor
- Chore
- Testing
- CI

See:

```
.github/ISSUE_TEMPLATE/README.md
```

---

## CODEOWNERS

Defines default reviewers for files and directories.

GitHub automatically requests reviews from the appropriate owners when pull requests modify matching files.

---

## dependabot.yml

Configures Dependabot version updates.

Current configuration includes:

- GitHub Actions updates
- Backend dependency updates
- Grouped dependency updates
- Automatic pull request creation

---

## pull_request_template.md

Provides a default pull request template.

Every pull request follows a consistent structure including:

- Objective
- Changes
- Validation
- Related Issues

---

# Repository Philosophy

The automation contained within this directory follows a few core principles.

## Automation First

Routine maintenance tasks should be automated whenever possible.

Examples include:

- labeling
- dependency updates
- stale issue management
- security scanning

---

## Secure by Default

Security tooling is enabled by default.

Examples include:

- CodeQL
- Dependency Review
- Dependabot
- Secret Scanning

---

## Consistency

Repository conventions should be enforced automatically rather than manually.

Examples include:

- commit message validation
- issue templates
- pull request templates
- standardized labels

---

## Reusability

Custom GitHub Actions are designed to be modular and reusable across multiple repositories.

---

# Related Documentation

- `.github/actions/README.md`
- `.github/workflows/README.md`
- `.github/ISSUE_TEMPLATE/README.md`
- `../config/README.md`