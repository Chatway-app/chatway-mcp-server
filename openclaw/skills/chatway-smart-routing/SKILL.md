---
name: chatway-smart-routing
description: Route Chatway conversations to the right teammate using issue type, urgency, agent identity, tags, notes, and human handoff.
---

# Chatway Smart Routing

Use this skill when the user asks to assign, escalate, route, tag, or hand off a Chatway conversation.

## Workflow

1. Read the conversation and recent messages before routing it.
2. Use `list-agents` to identify the intended teammate by name or email. Never guess an agent identifier.
3. Use `list-tags` before choosing existing tags. Create or add a tag only when it meaningfully improves routing or reporting.
4. Select the action:
   - `assign-conversation` for a known responsible teammate;
   - `add-note` for internal context or a handoff summary;
   - `add-tag` for issue type, urgency, customer segment, or workflow state;
   - `handoff-to-human` when an External AI conversation needs human ownership.
5. Confirm bulk assignments when Chatway returns a confirmation request.
6. Report the resulting assignment, tags, and handoff state.

## Routing standards

- Prefer the smallest necessary change.
- Do not remove existing tags unless the user requests it or they are clearly obsolete.
- Do not overwrite custom data to simulate routing when assignment or tags are the correct mechanism.
- Add a short internal note when the receiving agent would otherwise need to reconstruct the context.
