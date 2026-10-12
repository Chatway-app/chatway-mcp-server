# Chatway

Chatway is a live chat and customer support platform. The `chatway` MCP server gives you access to
the user's Chatway inbox: conversations, messages, contacts, teammates, tags, custom data, and the
knowledge base.

## Getting connected

- If Chatway tools are missing or fail with an authentication error, call `check-connection` and
  tell the user to run `/mcp auth chatway` to sign in.
- Only Chatway workspace owners and admins can connect. Each connection only sees the widgets,
  channels, and permissions the user granted, so a missing tool usually means that permission was
  not granted.

## Working with conversations

- Use `list-conversations` or `search-conversations` to find conversations, then
  `list-conversation-messages` to read the full history before summarizing or replying.
- Use `search-knowledge-base` to ground answers in the team's own content. Do not invent policies,
  prices, or facts that are not in Chatway.
- Use `list-agents` to get an exact agent UUID before calling `assign-conversation`.

## Customer-facing and destructive actions

- `send-message` sends a real reply to the customer. When the user asks for a draft, show the draft
  and do not send it. Never send after a human handoff has been requested.
- Prefer `add-note` for internal comments; notes are only visible to teammates.
- Ask the user to confirm before `send-message`, `resolve-conversation`, `unresolve-conversation`,
  `assign-conversation`, `remove-tag`, and `remove-custom-data`.
- For bulk actions, pass all conversation IDs in a single call instead of looping.
