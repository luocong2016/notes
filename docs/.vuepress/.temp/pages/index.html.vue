<template><div><h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h1>
<h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2>
<table>
<thead>
<tr>
<th>First Header</th>
<th>Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
</tbody>
</table>
<h2 id="删除线" tabindex="-1"><a class="header-anchor" href="#删除线" aria-hidden="true">#</a> 删除线</h2>
<h3 id="bold" tabindex="-1"><a class="header-anchor" href="#bold" aria-hidden="true">#</a> Bold</h3>
<p><strong>This is bold text</strong></p>
<p><strong>This is bold text</strong></p>
<h3 id="italic" tabindex="-1"><a class="header-anchor" href="#italic" aria-hidden="true">#</a> Italic</h3>
<p><em>This text is italicized</em></p>
<p><em>This text is italicized</em></p>
<h3 id="strikethrough" tabindex="-1"><a class="header-anchor" href="#strikethrough" aria-hidden="true">#</a> Strikethrough</h3>
<p><s>This was mistaken text</s></p>
<h3 id="bold-and-nested-italic" tabindex="-1"><a class="header-anchor" href="#bold-and-nested-italic" aria-hidden="true">#</a> Bold and nested italic</h3>
<p><strong>This text is <em>extremely</em> important</strong></p>
<h3 id="all-bold-and-italic" tabindex="-1"><a class="header-anchor" href="#all-bold-and-italic" aria-hidden="true">#</a> All bold and italic</h3>
<p><strong><em>All this text is important</em></strong></p>
<h3 id="subscript" tabindex="-1"><a class="header-anchor" href="#subscript" aria-hidden="true">#</a> Subscript</h3>
<p>This is a <sub>subscript</sub> text</p>
<h3 id="superscript" tabindex="-1"><a class="header-anchor" href="#superscript" aria-hidden="true">#</a> Superscript</h3>
<p>This is a <sup>superscript</sup> text</p>
<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h2>
<p>:EMOJICODE:</p>
<h1 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h1>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


