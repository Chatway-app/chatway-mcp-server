# Chatway MCP Server

Public listing metadata for Chatway's hosted MCP server, published to the
[official MCP Registry](https://registry.modelcontextprotocol.io).

This repository contains **no server source code and no secrets**. The MCP
server itself is hosted by Chatway; this repo only holds the registry manifest,
logos and the publishing workflow.

| | |
|---|---|
| Registry name | `io.github.Chatway-app/chatway` |
| Endpoint | `https://mcp.chatway.app/mcp` (Streamable HTTP) |
| Authentication | OAuth 2.1 (dynamic client registration), sign in with a Chatway owner/admin account |
| Website | https://chatway.app |
| Docs | https://developers.chatway.app |

## Connect

Add `https://mcp.chatway.app/mcp` as a remote (custom) MCP connector in your
client. You'll be redirected to Chatway to sign in and approve access.

## Repository layout

```
server.json                          MCP Registry manifest
assets/                              Chatway logos used by listings
.github/workflows/publish-mcp.yml    Publishes server.json to the MCP Registry
```

## Ownership and authentication

- Owned by the [Chatway-app](https://github.com/Chatway-app) GitHub organization.
- Publishing uses **GitHub OIDC** from this repository's Actions workflow. The
  registry grants the `io.github.Chatway-app/*` namespace to workflows running
  in repos owned by the `Chatway-app` org, so no personal account is the
  publisher and **no secrets are stored** in this repo.
- The namespace is case-sensitive: it must stay `io.github.Chatway-app/...`,
  matching the org name exactly.

## Publishing an update

Published versions are immutable, so every change needs a new version.

1. Edit `server.json` and bump `version` (e.g. `1.0.0` → `1.0.1`).
   Listing copy (title, description, icons) must be approved by marketing first.
2. Optionally validate locally: `mcp-publisher validate`
3. Merge to `main`, then tag the same version and push the tag:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```
4. The **Publish to MCP Registry** workflow checks the tag matches
   `server.json`, validates, logs in via OIDC and publishes.

## Verify

```bash
curl "https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.Chatway-app/chatway"
```

> The MCP Registry is in preview; data resets may occur. Being listed here does
> not by itself create a listing inside Claude, ChatGPT or other clients.
