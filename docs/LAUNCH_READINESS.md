# Newclearus staging deployment and security plan

Repository inspected 2026-11-02: Next.js 16, React 19, TypeScript. Keep the existing design. This file changes no live infrastructure.

## Deployment pipeline
1. Create a private preview/staging environment on Cloudflare Workers, using Cloudflare's currently recommended vinext path for Next.js 16 after checking application compatibility, or Vercel if runtime dependencies fail.
2. Set GitHub pull requests to produce staging previews. Production deployments require protected branch approval and build/test success.
3. Add DNS staging.newclearus.com only after checking the zone. Do not replace mail records.
4. Review NEXT_PUBLIC_* values: public only. Keep credentials in hosting secrets.
5. Validate all services, country-specific pricing, ICT/EOR calculators, contact forms, server validations, sitemap, robots, SEO titles, performance and mobile breakpoints.

## Production gates
- Test client signup/roles with dedicated Supabase project, RLS policies, MFA for staff, anti-abuse and bot protection.
- Protect forms and authentication endpoints with per-endpoint rate limits; use server-side validation and CAPTCHA/Turnstile as appropriate.
- Provide privacy/terms/consent pages, server-side lead storage with retention policies, verified mail delivery and SPF/DKIM/DMARC.
- Verify uptime synthetic monitoring, Cloudflare Web Analytics and error reporting.
- Confirm US/UK quote calculations and contract/payment workflows before enabling collection.
- Verify backup and rollback; do not touch live Namecheap nameservers, Microsoft 365 email records or production DNS without Kaz's approval.

## Current status
Planning and audit started. No staging deployment, secret provisioning, database or payment integration has been executed. Do not mistake this checklist for completed configuration.
