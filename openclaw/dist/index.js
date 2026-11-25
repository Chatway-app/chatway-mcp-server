import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

export default definePluginEntry({
  id: "chatway",
  name: "Chatway Customer Support",
  description:
    "AI customer support for Chatway with OAuth-connected inbox tools and built-in support workflows.",
  register() {
    // Tools are supplied by Chatway's official remote MCP server declared in
    // openclaw.plugin.json. Keeping the runtime entry minimal avoids handling
    // Chatway credentials inside plugin code.
  },
});
