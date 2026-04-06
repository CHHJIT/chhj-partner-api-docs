# CHHJ Partner API Docs

Swagger UI documentation for the CHHJ Partner Lead API, hosted via GitHub Pages.

## Overview

The docs are a static Swagger UI deployment. The API spec is defined in [`chhj-partner-api.yaml`](chhj-partner-api.yaml) (OpenAPI 3.0.3). Changes to the YAML are reflected immediately after pushing to `master`.

## Making Changes

All API documentation lives in [`chhj-partner-api.yaml`](chhj-partner-api.yaml). The Swagger UI assets (`swagger-ui*.js`, `swagger-ui.css`, etc.) are vendored and should not be edited manually.

### Common tasks

**Adding or updating an endpoint** — edit the `paths` section of the YAML.

**Adding a new field to a request/response** — edit the relevant schema under `components/schemas`.

**Updating examples** — each endpoint has an `example` block nested under `content.application/json`. Update there, not just in the schema.

**Updating the top-level description** — edit `info.description` in the YAML. It supports Markdown (rendered by Swagger UI).

### Swagger UI configuration

[`swagger-initializer.js`](swagger-initializer.js) controls Swagger UI behavior:

| Option | Current value | Notes |
| --- | --- | --- |
| `url` | `chhj-partner-api.yaml` | Points to the spec file |
| `docExpansion` | `full` | All endpoints expanded by default |
| `defaultModelRendering` | `example` | Shows example values tab by default |
| `defaultModelsExpandDepth` | `10` | Schemas section fully expanded |

## Line Endings

This repo enforces LF via [`.gitattributes`](.gitattributes). If you see CRLF warnings, run:

```bash
dos2unix chhj-partner-api.yaml
```

## Deployment

Hosted on GitHub Pages from the `master` branch root. No build step — push to `master` and the changes are live.
