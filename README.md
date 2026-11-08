# Newclearus

Self-contained static website. Sites serves `dist`. No framework, asset CDNs or external JavaScript.

## Main files
- dist/index.html: all styling, embedded imagery, content, calculator models, guided quiz, embedded jobs and Packet Run game.
- dist/robots.txt and dist/sitemap.xml: configured for intended custom domain https://newclearus.com/.
- .openai/hosting.json: persistent Sites identity.

## Proposed remote support model (1 October 2026)
All rates are provisional business proposals, not verified market prices. Validate delivery costs, utilisation, response targets and margins before public launch.

| Staff band | GBP/month | USD/month | Included remote hours/month |
| --- | ---: | ---: | ---: |
| 1–10 | 349 | 449 | 5 |
| 11–50 | 999 | 1299 | 15 |
| 51–100 | 1799 | 2299 | 30 |
| 101–200 | 2999 | 3899 | 60 |
| 201–500 | 5999 | 7799 | 120 |

Base includes shared 8×5 remote helpdesk, ticket triage and reporting. Coverage timezone agreed in proposal. Physical installations in South Africa remain separately scoped projects, never included on-site support.
Additional approved remote labour: GBP45 or USD59/hour. No unused-hour rollover. Onboarding, hardware, projects and taxes excluded.

Coverage extends availability, not labour hours: 8×5 +0%, 12×5 +30%, 16×5 +60%, 24×5 +100%, 24×7 +140% of the headcount-band retainer, rounded to a whole currency unit.
Management options are additional fixed fees by headcount band. See bandAddons in the HTML. They do not include supplier licences.
Licence allowances remain per seat, with editable unit costs and seat counts. Automatic seat counts track supported staff until manually changed. Defaults are planning budgets, not actual vendor quotes.
Band changes intentionally apply to the whole headcount, with no automatic volume proration. Explain/confirm transitions in the commercial proposal.

## Software delivery
| Package | Hours/month | Development | Review/architecture | QA | GBP | USD |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Dev Flex | 40 | 30 | 4 | 6 | 1499 | 1949 |
| Dev Build | 80 | 60 | 8 | 12 | 2799 | 3599 |
| Delivery Pod | 160 | 120 | 16 | 24 | 4499 | 5799 |
| Product Squad | 320 | 240 | 32 | 48 | 8499 | 10999 |

Shared remote capacity, not dedicated 24/7 staffing. Select one package within the IT builder or request a software-only proposal. Custom role calculator remains available, now capped at 40 hours/week per role. Add multiple roles to represent a team.

## Other estimates
Source EOR fee data is preserved. Salary benchmarks, 15% employer-cost allowances and GBP/USD planning conversion 1.27 are illustrative. No live exchange-rate or salary feed.
EOR fees exclude salaries, employer costs, tax and equipment purchases. Recruitment is once off. Two hardware services become monthly only on 12-month contracts.

## User journeys
- Guided quiz: ICT, EOR or Both. Collects headcount, market, coverage/priorities and comparable current costs. Unknown current costs produce an estimate without savings. Negative differences are shown honestly.
- Estimates persist locally and are shareable in query parameters. Old calculator state migrates to the banded model.
- Enquiries produce a mailto draft or copy text. No backend submission or delivery claim. No form identity/contact details persist to storage.
- Jobs: embedded editable JSON. Expire after listed closing dates, not an external live feed.
- Packet Run: original geometric obstacle runner, opt-in, keyboard/touch/buttons, pause/resume/restart, local best score. Pauses off-screen or when the tab is hidden.
- SEO: descriptive metadata, canonical, Organization/WebSite/Service structured data, crawlable internal links and visible FAQs. No ranking promises or keyword stuffing.

## Verification
Passed JS syntax, all ten tier edge cases, GBP/USD pricing, coverage surcharge, licence seat behaviour, software inclusion, v1-state migration, state bounds, unknown/negative quiz comparisons, EOR regression totals, HTML anchors and structured data.
Game logic checked with a mocked canvas/runtime: start, advancing score, jump input, pause/resume, tab hiding, collision and best score.
Browser visual/interaction QA remains unavailable because the required control-browser skill was not exposed. Optional browser WebMCP support is feature-detected; supported-context validation remains unavailable.

