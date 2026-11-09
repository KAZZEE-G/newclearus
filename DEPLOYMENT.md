# newclearus deployment

This folder is an export-based migration snapshot, not a verified production deployment.

- Source status: migrated from supplied source archive.
- Class: static.
- Version control: commit this repository; tag each verified production release.
- Rollback: redeploy an older successful Git commit from Cloudflare Pages, or revert the commit and push.
- DNS: do not repoint the domain until the staging .pages.dev address passes smoke tests.
- Security: apply Cloudflare WAF, DDoS protection, rate limiting where available, and server-side input validation. No zero-risk guarantee.
