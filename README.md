# Newclearus private review website

Updated 7 November 2026. Existing Site identity and owner-only audience retained. The public Newclearus Site was not changed.

## Current journey

Exact requested People./Technology../Simplified... headline and origin description. On arrival, a market confirmation dialog offers optional approximate country detection and optional browser estimate storage. Manual UK/USA selection remains available and overrides pending suggestions. Country detection uses a consent-gated same-origin Worker endpoint and the network country signal, with browser language/timezone fallback. It returns only country and does not save the visitor's IP or request precise location. South African locations require manual selection of the UK/USA client market.

The quote starts with ICT/EOR checkboxes and an existing-team location (USA/UK/South Africa). Selected calculators appear in that order. ICT uses headcount, service checkboxes, per-person hours and a separate once-off/ongoing delivery choice per service. EOR uses headcount, an exclusive package choice or custom services, plus selectable extras. The once-off EOR option is a recruitment project, while employment/payroll remain ongoing South African services. Included package services are never charged twice.

The summary separately displays once-off charges, ongoing monthly fees, the service-fee portion of the three-month deposit and the estimated upfront service amount. Salary, employer costs and any salary-related deposit are determined on discovery. Deposits are security and are excluded from the 12-month service cost. Final deposit treatment and payment terms require a proposal. All service agreements now run for 12 months. No 36-month terms remain in the served content.

The service catalogue follows pricing. Six remotely deliverable ICT categories and three service combinations; three retained EOR packages plus custom service selection; full EOR service descriptions. The EOR areas-of-expertise section was removed.

The resource centre retains 13 working entries and 11 dedicated resources, with filters, empty states, interactive checklists, downloads and budget worksheets. Packet Run is concealed in the “Got some time to spare?” disclosure, stays idle until started, follows the UK/USA market, supports jumping and pause/restart, and pauses when closed. A left-side reading guide reports 0–100% and responds to changing content height.

## Commercial assumptions

Retained ICT labour planning rates: GBP45/USD59 per working hour. All amounts follow headcount, entered hours and delivery type. ICT combinations are presets, with no invented fixed bundle price or discount. Licences, cloud consumption, hardware, standby and taxes are separately scoped.

EOR individual rates: GBP200/USD235 per employee/month for EOR & Payroll, GBP100/USD120 for each of five optional recurring services, GBP300/USD400 for recruitment once per hire. Retained package rates: Core Hire GBP180, Core Tech GBP350, Core Platinum GBP580. USD package values are indicative at GBP1 = USD1.27, not live FX. Fees are independent of salary.

## Delivery and privacy

Dependency-free Worker ESM, with source assets in public/ and an embedded-asset build. worker/index.mjs owns the country endpoint and asset responses. scripts/build.mjs versions browser assets and produces dist/server/index.js. Sites controls authentication. Owner-only access, noindex/nofollow and crawler disallow remain in place. Do not change the audience without explicit approval.

The enquiry form prepares a mailto draft or copies an enquiry. No automatic enquiry submission or database writes. Location suggestion and estimate storage each require opt-in. No third-party geolocation call, analytics or ad tracking is installed. Game scores and checklist progress stay in the current page.

## Validation

Run node tests/pricing.test.cjs, node tests/game.test.cjs, python tests/site.test.py, node scripts/build.mjs, node scripts/validate-artifact.mjs and node tests/worker.test.mjs.

3,844 pricing scenarios plus mixed totals, location invariance, deposit, empty selection and boundary checks. Worker checks cover consent, country-only responses, no-store country API, allowed methods, embedded pages/assets and private headers. Game checks cover idle behavior, collisions, restart, pause, closed-section behavior and market changes. Static checks cover all 18 HTML pages, links, anchors, assets, metadata and JSON-LD.

Browser QA covers exact headline, welcome choices and fallback/manual market selection; combined GBP/USD totals; ICT project/ongoing choices; EOR package/recruitment mode; deposit selection; estimate download; resource filters/checklist progress; game start, jump, pause and destination; mobile menu; and document overflow at 375, 768 and 1280 CSS pixels. Reading progress was observed at 0% and 100%. The temporary responsive harness is not included in production.
