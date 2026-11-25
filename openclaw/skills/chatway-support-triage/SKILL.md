---
name: chatway-support-triage
description: Review and prioritize unresolved Chatway conversations, identify urgency, and recommend or perform the next support action.
---

# Chatway Support Triage

Use this skill when the user asks to review the support queue, find conversations needing attention, prioritize unresolved chats, or reduce a backlog.

## Workflow

1. Call `list-conversations` with unresolved status and a reasonable page size.
2. Prioritize conversations with unread or recent customer messages, visible urgency, blocked workflows, repeated contact, or account-impacting problems.
3. Read messages for the most relevant conversations before judging priority.
4. For each selected conversation, provide:
   - customer and conversation identifier;
   - short issue summary;
   - urgency and reason;
   - last customer request;
   - recommended next action;
   - whether a reply, assignment, note, tag, or human handoff is needed.
5. Perform write actions only when authorized. Use `add-note` for internal context that should not be shown to the visitor.

## Priority guidance

- **Urgent:** safety, security, payment access, service outage, legal threat, or a customer explicitly blocked from core functionality.
- **High:** repeated unanswered contact, account-impacting failure, cancellation risk, or an active escalation.
- **Normal:** ordinary product questions, configuration help, and non-blocking bugs.
- **Low:** feedback, feature requests, or conversations awaiting information from the customer.

Do not infer urgency from emotion alone. Explain the evidence behind each priority.
