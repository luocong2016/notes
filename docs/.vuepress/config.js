import { defineUserConfig, defaultTheme } from "vuepress"
import { getDirname, path } from "@vuepress/utils"
import { nprogressPlugin } from "@vuepress/plugin-nprogress"
import { registerComponentsPlugin } from "@vuepress/plugin-register-components"
import { componentsPlugin } from "vuepress-plugin-components"
import { prismjsPlugin } from "@vuepress/plugin-prismjs"

import DemoBlock from "./plugins/demo-block-vue"

const __dirname = getDirname(import.meta.url)
const componentsDir = path.resolve(__dirname, "../example")

export default defineUserConfig({
  lang: "zh-CN",
  title: "开心鸭",
  description: "这是我的第一个 VuePress 站点",
  port: 3000,
  plugins: [
    prismjsPlugin({
      languages: "all",
      plugins: ["line-numbers"],
      theme: "okaidia",
      css: true,
    }),
    registerComponentsPlugin({
      componentsDir,
      componentsPatterns: ["**/*.vue", "**/*.tsx"],
    }),
    DemoBlock({ componentsDir }),
    componentsPlugin({ components: ["CodePen"] }),
    nprogressPlugin(),
  ],
  theme: defaultTheme({
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "工具",
        children: [{ text: "pm2", link: "/tools/pm2" }],
      },
    ],
  }),
})