## Launch
The site stays owner-private. Rates, benefits and jobs need business sign-off. Connect newclearus.com, set the intended audience and configure direct form delivery when ready.

## Update: visitor connection banner and Durban delivery game
All visible addresses, mailto actions, contact-form output and structured data now use joinus@newclearus.com. The guided quiz label is "Seniority of new hires (EOR)".

Packet Run begins in Durban with a UK, USA or random destination. Delivery succeeds after 300 seconds of active play. Route lengths are random fictional game distances; remaining distance scales with progress and appears in the loss message (UK: km; USA: miles). Pauses do not count toward travel time. Success stops the game and supports another run. No actual network routing is implied.

The banner makes one browser-side HTTPS request to https://api.country.is/ to obtain the visitor's public IP and country. No account, key, cookie, referrer or page configuration is sent. IP and country are displayed using textContent, remain in memory only, and are not stored by this page or attached to enquiries. The provider necessarily receives the request's source IP. VPN/proxy locations can differ from the visitor's physical location. About-readings text identifies Country.is.

Approximate site response time is the median of three uncached same-origin requests to connection-check.txt, including transfer/server time. It is not ICMP ping or a measurement to the selected game destination. Both readings refresh once on load and on manual request. Six-second request timeouts and "Unavailable" fallbacks handle blockers/outages. The header's measured height keeps sticky navigation aligned when text wraps.

Verification: all email occurrences, EOR label, JS syntax, anchors and JSON-LD; a complete five-minute game run, pause exclusion, UK/USA losses and success end state; mocked IP/country responses, IPv4/IPv6 validation, malformed responses, median site latency and failure fallbacks. Browser rendering and live visitor-network requests remain unverified in this environment.

## 5 October 2026 service-flow update (supersedes earlier model descriptions)
- Homepage has ICT and EOR only. Both-service intent is a contact checkbox, included in email and copied enquiries. The former combined-package calculator and discount are no longer offered on this page.
- Dedicated ICT salary guide imports all 20 ZAR gross-base figures from `newclearus_ict_higher_end_pay.xlsx`, sheet `Higher-end pay`, rows 8–11. Levels: Junior, Intermediate, Senior, Advanced, Specialist. Display conversions use the workbook assumptions R22/GBP and R16.50/USD, explicitly not live FX. Advanced/Specialist are extrapolated. Salaries are not discounted by service contract terms. Final per-recruit client fees require a proposal.
- Shared ICT support, development, network/security and data/automation capacity uses existing role/level hourly planning rates, billed in 20/40/80/160-hour monthly packages. GBP rates use the existing 1.27 planning conversion and round to currency precision before multiplication. No unsupported market-rate claims.
- EOR fees and terms retained. Financial and Legal EOR specialisation added.
- The main page removes diagnostics and the game. Secondary detail lives behind a disclosure or FAQ link. Section reveals and a next-section arrow respect reduced-motion preferences. FAQ and careers now share the heartbeat logo.
- Validation: JS syntax and DOM-contract initialization checks; every salary/market combination, recruit multiplication, shared packages, EOR fees, service visibility and both-service enquiry intent checked. Browser visual QA unavailable because the required control-browser skill is not available.

### Security status
This remains a static Site with no server-side enquiry submission. Its mailto draft does not create a writable HTTP endpoint. The available native Sites tools and hosting manifest do not expose WAF rules, per-IP rate limits, challenge actions or DDoS policy configuration. No such rule was configured in this update, and JavaScript controls are not claimed as attack protection. Custom edge rate limiting and verification of DDoS settings require access to the hosting provider's supported security controls. Do not represent these as complete or guaranteed to block every attack.

## 6 October 2026: shared ICT and EOR sector selection (current)
- Removed public salary figures, salary dataset, dedicated ICT hiring and careers salary amounts at the owner's request.
- ICT now offers hourly shared capacity, separate project quotes and 20/40/80/160-hour packages using retained hourly rates. Existing five-year 10% service discount applies to hourly packages; project quotes require scoping.
- Five-year term is the fresh-visit default across ICT/EOR. All prices identify the commitment. Explicit saved visitor choices remain respected. Month-to-month and 12-month options remain available.
- EOR has four initially closed industry disclosures, each with ten role checkboxes. One total employee count controls the fee; roles and compensation do not affect the per-employee rate. Existing EOR package prices retained.
- Bolt-on checkboxes synchronize across both divisions and are included in email/copied enquiries. Unpriced extras are explicitly quoted separately and do not silently alter totals.
- Checks passed: startup DOM contract, both currencies/all terms, industry/role counts, fee independence, bolt-on synchronization, project and hourly journeys, enquiries and salary removal. Visual browser QA remains unavailable in this environment.

