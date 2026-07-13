# Issue Templates

This directory contains the issue templates used throughout the repository.

The templates standardize issue creation by ensuring that contributors provide the information necessary to understand, prioritize, and resolve an issue.

Using templates also enables repository automation such as automatic labeling and project management.

---

# Directory Structure

```text
ISSUE_TEMPLATE/
│
├── bug.md
├── chore.md
├── ci.md
├── documentation.md
├── feature.md
├── refactor.md
└── testing.md
```

---

# Available Templates

| Template | Purpose |
|----------|---------|
| Bug | Report defects or unexpected behavior |
| Feature | Request a new feature or enhancement |
| Documentation | Create or update project documentation |
| Refactor | Improve existing code without changing behavior |
| Chore | Repository maintenance tasks |
| Testing | Improve or add automated tests |
| CI | Continuous Integration and GitHub Actions improvements |

---

# Template Structure

Every issue template follows a consistent structure.

```text
Objective

↓

Scope

↓

Reason

↓

References

↓

Acceptance Criteria
```

Maintaining a consistent format makes issues easier to review, prioritize, and automate.

---

# Automation

Issue templates work together with several repository automations.

## Automatic Labeling

Issue titles follow a standardized prefix.

Example:

```text
[Feature]: Add authentication
```

The prefix is matched against the configuration in:

```text
config/labels.json
```

The appropriate repository label is then applied automatically.

---

## Automatic Assignment

New issues are automatically assigned to the repository owner.

---

## Project Automation

Issues are automatically added to the configured GitHub Project.

As the issue progresses through its lifecycle, project status is updated automatically.

---

# Best Practices

- Use the most appropriate template.
- Write clear and descriptive titles.
- Complete every section whenever possible.
- Keep acceptance criteria specific and measurable.
- Link related issues and pull requests when applicable.

---

# Creating New Templates

When adding a new issue template:

1. Create the Markdown file.
2. Add an appropriate title prefix.
3. Update `config/labels.json` if automatic labeling is required.
4. Test the template by creating a new issue.

---

# Related Documentation

- `../README.md`
- `../workflows/README.md`
- `../../config/README.md`