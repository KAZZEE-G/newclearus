# Migration status (2026-11-09)

Static HTML/CSS/JS. Current public site resolves and renders. Do not change DNS before staging release comparison. Source export available locally; not yet committed.

Source of truth: original ChatGPT Sites ZIP export supplied by owner. **No full source import or new production release has been performed.**

Recommended workflow: import verified source to `migration/import-chatgpt-sites`, run checks, open a PR, deploy preview, smoke-test, then merge and release. Keep old commits and tags for rollback. Preserve all MX, SPF, DKIM and domain verification DNS records. Do not claim absolute DDoS or SQL injection immunity.
