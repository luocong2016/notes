import prism from "prismjs"
import chalk from "chalk"
import escapeHtml from "escape-html"

function wrap(code, lang) {
  if (lang === "text") {
    code = escapeHtml(code)
  }

  return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`
}

export default (str, lang) => {
  if (!lang) {
    return wrap(str, "text")
  }

  lang = lang.toLowerCase()
  const rawLang = lang
  if (lang === "vue" || lang === "html") {
    lang = "markup"
  }
  if (lang === "md") {
    lang = "markdown"
  }
  if (lang === "ts") {
    lang = "typescript"
  }
  if (lang === "py") {
    lang = "python"
  }
  if (!prism.languages[lang]) {
    console.warn(
      chalk.yellow(`[vitepress] Syntax highlight for language "${lang}" is not supported.`)
    )
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, rawLang)
  }

  return wrap(str, "text")
}
