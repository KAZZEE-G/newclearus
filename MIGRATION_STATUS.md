# Deployment status (2026-11-09)

**Staging live:** https://newclearus-web.pages.dev from GitHub `migration/source`. Visitor QA confirmed home, FAQ, careers, privacy, legal pages, working client-side calculator, HTTPS. Contact enquiry currently opens an email draft and does not submit to a backend.

**Production pending:** The Cloudflare DNS zone for `newclearus.com` has proxied apex and www CNAMEs to newclearus-web.pages.dev. MX/SPF/MS verification and autodiscover preserved. Zone is pending authoritative nameserver switch; the registrar account needs renewed authenticated access. Attach both custom domains in Pages after Cloudflare zone activation and verify HTTPS before declaring production migrated.
