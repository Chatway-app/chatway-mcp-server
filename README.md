<p align="center">
  <img src="assets/chatway-logo.png" alt="Chatway" width="96" height="96">
</p>

<h1 align="center">Chatway Live Chat MCP Server</h1>

<p align="center">
  Connect AI agents to <a href="https://chatway.app">Chatway</a> to manage customer conversations, support tickets, and contacts.
</p>

<p align="center">
  <a href="https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.Chatway-app/chatway">MCP Registry</a> ·
  <a href="https://developers.chatway.app/mcp/guides.mcp_overview">Documentation</a> ·
  <a href="https://developers.chatway.app/mcp/guides.mcp_connect_clients">Setup guides</a> ·
  <a href="https://chatway.app">chatway.app</a>
</p>

[![MCP Badge](https://lobehub.com/badge/mcp/chatway-app-chatway-mcp-server)](https://lobehub.com/mcp/chatway-app-chatway-mcp-server)

---

[Chatway Live Chat](https://chatway.app) is an AI-powered customer support platform that helps
businesses communicate with website visitors and customers through live chat, AI chatbots,
WhatsApp, Facebook Messenger, Instagram, and more. It offers a shared team inbox, automation,
knowledge base, and mobile apps for iOS and Android.

Chatway's MCP server connects ChatGPT, Claude, Cursor, and other AI agents directly to your
Chatway inbox. Search conversations, respond to customers, manage support tickets, assign agents,
add private notes, and update contacts using natural language.

This repository holds Chatway's public listings for the
[official MCP Registry](https://registry.modelcontextprotocol.io), the
[Gemini CLI extension gallery](https://geminicli.com/extensions/browse/), the
[Cursor Marketplace](https://cursor.com/marketplace), and the
[Cline MCP Marketplace](https://github.com/cline/mcp-marketplace): manifests, logos, setup
guides, and the publishing workflow. **It does not contain server source code or secrets**; the server
itself is hosted by Chatway.

| | |
|---|---|
| Endpoint | `https://mcp.chatway.app/mcp` |
| Transport | Streamable HTTP |
| Authentication | OAuth 2.1 with dynamic client registration |
| Who can connect | Chatway workspace owners and admins |
| Plans | All plans, including Free (tags and custom data tools require a paid plan) |
| Registry name | `io.github.Chatway-app/chatway` |

## Quick start

1. Add `https://mcp.chatway.app/mcp` as a custom (remote) MCP connector in your client.
2. Sign in to Chatway when prompted and choose the widgets, channels, and permissions to share.
3. Ask your assistant to do something in Chatway.

Step-by-step instructions for Claude, ChatGPT, Codex, Gemini, Cursor, GitHub Copilot (VS Code), Grok, Devin,
Cline, Goose, OpenCode, and any other MCP client:
[Connect clients](https://developers.chatway.app/mcp/guides.mcp_connect_clients)

## Gemini CLI extension

Install the Chatway extension in [Gemini CLI](https://github.com/google-gemini/gemini-cli):

```bash
gemini extensions install https://github.com/Chatway-app/chatway-mcp-server
```

Then start `gemini` and sign in to Chatway:

```
/mcp auth chatway
```

A browser window opens to sign in to Chatway and approve access. Once connected, `/mcp list`
shows the `chatway` server and its tools.

| Task | Command |
|---|---|
| Update | `gemini extensions update chatway` |
| Uninstall | `gemini extensions uninstall chatway` |
| Re-authenticate | `/mcp auth chatway` |

**Troubleshooting**

- **Tools missing or `401` errors:** run `/mcp auth chatway` again. Tokens are revoked when the
  connection is disconnected in Chatway.
- **Can't approve access:** only Chatway workspace owners and admins can connect an assistant.
- **A tool isn't available:** that permission wasn't granted. Change permissions under
  **AI → External AI** in Chatway, or reconnect.
- **Browser sign-in doesn't complete:** Gemini CLI receives the OAuth callback on `localhost`, so
  sign in on the same machine where Gemini CLI is running.

## Cursor plugin

Install the **Chatway** plugin from the [Cursor Marketplace](https://cursor.com/marketplace).
The plugin adds the Chatway MCP server and a Chatway rule that guides the agent to confirm before
sending replies or making destructive changes.

1. Install the plugin, then open **Cursor Settings → MCP** (or **Tools & MCP**).
2. Next to the `chatway` server, click **Connect** (or **Needs login**). A browser window opens to
   sign in to Chatway and approve access.
3. Once connected, the Chatway tools are listed under the server and available to the agent.

Ask the agent, for example: "Show my latest unresolved Chatway conversations."

**Troubleshooting**

- **Tools missing or authentication errors:** reconnect the `chatway` server from Cursor's MCP
  settings. Tokens are revoked when the connection is disconnected in Chatway.
- **Can't approve access:** only Chatway workspace owners and admins can connect an assistant.
- **Two `chatway` servers:** if you previously added Chatway manually in `~/.cursor/mcp.json`,
  remove that entry so only the plugin's server is used.
- **A tool isn't available:** that permission wasn't granted. Change permissions under
  **AI → External AI** in Chatway, or reconnect.

## Cline

Ask Cline: "Set up the Chatway MCP server from https://github.com/Chatway-app/chatway-mcp-server".
Cline follows [llms-install.md](llms-install.md) to add the server.

To add it yourself in the Cline extension, open **MCP Servers → Remote Servers**, enter `chatway`
as the name, paste `https://mcp.chatway.app/mcp`, choose **Streamable HTTP**, click **Add Server**,
and sign in to Chatway when prompted. Or add this to Cline's MCP settings JSON:

```json
{
  "mcpServers": {
    "chatway": {
      "type": "streamableHttp",
      "url": "https://mcp.chatway.app/mcp",
      "disabled": false
    }
  }
}
```

`"type": "streamableHttp"` is required. Without it, Cline uses the legacy SSE transport and the
connection fails with HTTP `400`. There is no API key; you sign in with your Chatway account.

## GitHub Copilot (VS Code)

Chatway works with GitHub Copilot Chat in VS Code in **Agent** mode.

1. Open the Command Palette (`Cmd/Ctrl + Shift + P`) and run **MCP: Add Server**.
2. Choose **HTTP**, then **Workspace** or **Global**.
3. Paste `https://mcp.chatway.app/mcp` and name the server `chatway`.
4. Trust the server when VS Code asks, then sign in to Chatway in the browser window that opens.
5. In Copilot Chat, switch to **Agent** mode. The Chatway tools appear in the tools picker.

Or add it to `mcp.json` yourself (`.vscode/mcp.json` for a workspace, or **MCP: Open User
Configuration** for all workspaces):

```json
{
  "servers": {
    "chatway": {
      "type": "http",
      "url": "https://mcp.chatway.app/mcp"
    }
  }
}
```

The root key is `servers` (not `mcpServers`), and `"type": "http"` is required. Run
**MCP: List Servers** to confirm Chatway is running.

To disconnect, remove the server in VS Code and revoke it in Chatway under **AI → External AI**.

> **One-click install from the GitHub MCP Registry** (searching `@mcp Chatway` in VS Code
> Extensions) will be available once Chatway is accepted into the curated
> [GitHub MCP Registry](https://github.com/mcp). Until then, use the steps above.

## Example prompts

- "Show my latest unresolved Chatway conversations."
- "Summarize the conversation with jane@example.com and draft a reply."
- "Search our knowledge base for the refund policy and answer this customer."
- "Assign today's billing questions to Alex and add a private note."
- "Tag this visitor as `vip` and resolve the conversation."

See the [tool reference](https://developers.chatway.app/mcp/guides.mcp_tool_reference) for
every available tool and what it does.

## Security and access

- **Scoped access.** Each connection only sees the widgets and channels selected during
  authorization, and only uses the permissions granted. Tools without a granted permission are
  not offered to the assistant.
- **Role-checked.** Only workspace owners and admins can connect an assistant, and every
  action is still limited by the authorizing user's Chatway role.
- **Confirmations.** Destructive and bulk actions (resolving, removing tags or custom data,
  assigning in bulk) require confirmation in the client.
- **Revocable at any time.** Owners and admins can change permissions or disconnect from
  **AI → External AI** in Chatway; disconnecting revokes the token immediately.

Details: [Permissions & access](https://developers.chatway.app/mcp/guides.mcp_permissions_and_access) ·
[Manage connections](https://developers.chatway.app/mcp/guides.mcp_manage_connections) ·
[Security policy](SECURITY.md)

## Support

Visit the [Chatway Help Center](https://chatway.app/help) or contact the support team through
live chat on [chatway.app](https://chatway.app).

## License

The manifests, configuration, and documentation in this repository are available under the
[MIT License](LICENSE). The Chatway name and logos are trademarks of Chatway and are not covered by
this license. The hosted Chatway service and MCP server are proprietary.

---

## Maintaining this listing

### Repository layout

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

### Ownership and authentication

- Owned by the [Chatway-app](https://github.com/Chatway-app) GitHub organization.
- Publishing uses **GitHub OIDC** from this repository's Actions workflow. The registry grants
  the `io.github.Chatway-app/*` namespace to workflows in repos owned by the `Chatway-app` org,
  so no personal account is the publisher and **no secrets are stored** in this repo.
- The namespace is case-sensitive: it must stay `io.github.Chatway-app/...`, matching the org
  name exactly.

### Publishing an update

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

To update the pinned `mcp-publisher` version, change `MCP_PUBLISHER_VERSION` in both workflows.

### Gemini CLI extension updates

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

### Cursor plugin updates

The Cursor Marketplace is curated: the plugin is submitted once at
[cursor.com/marketplace/publish](https://cursor.com/marketplace/publish) and reviewed by Cursor.
Bump `version` in `.cursor-plugin/plugin.json` for user-visible changes and keep every path in
the manifest relative. Cursor manages how listed plugins pick up new versions; check its plugin
docs or the publisher dashboard after merging changes to `main`.

To test locally, copy this folder (not a symlink) to `~/.cursor/plugins/local/chatway`, then run
**Developer: Reload Window** in Cursor.

### Verify

```bash
curl "https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.Chatway-app/chatway"
```

Or search for "chatway" on [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io).

> The MCP Registry is in preview; data resets may occur. Being listed here does not by itself
> create a listing inside Claude, ChatGPT, or other clients.
