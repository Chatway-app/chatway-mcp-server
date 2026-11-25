---
name: chatway-support-insights
description: Analyze Chatway conversations for recurring issues, customer sentiment, operational trends, and knowledge-base gaps.
---

# Chatway Support Insights

Use this skill when the user asks for support trends, recurring problems, conversation analysis, FAQ recommendations, quality review, or knowledge gaps.

## Workflow

1. Define the requested scope: time period, inbox, status, topic, or sample size. If none is given, state the sample you use.
2. Use `list-conversations` and `search-conversations` to select a relevant, bounded set.
3. Read the messages needed to classify each conversation. Do not rely only on previews.
4. Group evidence into themes such as product confusion, bugs, installation problems, billing questions, missing documentation, or routing failures.
5. Report:
   - sample size and selection method;
   - most common issue themes;
   - representative examples without unnecessary personal information;
   - sentiment or urgency patterns;
   - repeated resolution steps;
   - knowledge-base gaps;
   - recommended product, documentation, or support-process improvements.

## Analysis standards

- Distinguish observed conversation evidence from inference.
- Do not generalize beyond the sampled conversations.
- Avoid exposing customer names, emails, phone numbers, or message excerpts unless necessary.
- Search the knowledge base before declaring that documentation is missing.
