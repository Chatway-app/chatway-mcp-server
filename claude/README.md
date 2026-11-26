# Chatway Live Chat for Claude

The Chatway plugin for Claude. It connects Claude to [Chatway](https://chatway.app) through Chatway's official remote MCP server, `https://mcp.chatway.app/mcp`, and adds Chatway Agent Skills for customer support work.

With it, Claude can read and search your customer conversations, draft and send replies, assign and resolve conversations, add notes, tags and custom data, search your knowledge base, and hand conversations off to your team.

## What's included

- **MCP server**: `.mcp.json` points Claude at `https://mcp.chatway.app/mcp`. You sign in to Chatway with OAuth the first time Claude uses it; no API key is stored in the plugin.
- **Skills** in `skills/`:
  - `chatway-ai-reply-assistant`: drafts and sends replies using the conversation history and your knowledge base.
  - `chatway-customer-context`: sums up a customer's history and past issues before you reply.
  - `chatway-smart-routing`: finds conversations that need a human and routes them to the right agents.
  - `chatway-support-insights`: finds recurring issues, trends and knowledge gaps across conversations.
  - `chatway-support-triage`: reviews unresolved conversations and prioritizes urgent ones.
  - `chatway-install`: installs the Chatway widget on a website.

## Get started

1. Install the plugin from the Claude plugin directory.
2. Ask Claude something like "Summarize my latest Chatway support conversations."
3. Sign in to Chatway when asked, choose the inboxes Claude may use, and approve access.

Setup guides for every client: [developers.chatway.app](https://developers.chatway.app/mcp/guides.mcp_connect_clients).

## Support

- Help Center: [chatway.app/help](https://chatway.app/help)
- Security: see [SECURITY.md](https://github.com/Chatway-app/chatway-mcp-server/blob/main/SECURITY.md)

Licensed under the MIT License.
