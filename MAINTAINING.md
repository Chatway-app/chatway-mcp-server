# Maintaining this listing

This guide is for Chatway team members who maintain the listings in this repository. For setup
instructions, see the [README](README.md).

## Repository layout

```
server.json                          MCP Registry manifest
gemini-extension.json                Gemini CLI extension manifest (must stay at the repo root)
GEMINI.md                            Context loaded by Gemini CLI for the extension
.cursor-plugin/plugin.json           Cursor plugin manifest (includes the MCP server)
rules/chatway.mdc                    Cursor rule loaded by the plugin
llms-install.md                      Setup guide for AI agents such as Cline
assets/                              Chatway logos used by listings
.github/workflows/validate.yml       Validates server.json, gemini-extension.json and the Cursor plugin on pull requests
.github/workflows/publish-mcp.yml    Publishes server.json to the MCP Registry on version tags
```

## Ownership and authentication

- Owned by the [Chatway-app](https://github.com/Chatway-app) GitHub organization.
- Publishing uses **GitHub OIDC** from this repository's Actions workflow. The registry grants
  the `io.github.Chatway-app/*` namespace to workflows in repos owned by the `Chatway-app` org,
  so no personal account is the publisher and **no secrets are stored** in this repo.
- The namespace is case-sensitive: it must stay `io.github.Chatway-app/...`, matching the org
  name exactly.

## Publishing an update

Published versions are immutable, so every change needs a new version.

1. Edit `server.json` and bump `version` (e.g. `1.0.0` → `1.0.1`). Listing copy (title,
   description, icons) must be approved by marketing first.
2. Open a pull request; the **Validate manifests** check must pass.
3. Merge to `main`, then tag the same version and push the tag:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```
4. The **Publish to MCP Registry** workflow checks the tag matches `server.json`, validates,
   logs in via OIDC, publishes, and fails if the new version isn't returned by the registry.

Never delete or move a published tag: the registry's icon URLs point to files at that tag.

To update the pinned `mcp-publisher` version, change `MCP_PUBLISHER_VERSION` in both workflows.

## Gemini CLI extension updates

Gemini CLI installs from the repository's default branch (`main`) and prompts users to update when
`main` gets new commits, so merging to `main` releases the extension. Bump `version` in
`gemini-extension.json` for user-visible changes. The gallery at
[geminicli.com/extensions](https://geminicli.com/extensions/browse/) indexes repos with the
`gemini-cli-extension` topic daily.

> **Do not create GitHub Releases in this repository.** Gemini CLI installs the latest GitHub
> Release instead of `main` when one exists, so a release would pin users to an old snapshot.
> Version tags (`v*`) for the MCP Registry are fine; they are tags, not releases.

To test changes locally before merging:

```bash
gemini extensions link .
```

## Cursor plugin updates

The Cursor Marketplace is curated: the plugin is submitted once at
[cursor.com/marketplace/publish](https://cursor.com/marketplace/publish) and reviewed by Cursor.
Bump `version` in `.cursor-plugin/plugin.json` for user-visible changes and keep every path in
the manifest relative. Cursor manages how listed plugins pick up new versions; check its plugin
docs or the publisher dashboard after merging changes to `main`.

To test locally, copy this folder (not a symlink) to `~/.cursor/plugins/local/chatway`, then run
**Developer: Reload Window** in Cursor.

## Verify

```bash
curl "https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.Chatway-app/chatway"
```

Or search for "chatway" on [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io).

> The MCP Registry is in preview; data resets may occur. Being listed there does not by itself
> create a listing inside Claude, ChatGPT, or other clients.
