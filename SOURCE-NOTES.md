# Newclearus source export

This export contains the complete original source from saved Site version 2, commit 66b42d43ecac91d129ff259e6c5fad6b088ff770. All 48 original files are preserved byte for byte. EXPORT-MANIFEST.json records file sizes, SHA-256 checksums and original Git blob IDs. These two export documents are additions, not changes to the website source.

## Contents

- public/: the original HTML, CSS, browser code, images, resource pages, pricing calculator and packet game.
- worker/index.mjs: the server entry source and consent-gated country suggestion endpoint.
- scripts/: local server, build, asset versioning and artifact validation.
- tests/: pricing, game, link/privacy and Worker tests.
- package.json: the original package manifest and npm scripts.
- .openai/hosting.json: the original Site configuration. Its project ID is an identifier, not a credential.
- dist/: the saved deployable Worker, including embedded public assets and hosting configuration.
- README.md: the original documentation.

## Required dependencies

The source declares no third-party runtime or development package dependencies. No node_modules or downloaded package cache is required. It uses Node.js built-ins and browser APIs. The HTML/link validation test additionally uses Python 3 standard-library modules. Use a supported Node runtime with built-in fetch and the original language/API features.

## Run and build

From the newclearus folder:

    npm run dev

The local development server listens on port 4173 by default. A PORT environment variable can override it.

    npm run build
    npm run validate
    node tests/pricing.test.cjs
    node tests/game.test.cjs
    python3 tests/site.test.py
    node tests/worker.test.mjs

Build runs the original scripts and may rewrite version queries in local HTML files before creating dist/server/index.js. The original files in this ZIP are the saved-version snapshot, before any local migration edits.

## Upload to GitHub

Create your target repository and upload everything inside newclearus, including the .openai directory if you intend to retain the original configuration. Alternatively initialise Git in that folder and commit it. Do not copy old Git metadata or add secrets. No secret environment file is required by the original source.

## Hosting and privacy

This is a Worker application, not just a static HTML bundle. A compatible Worker runtime must serve dist/server/index.js. Serving public/ statically can display the pages, but the same-origin /api/visitor-market endpoint will need an equivalent implementation. IP-country information comes from request.cf.country or the CF-IPCountry header when the hosting network supplies it. Manual market choice and browser language/timezone fallback remain in the browser code.

Private access to the current Site is enforced by the Sites hosting platform. That authentication service, account access policy and infrastructure are not application code in this repository and are not exported. Set up equivalent access protection on the destination host before deploying confidential or private content. Keep the current noindex/nofollow and robots restrictions until you deliberately choose to launch publicly. Crawler restrictions alone do not enforce privacy.

The source includes the original private-site URLs in metadata, links and the sitemap. Review those URLs for your target domain during migration. The enquiry form prepares an email draft or clipboard text. It does not include a database or an automatic mail-sending backend. The source provides no third-party credential values or external service account data.

This export did not modify, save a new version of, change access to, or redeploy the existing Site.

## Export verification

The original source passed its build, artifact validation, 3,844 pricing scenarios, game checks, all 18 HTML-page link/privacy checks, and Worker tests in a separate copy. Tested with Node v24.22.1 and Python 3.12.14. The 34 embedded public assets match the original public-file inventory. The original export snapshot was not modified by these test/build runs.
