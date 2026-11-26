# Chatway Customer Support for Claude

Turn Claude into your AI customer support assistant with [Chatway](https://chatway.app), an omnichannel customer support platform that brings website live chat, WhatsApp Business, Facebook Messenger, Instagram DMs, and email together in one shared inbox.

Connect Claude to Chatway using the official remote MCP server and six ready-to-use Agent Skills. Find customer conversations, use your knowledge base to draft accurate answers, send replies directly, and hand off conversations to human agents when needed.

## What you can do

- **Omnichannel customer support:** Search, review, and reply to customer messages across connected channels from Claude.
- **AI customer service:** Draft informed replies using conversation history and your Chatway knowledge base. Chatway also offers a built-in AI chatbot and supports connecting your own AI agent through MCP.
- **Shared inbox and helpdesk workflows:** Triage unresolved conversations, assign requests, add internal notes, tags and custom data, and resolve conversations.
- **Human handoff:** Route requests that need personal attention to your support team.
- **Customer insights:** Review customer history, identify recurring issues, and discover knowledge base gaps.
- **Website and ecommerce support:** Use Chatway with Shopify, WordPress (including WooCommerce), Wix, or any website platform. Install the live chat widget and manage customer support on the go with Chatway's mobile apps.

Chatway also offers ticketing and support automations to help your team organize requests and streamline customer service.

Feature availability depends on your Chatway plan and the permissions granted to Claude.

## What's included

- **MCP server**: `.mcp.json` points Claude at `https://mcp.chatway.app/mcp`. You sign in to Chatway with OAuth the first time Claude uses it; no API key is stored in the plugin.
- **Skills** in `skills/`:
  - `chatway-ai-reply-assistant`: drafts and sends replies using conversation history and your knowledge base.
  - `chatway-customer-context`: summarizes a customer's history and past issues before you reply.
  - `chatway-smart-routing`: finds conversations that need a human and routes them to the right agents.
  - `chatway-support-insights`: finds recurring issues, trends and knowledge gaps across conversations.
  - `chatway-support-triage`: reviews unresolved conversations and prioritizes urgent ones.
  - `chatway-install`: helps install the Chatway live chat widget on a website.

## Example prompts

- "Find unanswered customer conversations from today and draft helpful replies using our knowledge base."
- "Send the approved replies to customers in my Chatway inbox."
- "Summarize this customer's previous conversations and identify any unresolved issues."
- "Find conversations that need human support and recommend which team members should handle them."
- "Analyze this week's support conversations and identify recurring questions we should add to our knowledge base."

## Get started

1. Install the plugin from the Claude plugin directory.
2. Ask Claude something like "Summarize my latest Chatway support conversations."
3. Sign in to Chatway when asked, choose the inboxes Claude may use, and approve access.

Setup guides for every client: [developers.chatway.app](https://developers.chatway.app/mcp/guides.mcp_connect_clients).

## Support and privacy

- Website: [chatway.app](https://chatway.app)
- Help Center: [chatway.app/help](https://chatway.app/help)
- Support: [contact@chatway.app](mailto:contact@chatway.app)
- Privacy: [Privacy Policy](https://chatway.app/privacy-policy)
- [Terms of Service](https://chatway.app/terms-of-service)
- Security: see [SECURITY.md](https://github.com/Chatway-app/chatway-mcp-server/blob/main/SECURITY.md)

Licensed under the MIT License.
