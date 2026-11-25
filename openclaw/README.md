# Chatway Customer Support for OpenClaw

Turn OpenClaw into an AI customer-support assistant for Chatway. Review the live chat inbox, answer customers with knowledge-base context, triage unresolved conversations, manage contacts, route work to agents, and uncover recurring support issues.

## Why install it?

- Answer customer questions from Chatway conversations.
- Search your FAQ and Help Center before replying.
- Triage unresolved and unanswered live chat conversations.
- Review visitor profiles, tags, and custom data for context.
- Add internal notes, assign agents, and request human handoff.
- Resolve completed conversations and reopen them when needed.
- Analyze recurring support problems and knowledge-base gaps.

## Included Chatway tools

Chatway publishes the tools allowed by the permissions selected during OAuth. The current complete support toolset includes:

### Conversations and replies

- `list-conversations`
- `get-conversation`
- `list-conversation-messages`
- `search-conversations`
- `send-message`
- `resolve-conversation`
- `unresolve-conversation`
- `assign-conversation`
- `add-note`
- `handoff-to-human`

### Contacts and organization

- `get-visitor`
- `search-contacts`
- `list-tags`
- `add-tag`
- `remove-tag`
- `list-custom-fields`
- `add-custom-data`
- `update-custom-data`
- `remove-custom-data`
- `list-agents`

### Knowledge and installation

- `search-knowledge-base`
- `get-installation-code`
- `get-installation-status`

## Built-in skills

- **Chatway AI Reply Assistant** — prepare accurate, context-aware customer replies and send only when authorized.
- **Chatway Support Triage** — prioritize unresolved conversations and recommend next actions.
- **Chatway Customer Context** — gather visitor details, conversation history, tags, and custom data before answering.
- **Chatway Smart Routing** — assign the right agent, add notes and tags, or request human handoff.
- **Chatway Support Insights** — identify recurring issues, customer sentiment, and knowledge gaps.

## Connect your Chatway account

1. Install and enable **Chatway Customer Support** in OpenClaw.
2. Open the plugin detail page and find **Accounts**.
3. Select **Sign in** for the Chatway MCP server.
4. Sign in as a Chatway owner or admin.
5. Choose the widgets and channels the assistant may access.
6. Start with read permissions, then enable only the write permissions you need.
7. Choose the Chatway agent that replies and actions should be attributed to.

No API key, client ID, or client secret is required. Authentication uses Chatway OAuth with PKCE and dynamic client registration through `https://mcp.chatway.app/mcp`.

## Safety and permissions

- Chatway only publishes tools covered by the permissions granted to the connection.
- `send-message` reaches a customer and cannot be unsent; review the exact reply before sending unless you intentionally authorize an unattended workflow.
- Bulk resolve, reopen, and assignment operations can require Chatway confirmation.
- Do not automatically retry a write after a timeout; check whether it succeeded first to avoid duplicate replies, notes, or actions.
- Human handoff stops further External AI replies while the handoff remains active.

## Compatibility

- OpenClaw `2026.8.1` or later
- A Chatway owner or admin account for the initial OAuth connection

## Links

- [Chatway](https://chatway.app)
- [Chatway developer documentation](https://developers.chatway.app)
- [Chatway MCP connection guide](https://developers.chatway.app/mcp/guides.mcp_connect_clients)
- [Chatway MCP tool reference](https://developers.chatway.app/mcp/guides.mcp_tool_reference)
