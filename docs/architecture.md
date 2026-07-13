# Architecture

This document explains the overall architecture of the repository and how its different components interact.

The project is designed around modularity, automation, centralized configuration, and reusable GitHub Actions.

---

# High-Level Architecture

```text
                   Repository
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
   Configuration     Workflows     Documentation
        │               │
        │               ▼
        │        Custom Actions
        │               │
        └───────────────┼────────────────┐
                        ▼                ▼
                  GitHub API      Repository State
```

The repository is divided into four primary layers:

- Configuration
- Automation
- Application Code
- Documentation

Each layer has a clearly defined responsibility.

---

# Layer 1 — Configuration

The configuration layer acts as the single source of truth for repository behavior.

Current configuration includes:

```text
config/
└── labels.json
```

Rather than hardcoding values throughout workflows, reusable configuration files are consumed by multiple workflows and custom actions.

Examples:

- Repository labels
- Issue label mappings
- Pull request label mappings

Future versions may introduce additional configuration files for:

- Branch naming
- Milestones
- Releases
- Repository policies

---

# Layer 2 — GitHub Workflows

GitHub Workflows act as orchestration layers.

Their responsibilities include:

- responding to GitHub events
- validating repository changes
- invoking reusable custom actions
- enforcing repository standards

Whenever possible, workflows delegate complex logic to reusable actions rather than embedding scripts directly.

---

# Layer 3 — Custom Actions

Custom GitHub Actions contain the business logic of the repository.

Each action is implemented as an independent Node.js project written in TypeScript.

Example architecture:

```text
GitHub Event
        │
        ▼
Workflow
        │
        ▼
Custom Action
        │
        ▼
GitHub REST API
```

This separation allows workflows to remain small and easy to understand.

---

# Layer 4 — Documentation

Documentation is treated as a first-class component of the project.

Documentation exists at multiple levels:

- Repository
- Folder
- Action
- Workflow
- Architecture

Every major directory contains documentation describing its purpose and design.

---

# Custom Action Architecture

All custom actions follow the same internal structure.

```text
Action
│
├── action.yml
├── src/
│   ├── index.ts
│   ├── github.ts
│   ├── types.ts
│   ├── summary.ts
│   └── ...
│
└── dist/
```

Responsibilities are separated intentionally.

| File | Responsibility |
|------|----------------|
| index.ts | Coordinates execution |
| github.ts | GitHub API interactions |
| summary.ts | Workflow summaries |
| types.ts | Shared interfaces |
| domain files | Business logic |

This architecture keeps actions modular and maintainable.

---

# Workflow Architecture

Most workflows follow the same lifecycle.

```text
Repository Event
        │
        ▼
Workflow Trigger
        │
        ▼
Validation
        │
        ▼
Custom Action
        │
        ▼
Repository Update
```

This keeps workflows focused on orchestration rather than implementation.

---

# Configuration Flow

Several repository features share the same configuration.

```text
labels.json
      │
      ├─────────────┐
      │             │
      ▼             ▼
Sync Labels    Issue Auto Label
                     │
                     ▼
             PR Auto Label
```

A single configuration file drives multiple automation components.

---

# Design Principles

The architecture is guided by several core principles.

## Single Responsibility

Each component should perform one clearly defined task.

---

## Separation of Concerns

Configuration, automation, business logic, and documentation remain independent.

---

## Reusability

Custom actions should be reusable across repositories.

---

## Convention over Configuration

Repository conventions should be enforced automatically whenever possible.

---

## Scalability

The architecture should accommodate additional workflows, actions, and configuration files without requiring significant restructuring.

---

# Future Evolution

The architecture is designed to support future enhancements such as:

- Additional custom actions
- Reusable workflows
- Centralized configuration files
- Automated releases
- Repository validation
- AI-assisted repository maintenance

---

# Related Documentation

- repository-structure.md
- design-principles.md
- workflow-guide.md
- customization.md