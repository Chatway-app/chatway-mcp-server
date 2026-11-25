---
name: chatway-ai-reply-assistant
description: Draft and send accurate Chatway customer replies using conversation history, customer context, and the knowledge base.
---

# Chatway AI Reply Assistant

Use this skill when the user asks to answer a Chatway customer, prepare a reply, respond to a support conversation, or work through an inbox queue.

## Workflow

1. Identify the conversation with `list-conversations` or `search-conversations`.
2. Read the full relevant context with `get-conversation` and `list-conversation-messages`.
3. Use `get-visitor` when profile details, language, location, or prior context may affect the answer.
4. Search `search-knowledge-base` for product facts, instructions, policies, and troubleshooting steps. Do not invent details when the knowledge base does not support them.
5. Draft a concise, empathetic reply that directly addresses the customer's question.
6. Show the exact reply before calling `send-message` unless the user explicitly authorized sending that exact reply or an unattended reply workflow.
7. After sending, report what was sent and to which conversation. Do not resolve the conversation unless the issue is clearly complete or the user requested it.

## Reply standards

- Match the customer's language and level of formality when practical.
- Acknowledge the problem before giving steps.
- Keep steps ordered and easy to scan.
- Never claim an action was completed unless a tool result confirms it.
- Ask a focused follow-up question when information is missing.
- Escalate with `handoff-to-human` when the request needs human judgment, account access, or an unsupported action.

## Safety

`send-message` reaches an external customer and cannot be unsent. Do not send placeholders, internal reasoning, uncertain claims, credentials, or private notes. After a timeout, check the conversation before retrying so the customer does not receive a duplicate reply.
