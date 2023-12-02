# WordPress Vite Plugin

This plugin connects a Vite React app to a WordPress plugin page. This allows you to do cool things with the REST API, and utilize familiar technologies like React, Tanstack Query, Zod, etc.

### Setup

1. Add folder to WordPress Plugins Folder (/site-folder/app/public/wp-content/plugins)
2. Activate the plugin on the plugin page
3. Open the plugin page in the sidebar (Should be a pin under 'Template')
4. Move into the menu folder and run `bun install` and `bun build:watch`
5. Make changes and refresh the plugin page

### Known Issues

-   React/React DOM is bundled twice (once in here and once in WordPress)
