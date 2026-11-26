# Code projects

Add the script once in the file that renders on every page. Replace `SCRIPT_URL` with the `script_url` from `get-installation-code` (for example `https://cdn.chatway.app/widget.js?id=INSTALLATION_ID`), or use `script_html` as is where raw HTML is allowed.

Search the project for `chatway` first. If a snippet is already there, don't add another.

## Plain HTML

- One shared layout or include (header/footer partial, server-side include): add `script_html` before `</body>` there.
- Separate HTML files with no shared layout: add it before `</body>` in every page and tell the user new pages need it too.

## React (Vite, Create React App) — also Lovable, Bolt, Base44

Add `script_html` before `</body>` in `index.html` (Vite: project root; Create React App: `public/index.html`). Don't load it from a component.

Lovable, Bolt and Base44 apps are usually Vite projects. After editing, the user needs to publish or redeploy from the builder. In Lovable or Bolt chat, the same change can be requested in the builder's own prompt if the agent has no file access.

## Next.js

App Router — `app/layout.tsx` (or `.js`):

```tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="chatway" src="SCRIPT_URL" strategy="afterInteractive" />
      </body>
    </html>
  )
}
```

Pages Router — `pages/_app.tsx`:

```tsx
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script id="chatway" src="SCRIPT_URL" strategy="afterInteractive" />
    </>
  )
}
```

Keep the existing layout contents; only add the `Script` element and its import.

## Vue (Vite)

Add `script_html` before `</body>` in `index.html`.

## Nuxt 3

`nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [{ id: 'chatway', src: 'SCRIPT_URL', async: true, tagPosition: 'bodyClose' }],
    },
  },
})
```

Merge into the existing `app.head.script` array if there is one.

## Other frameworks

| Framework | File |
|---|---|
| Angular | `src/index.html`, before `</body>` |
| SvelteKit | `src/app.html`, before `</body>` |
| Astro | The base layout used by every page (often `src/layouts/Layout.astro`), before `</body>`; add `is:inline` to the script |
| Remix / React Router | `app/root.tsx`, inside `<body>` after `<Scripts />` |
| Gatsby | `gatsby-ssr.js` with `setPostBodyComponents` |
| Replit | The project's framework file above; static Repls: `index.html` |
| Laravel | The main Blade layout (for example `resources/views/layouts/app.blade.php`), before `</body>` |
| Django | `templates/base.html`, before `</body>` |
| Ruby on Rails | `app/views/layouts/application.html.erb`, before `</body>` |
| Hugo / Jekyll / Eleventy | The base layout or footer partial |
| Shopify theme code (Liquid) | `layout/theme.liquid` — only if the merchant chooses manual install over the app |

If several layouts exist (marketing site and app, for example), ask which parts of the site should show the chat.

## Check it survives builds and deploys

- Don't edit generated output (`dist`, `build`, `.next`, `.output`) or `node_modules`; edit the source.
- Run the build and check the output contains the script once.
- If the site has a Content Security Policy, update it as described in the skill's troubleshooting section.
- Deploying is the user's call. Once it's live, call `get-installation-status` with the domain. Client-rendered apps may return `unverified_spa`; then open the site and start a test chat.
