# Contributing

Thank you for your interest in contributing to this project.

Whether you're fixing a bug, improving documentation, adding a new feature, or enhancing repository automation, your contributions are welcome.

This document explains the development workflow and repository standards.

---

# Before You Begin

Before creating an issue or pull request, please:

- Search existing issues to avoid duplicates.
- Read the project documentation.
- Follow the repository conventions described below.

---

# Development Workflow

The recommended workflow is:

```text
Fork Repository
        │
        ▼
Create Feature Branch
        │
        ▼
Implement Changes
        │
        ▼
Test Changes
        │
        ▼
Commit Using Conventional Commits
        │
        ▼
Open Pull Request
        │
        ▼
Address Review Feedback
        │
        ▼
Merge
```

---

# Branch Naming

Use descriptive branch names.

Examples:

```text
feature/add-authentication

fix/login-validation

docs/update-readme

refactor/database-service

test/add-user-tests

ci/update-workflows

chore/update-dependencies
```

---

# Commit Messages

This repository follows the Conventional Commits specification.

Examples:

```text
feat: add JWT authentication

fix: resolve login validation bug

docs: update installation guide

refactor: simplify label synchronization

test: add integration tests

ci: configure dependency review

chore: update dependencies
```

Invalid commit messages will fail automated validation.

---

# Pull Requests

Every pull request should:

- Have a clear objective.
- Reference related issues whenever applicable.
- Pass all required status checks.
- Follow the pull request template.
- Keep changes focused on a single concern.

---

# Issue Templates

Please use the appropriate issue template.

Available templates include:

- Feature
- Bug
- Documentation
- Refactor
- Chore
- Testing
- CI

Templates help maintain consistency and enable repository automation.

---

# Repository Automation

Several repository management tasks are automated.

Examples include:

- Automatic issue assignment
- Automatic labeling
- Pull request size labeling
- Dependency review
- CodeQL analysis
- Continuous Integration
- Label synchronization
- Stale issue management

These automations help maintain repository quality while reducing manual effort.

---

# Coding Standards

When contributing code:

- Write clear, readable code.
- Prefer small, focused pull requests.
- Avoid unnecessary complexity.
- Keep functions focused on a single responsibility.
- Update documentation whenever behavior changes.

---

# Documentation

Documentation is considered part of the project.

When introducing new functionality:

- Update relevant documentation.
- Add or update examples where appropriate.
- Keep READMEs accurate.

---

# Reporting Bugs

A good bug report should include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment information

---

# Suggesting Features

Feature requests should clearly describe:

- The problem being solved
- Proposed solution
- Alternative approaches (if any)
- Expected benefits

---

# Questions

If you are unsure about a contribution, open a discussion or create an issue before starting implementation.

Early discussion often prevents duplicated effort.

---

# Thank You

Every contribution—whether code, documentation, testing, or feedback—helps improve the project.

Thank you for taking the time to contribute.