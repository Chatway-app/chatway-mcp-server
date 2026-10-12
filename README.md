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

---

[Chatway Live Chat](https://chatway.app) is an AI-powered customer support platform that helps
businesses communicate with website visitors and customers through live chat, AI chatbots,
WhatsApp, Facebook Messenger, Instagram, and more. It offers a shared team inbox, automation,
knowledge base, and mobile apps for iOS and Android.

Chatway's MCP server connects ChatGPT, Claude, Cursor, and other AI agents directly to your
Chatway inbox. Search conversations, respond to customers, manage support tickets, assign agents,
add private notes, and update contacts using natural language.

This repository holds Chatway's public listings for the
[official MCP Registry](https://registry.modelcontextprotocol.io) and the
[Gemini CLI extension gallery](https://geminicli.com/extensions/browse/): manifests, logos, and
the publishing workflow. **It does not contain server source code or secrets**; the server
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

Step-by-step instructions for Claude, ChatGPT, Codex, Gemini, Cursor, VS Code, Grok, Devin,
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

---

## Maintaining this listing

### Repository layout

```
server.json                          MCP Registry manifest
gemini-extension.json                Gemini CLI extension manifest (must stay at the repo root)
GEMINI.md                            Context loaded by Gemini CLI for the extension
assets/                              Chatway logos used by listings
.github/workflows/validate.yml       Validates server.json and gemini-extension.json on pull requests
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

To test changes locally before merging:

```bash
gemini extensions link .
```

### Verify

```bash
curl "https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.Chatway-app/chatway"
```

Or search for "chatway" on [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io).

> The MCP Registry is in preview; data resets may occur. Being listed here does not by itself
> create a listing inside Claude, ChatGPT, or other clients.
