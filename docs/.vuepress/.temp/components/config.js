import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "E:/github-fork/notes/node_modules/.pnpm/vuepress-shared@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";

import CodePen from "E:/github-fork/notes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";

import "E:/github-fork/notes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
