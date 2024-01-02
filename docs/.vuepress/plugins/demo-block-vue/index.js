import demoBlockContainers from "./common/containers"
import { path } from "@vuepress/utils"

module.exports = (options = {}) => {
  options = Object.assign(
    {
      components: {},
      componentsDir: null,
      componentsPatterns: ["**/*.vue", "**/*.tsx", "**/*.jsx"],
      getComponentName: (filename) => path.trimExt(filename.replace(/\/|\\/g, "-")),
    },
    options
  )

  return {
    name: "vuepress-plugin-demo-block-vue",
    // multiple: true,
    extendsMarkdown: (md) => {
      md.use(demoBlockContainers(options))
    },
  }
}
