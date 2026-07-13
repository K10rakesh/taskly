# Security Policy

Security is a core design principle of this project.

This repository includes multiple automated security mechanisms to help identify vulnerabilities early and maintain a secure development workflow.

---

# Supported Versions

The latest version of the project is actively maintained.

| Version | Supported |
|---------|:---------:|
| Latest | ✅ |
| Older Versions | ❌ |

Please report vulnerabilities against the latest supported version whenever possible.

---

# Reporting a Vulnerability

If you discover a security vulnerability, please **do not** create a public GitHub issue.

Instead:

1. Use GitHub's **Private Vulnerability Reporting** feature (if enabled).
2. If private reporting is unavailable, contact the repository maintainer directly.
3. Include as much relevant information as possible to help reproduce and understand the issue.

A good report should include:

- Description of the vulnerability
- Steps to reproduce
- Expected behavior
- Actual behavior
- Impact assessment
- Suggested remediation (if known)

---

# Disclosure Process

When a vulnerability is reported:

1. The report will be acknowledged.
2. The vulnerability will be investigated.
3. A fix will be developed and tested.
4. A security update will be released.
5. Public disclosure will occur after the fix is available.

The exact response timeline depends on the severity and complexity of the issue.

---

# Security Features

This repository includes several automated security mechanisms.

## CodeQL

Performs static code analysis to identify common security vulnerabilities and coding mistakes.

---

## Dependency Review

Reviews dependency changes introduced by pull requests to identify potential security risks before merging.

---

## Dependabot

Automatically monitors project dependencies for known vulnerabilities and can generate pull requests to update affected packages.

---

## Secret Scanning

GitHub detects supported secrets accidentally committed to the repository.

---

## Push Protection

Pushes containing supported secrets are blocked before reaching the repository.

---

## Branch Protection

Repository rules help ensure that code is reviewed and validated before being merged.

---

# Security Best Practices

Contributors should:

- Keep dependencies up to date.
- Never commit secrets or credentials.
- Review dependency updates before merging.
- Validate changes using the CI workflow.
- Report security concerns responsibly.

---

# Scope

This policy applies to:

- Source code
- GitHub Actions
- Repository automation
- Configuration files
- Documentation

---

# Third-Party Dependencies

This project relies on third-party packages.

Dependency health is monitored using:

- Dependabot
- Dependency Review
- GitHub Dependency Graph

---

# Related Documentation

- `CONTRIBUTING.md`
- `.github/workflows/README.md`
- `.github/README.md`