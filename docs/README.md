---
lang: zh-CN
title: 页面的标题
description: 页面描述
---

# Markdown

## 表格

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

## 删除线

### Bold

**This is bold text**

**This is bold text**

### Italic

_This text is italicized_

_This text is italicized_

### Strikethrough

~~This was mistaken text~~

### Bold and nested italic

**This text is _extremely_ important**

### All bold and italic

**_All this text is important_**

### Subscript

This is a <sub>subscript</sub> text

### Superscript

This is a <sup>superscript</sup> text

## Emoji

:EMOJICODE:

# 代码块

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
