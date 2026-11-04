# Hosted platforms

How to install Chatway on hosted website builders and ecommerce platforms. On these platforms the agent usually can't edit the site itself, so most steps are done by the user. Give exact steps, say which ones need the user (signing in, approving an app, publishing), and report only what the user has confirmed.

Platform menus change. If the user's screen doesn't match these steps, follow the linked Chatway guide or the platform's current help page, and say so.

## Compatibility

| Platform | Method | Prerequisites | Agent does | User does | Publish needed | Verify | Known restrictions |
|---|---|---|---|---|---|---|---|
| Shopify | [Chatway Shopify app](https://apps.shopify.com/chatway) | Store owner or staff with app permissions | Gives steps, verifies storefront | Installs app, approves, enables it in the theme if asked | Enable in live theme | `get-installation-status`, storefront check | No checkout injection; don't edit theme files directly |
| Wix | [Chatway Wix app](https://www.wix.com/app-market/chatway-live-chat) | Site owner or admin | Gives steps, verifies | Adds app, signs in | Yes | Published URL, not the editor | Custom code needs a Premium plan and connected domain |
| WordPress (self-hosted) | [Chatway plugin](https://wordpress.org/plugins/chatway-live-chat) | Admin who can install plugins | Gives steps; edits a child theme only if the user owns the code and asks | Installs plugin, connects account | No (live on activation) | `get-installation-status` | Don't edit core or parent theme files |
| WordPress.com | Chatway plugin | Plan that allows plugins | Gives steps | Installs plugin | No | `get-installation-status` | Plugins and custom scripts need a Business plan or higher |
| WooCommerce | Chatway WordPress plugin | As self-hosted WordPress | As WordPress | As WordPress | No | Shop, product and cart pages | Same as WordPress |
| BigCommerce | [Chatway BigCommerce app](https://www.bigcommerce.com/apps/chatway-live-chat/) | Store owner | Gives steps, verifies | Installs app | No | Storefront | Don't add scripts to checkout |
| Duda | [Chatway Duda app](https://apps.duda.co/apps/chatway:-live-chat) | Site editor with app access | Gives steps | Adds app | Yes | Published URL | Depends on the Duda account's app permissions |
| Webflow | Site-wide custom code | Paid site plan | Gives steps, verifies | Pastes code, publishes | Yes | Published domain | Custom code needs a paid site plan; `.webflow.io` staging shows it only after publishing |
| Squarespace | Code Injection (footer) | Plan with code injection | Gives steps, verifies | Pastes code | Saves live | Live domain | Code Injection isn't available on every plan |
| Framer | Site custom code (end of `<body>`) | Site editor | Gives steps, verifies | Pastes code, publishes | Yes | Published domain | Custom code may need a paid plan |
| Ecwid, Thinkific, Square Online, Big Cartel, Nuvemshop, Tiendanube, Shoptet | Chatway app for the platform | Store owner | Gives steps | Installs app | Platform dependent | Storefront | See the Chatway guide |
| Joomla, Drupal, Magento, PrestaShop, OpenCart, Weebly, Tilda, Sitecore, TYPO3, Volusion, Shift4Shop, Bubble, Base44 | Site-wide custom code | Admin access | Gives steps; edits files only in a code project it can access | Pastes code, publishes | Usually | Live domain | See the Chatway guide |
| Lovable, Bolt, Replit | Edit the project's code | Project access | Edits `index.html` or the root layout | Approves, publishes or redeploys | Yes | Published URL | See [frameworks.md](frameworks.md) |

Chatway's step-by-step guides for every platform are at [chatway.app/help](https://chatway.app/help).

## Shopify

Prefer the official app. It installs Chatway store-wide and survives theme changes.

1. Open [apps.shopify.com/chatway](https://apps.shopify.com/chatway) and click **Install**. Sign in to the store if asked.
2. Approve the permissions Shopify shows.
3. Follow the app's setup in Shopify admin. If it asks you to enable Chatway in the theme, open **Online Store → Themes → Customize → App embeds**, turn Chatway on, and click **Save**.
4. Open the storefront (not the theme editor preview) and check the chat bubble on the home, product and cart pages, on desktop and mobile.

Rules:
- Don't edit `theme.liquid` or other theme files when the app is available. If the merchant still wants a manual install, add the script once before `</body>` in `layout/theme.liquid` of the theme they choose, with their approval, and warn that switching themes removes it.
- Never inject scripts into checkout. Shopify controls checkout customization.
- Test after switching or updating the theme: app embeds may need enabling again in the new theme.

Guide: [Install Chatway on Shopify](https://chatway.app/help/getting-started/how-to-install-chatway-on-shopify/)

## Wix

Prefer the official app.

1. Open [the Chatway app in the Wix App Market](https://www.wix.com/app-market/chatway-live-chat) and click **Add to Site**. Choose the site.
2. Sign in to Chatway or create an account when the app asks.
3. **Publish** the site.
4. Check the published URL. The Wix editor and preview don't prove the live site works.

If the user can't use the app, Wix **Settings → Custom Code** can add the script to **All pages**, in **Body - end**, loaded **once**. Custom code needs a Premium plan and a connected domain.

Guide: [Install Chatway on Wix](https://chatway.app/help/getting-started/how-to-install-chatway-on-wix/)

## WordPress and WooCommerce

Self-hosted WordPress: prefer the official plugin.

1. In WordPress admin, open **Plugins → Add New**, search for **Chatway**, and install **Chatway Live Chat** (by Chatway, [wordpress.org/plugins/chatway-live-chat](https://wordpress.org/plugins/chatway-live-chat)). Check the author before installing.
2. Click **Activate**, open the Chatway menu, and connect the Chatway account.
3. Check the live site. With WooCommerce, check the shop, a product page and the cart.

Rules:
- Don't ask for the WordPress admin password. The user signs in themselves.
- Don't install other chat or "header/footer script" plugins unless the user chooses to, and only from trusted authors.
- Don't edit WordPress core or a parent theme. If the user owns the theme code (a custom or child theme in the project) and asks for a manual install, enqueue the script in the child theme's `functions.php`:

  ```php
  add_action('wp_footer', function () {
      echo '<script id="chatway" async="true" src="https://cdn.chatway.app/widget.js?id=INSTALLATION_ID"></script>';
  });
  ```

- Clear caching plugins and the CDN cache after installing.

WordPress.com: installing plugins needs a Business plan or higher. On plans without plugins, custom scripts aren't allowed; tell the user an upgrade is required instead of trying a workaround.

Guide: [Install Chatway on WordPress](https://chatway.app/help/getting-started/how-to-install-chatway-on-wordpress/)

## BigCommerce

1. Open [the Chatway app](https://www.bigcommerce.com/apps/chatway-live-chat/) and click **Get this app**, or find it in the store's **Apps → Marketplace**.
2. Install, approve, and connect the Chatway account.
3. Check the storefront on desktop and mobile.

Don't add scripts to checkout. If the app can't be used, the store's **Storefront → Script Manager** can add the script to all storefront pages, in the footer.

Guide: [Install Chatway on BigCommerce](https://chatway.app/help/how-to-install-chatway/how-to-install-chatway-on-bigcommerce)

## Duda

1. In the Duda editor, open **App Store**, find **Chatway: Live Chat** ([listing](https://apps.duda.co/apps/chatway:-live-chat)), and add it.
2. Connect the Chatway account in the app.
3. **Republish** the site and check the published URL.

Guide: [Install Chatway on Duda](https://chatway.app/help/getting-started/how-to-install-chatway-on-duda/)

## Webflow

There's no Chatway app for Webflow; use site-wide custom code.

1. Open the project's **Site settings → Custom code**.
2. Paste the script in **Footer code** (before `</body>` tag). Click **Save**.
3. **Publish** to the domains the user wants.
4. Check the published domain.

Custom code needs a paid site plan. Don't put the script in a page's code or an Embed element as well as site settings; that loads it twice.

Guide: [Install Chatway on Webflow](https://chatway.app/help/how-to-install-chatway/how-to-install-chatway-on-webflow)

## Squarespace

There's no Chatway app for Squarespace; use code injection.

1. Open **Settings → Advanced → Code Injection** (newer dashboards: **Website → Pages → Website Tools → Code Injection**).
2. Paste the script in **Footer** and click **Save**.
3. Check the live site while signed out.

Code Injection isn't available on every plan; if it's missing or locked, the plan needs upgrading.

Guide: [Install Chatway on Squarespace](https://chatway.app/help/how-to-install-chatway/how-to-install-chatway-on-squarespace)

## Framer

1. Open **Site Settings → General → Custom Code**.
2. Paste the script in **End of `<body>` tag**. Save.
3. **Publish** and check the published domain.

Custom code may need a paid plan.

Guide: [Install Chatway on Framer](https://chatway.app/help/how-to-install-chatway/how-to-install-chatway-on-framer)

## Other platforms

For any other builder or CMS, find its site-wide setting for custom code in the body or footer (or header if that's the only option; `async` keeps it from blocking the page). Paste the script once, publish, and verify the live site. If the platform has no custom-code option on the user's plan, say so; don't suggest workarounds like third-party injectors.