## 6 October 2026: restored EOR itemized fee builder
Restored the seven-service rate card from source commit b0fc236, corroborating the original page pricing: Recruitment GBP300/USD400 once off; EOR & Payroll GBP200/USD235 contracted or GBP250/USD285 month-to-month; Outage Kit, IT Support & Security, Co-working, Hardware Provisioning and Wellness GBP100/USD120 each contracted. Support/Security, Co-working and Wellness are GBP150/USD170 month-to-month. Hardware/Outage Kit are upfront purchase quotes on month-to-month, never silently included at zero cost.
The existing 5-year 10% discount also applies to recruitment, as in the historical calculator. Default selection is EOR & Payroll; all seven services are selectable. Monthly sum multiplies staff count; recruitment remains separate. First-12-month fee total includes recruitment but excludes pay, statutory costs, taxes and unpriced purchases. Sector and expertise never affect EOR fee calculations. Ready-made packages remain an explicit alternative pricing mode; changing a checkbox returns to itemized prices, avoiding double charging.
Tests passed for GBP/USD, all terms, monthly/once-off/annual calculations, purchase exclusions, empty and recruitment-only cases, package/custom switching, role/level independence and enquiry outputs. Browser QA remains unavailable.

## 8 October 2026: one yearly contract
Owner requested fixed transparent prices and a streamlined journey. All term selectors, term discounts and month-to-month pricing removed. Uses the prior 12-month EOR rates: GBP200/USD235 EOR & Payroll, GBP100/USD120 each of five optional monthly services, GBP300/USD400 recruitment once per hire. Rates fixed for 12 months; same scope/count holds monthly fees constant. Published exclusions remain explicit. EOR presets now select services at their summed public rates, with no competing package price.
ICT offers fixed scheduled time, flexible monthly time and project-based hours. Same published hourly rate by service/expertise, monthly/yearly totals for retainers and a scoped-hours labour budget for projects. Project budgets are not represented as approved fixed deliverable quotes. Corrected Advanced/Specialist ordering to the original increasing rate schedule. No salary figures. Optional industry content follows pricing. Existing enquiries still generate an email draft or copied text.
Validated current script startup, both markets, EOR sums × headcount, once-off/annual totals, presets, role/level independence, all ICT models, enquiry output and removed stale term text. Browser visual QA unavailable under current skill/tool availability.

## 11 October 2026: unified South African remote-team offer
Single EOR checkbox calculator retained against the supplied screenshot. Removed ICT/EOR tabs, ICT calculator and fixed/flexible/project controls. UK/USA toggle retained. User-supplied 28-company origin story added; outcomes copy distinguishes managing deliverables from employment administration. Six sectors × ten specialisms. All services now on 36-month contracts.
Core Hire GBP180 per employee/month (EOR/payroll); Core Tech GBP350 (plus IT support/security and full hardware); Core Platinum GBP580 (all six monthly services, preserving prior premium scope). Recruitment GBP300/USD400 is a separate once-off charge per hire, automatically selected by package buttons. Changing a checkbox returns to explicit individual rates, with clear text. Individual service rates remain from the screenshot. New USD package values use existing 1.27 planning conversion and are explicitly indicative pending a USD proposal, not approved USD commercial rates. Monthly, first-year and full-36-month totals exclude compensation/statutory costs/taxes and assume unchanged headcount.
Validated source initialization, screenshot's 13×GBP200 example, every package, per-hire recruitment, full-term totals, USD conversion labels, empty/custom selections, industry-independent fees, sixty roles, only one calculator and enquiries. Browser visual QA unavailable.

## 19 October 2026: standalone hourly ICT restored
Added remote helpdesk support, software development and cybersecurity to a standalone ICT section. Billing covers active task work and agreed task-specific standby, with separately quoted rates. Added navigation, quote email and aligned ICT FAQ copy. EOR pricing unchanged.
