---
name: chatway-customer-context
description: Build a concise Chatway customer brief from visitor details, conversation history, tags, custom fields, and recent interactions.
---

# Chatway Customer Context

Use this skill when the user asks for customer history, repeat issues, account context, a handoff brief, or background before replying.

## Workflow

1. Locate the contact with `search-contacts`, or start from a conversation and obtain its visitor identifier.
2. Read the visitor profile with `get-visitor`.
3. Use `search-conversations` to locate related conversations and open the relevant matches.
4. Read enough messages to establish what happened, what was promised, and what remains unresolved.
5. Inspect available tags and custom fields when they materially affect the case.
6. Produce a concise brief containing:
   - identity and contact details relevant to the request;
   - current issue and status;
   - previous related issues;
   - actions already taken;
   - commitments or deadlines mentioned;
   - assigned agents or prior handoffs;
   - recommended next step.

## Privacy

Include only information needed for the support task. Do not expose IP addresses, private notes, or unrelated personal data unless the user specifically needs it and is authorized to access it.
