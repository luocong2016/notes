import fs from "node:fs"
import path from "node:path"
import markdownit from "markdown-it"
import mdContainer from "markdown-it-container"

import highlight from "./highlight"

const localMd = markdownit()

function getFileType(url) {
  if (/.(vue|jsx|tsx?)$/.test(url)) {
    return url.substr(url.lastIndexOf(".") + 1)
  }
  return "vue"
}

export default (options) => {
  const { component = "demo-block", componentsDir, getComponentName } = options

  const componentName = component
    .replace(/^\S/, (s) => s.toLowerCase())
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()

  return (md) => {
    md.use(mdContainer, "demo", {
      validate(params) {
        return params.trim().match(/^demo\s*(.*)$/)
      },

      render(tokens, idx) {
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        if (tokens[idx].nesting === 1) {
          const description = m && m.length > 1 ? m[1] : ""
          const sourceFileToken = tokens[idx + 2]
          let sourceFile = ""
          if (
            sourceFileToken.children &&
            sourceFileToken.children[0] &&
            sourceFileToken.children[0].content
          ) {
            sourceFile = sourceFileToken.children[0].content
          }
          let source = ""
          if (sourceFileToken.type === "inline") {
            source = fs.readFileSync(path.resolve(`${componentsDir}/${sourceFile}`), "utf-8")
          } else {
            // for (let i = idx + 1; i < tokens.length; i++) {
            //   console.log(tokens[i]);
            //   if (
            //     tokens[i] &&
            //     tokens[i].type === "html_block" &&
            //     tokens[i].content
            //   ) {
            //     source += tokens[i].content;
            //   }
            // }
          }

          const cptName = getComponentName(sourceFile.replace(/.(vue|jsx|tsx?)$/, ""))

          const encodeOptionsStr = encodeURI(JSON.stringify(options))
          let result = `<${componentName} componentName="${cptName}" :options="JSON.parse(decodeURI('${encodeOptionsStr}'))"
          description="${encodeURIComponent(localMd.render(description))}"
          source="${encodeURIComponent(highlight(source, getFileType(sourceFile)))}"
          >
        `
          return result
        }
        return `</${componentName}>\n`
      },
    })
  }
}
