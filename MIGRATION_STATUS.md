# Migration status (2026-11-09)

Static HTML/CSS/JS. Current public site resolves and renders. Do not change DNS before staging release comparison. Source has been committed on the migration/source branch.

Source of truth: original website source archive supplied by owner. **Source is available on `migration/source`. An independent production deployment has not yet been verified.**

Recommended workflow: review verified source on `migration/source`, run checks, open a PR, deploy preview, smoke-test, then merge and release. Keep old commits and tags for rollback. Preserve all MX, SPF, DKIM and domain verification DNS records. Do not claim absolute DDoS or SQL injection immunity.
