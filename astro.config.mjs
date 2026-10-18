import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mansoorbarri.com",
  trailingSlash: "always",
  markdown: {
    shikiConfig: { theme: "vesper", wrap: true },
  },
  vite: { plugins: [tailwindcss()] },
});
