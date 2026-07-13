# Repository Structure

This document explains the organization of the repository and the purpose of each major directory.

The repository is structured to keep automation, configuration, documentation, and application code clearly separated.

---

# Top-Level Structure

```text
.
├── .github/
├── client/
├── config/
├── docs/
├── server/
│
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── SECURITY.md
```

---

# Directory Overview

## .github/

Contains all GitHub-specific configuration.

Examples include:

- GitHub Actions workflows
- Custom GitHub Actions
- Issue templates
- Pull request template
- CODEOWNERS
- Dependabot configuration

This directory is responsible for repository automation.

---

## client/

Contains the frontend application.

The client is independent of repository automation and focuses solely on the user interface.

---

## server/

Contains the backend application.

This includes APIs, database interaction, authentication, and business logic.

---

## config/

Contains centralized configuration files used by multiple workflows and custom GitHub Actions.

Current configuration:

- labels.json

The objective is to avoid hardcoding configuration inside workflows.

---

## docs/

Contains detailed project documentation.

Unlike the root README, documents in this directory provide in-depth explanations of architecture, customization, and development practices.

---

# Documentation Files

| File | Purpose |
|------|---------|
| README.md | Project overview |
| CONTRIBUTING.md | Contribution guidelines |
| SECURITY.md | Security policy |
| CODE_OF_CONDUCT.md | Community guidelines |
| CHANGELOG.md | Release history |

---

# Design Goals

The repository organization follows several principles.

## Separation of Concerns

Each directory has a clearly defined responsibility.

---

## Discoverability

Related files are grouped together so contributors can easily locate them.

---

## Scalability

The directory structure is designed to accommodate future workflows, custom actions, configuration files, and documentation without significant reorganization.

---

## Maintainability

Configuration, automation, source code, and documentation are intentionally separated to simplify long-term maintenance.

---

# Related Documentation

- architecture.md
- design-principles.md
- workflow-guide.md