# @ai-native-solutions/hello-device-api

HTTP proxy for **Hello Device** — the ~45-Web-API capability catalogue exposed as REST endpoints. Zero framework. Node built-ins only. One file, one process.

## What it exposes

| Method | Path | What |
|---|---|---|
| GET | `/` | Endpoint index |
| GET | `/health` | Liveness check |
| GET | `/capabilities` | Full capability catalogue (metadata only) |
| GET | `/groups` | The seven categories |
| GET | `/check/:name` | Server-side availability check for one capability |
| GET | `/test/:name` | Live server-side test — only `wasm`, `crypto`, `fetch`; browser-only capabilities respond with a note |
| GET | `/report` | Grouped catalogue + summary |

`:name` accepts either the capability id (`webgpu`) or the human name (`WebGPU`) — case-insensitive.

## Server-side vs browser-only

The Hello Device catalogue covers ~45 modern Web APIs. Most (camera, mic, geolocation, WebGPU, WebXR, Bluetooth, USB, NFC, etc.) only exist in a real browser tab. This API is a **catalogue proxy** — it always returns the metadata, but for browser-only capabilities the `available` field is `null` with a `note` telling the caller to run the check client-side via [`@ai-native-solutions/hello-device-sdk`](https://github.com/sjgant80-hub/hello-device-sdk).

Server-testable capabilities: `wasm`, `crypto`, `fetch`.

## Run local

```bash
git clone https://github.com/sjgant80-hub/hello-device-api
cd hello-device-api
node src/server.js         # listens on :8787
```

Then:

```bash
curl http://localhost:8787/capabilities
curl http://localhost:8787/check/webgpu
curl http://localhost:8787/test/crypto
curl http://localhost:8787/report
```

## Run via Docker

```bash
docker build -t hello-device-api .
docker run -p 8787:8787 hello-device-api
```

Or with compose:

```bash
docker compose up -d
```

## Response shape

`GET /check/webgpu`

```json
{
  "id": "webgpu",
  "name": "WebGPU",
  "group": "compute",
  "api": "navigator.gpu",
  "description": "Direct access to the graphics card for rendering and machine learning.",
  "browserOnly": true,
  "available": null,
  "note": "browser-only · cannot detect server-side"
}
```

`GET /check/wasm`

```json
{
  "id": "wasm",
  "name": "WebAssembly",
  "group": "compute",
  "api": "WebAssembly",
  "description": "Runs near-native-speed code in the browser.",
  "browserOnly": false,
  "available": true
}
```

## Companion packages

- [`@ai-native-solutions/hello-device-sdk`](https://github.com/sjgant80-hub/hello-device-sdk) — importable JS SDK for real client-side detection
- [`@ai-native-solutions/hello-device-mcp`](https://github.com/sjgant80-hub/hello-device-mcp) — MCP server for Claude Code / Claude Desktop
- [`hello-device`](https://github.com/sjgant80-hub/hello-device) — flagship single-file browser app

## License

MIT · AI-Native Solutions · [ai-nativesolutions.com](https://ai-nativesolutions.com)
