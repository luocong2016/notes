<template><div><h2 id="一、-简介" tabindex="-1"><a class="header-anchor" href="#一、-简介" aria-hidden="true">#</a> 一、 简介</h2>
<ul>
<li><a href="https://www.npmjs.com/package/pm2" target="_blank" rel="noopener noreferrer">pm2<ExternalLinkIcon/></a> 是一个守护进程管理器</li>
</ul>
<h2 id="二、-快速安装" tabindex="-1"><a class="header-anchor" href="#二、-快速安装" aria-hidden="true">#</a> 二、 快速安装</h2>
<ol>
<li>安装</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> pm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>查看版本</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pm2 <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常见命令" tabindex="-1"><a class="header-anchor" href="#常见命令" aria-hidden="true">#</a> 常见命令</h2>
<h2 id="查看启动的所有应用程序" tabindex="-1"><a class="header-anchor" href="#查看启动的所有应用程序" aria-hidden="true">#</a> 查看启动的所有应用程序</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pm2 list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="管理应用程序" tabindex="-1"><a class="header-anchor" href="#管理应用程序" aria-hidden="true">#</a> 管理应用程序</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pm2 stop <span class="token operator">&lt;</span>app_name<span class="token operator">|</span>namespace<span class="token operator">|</span><span class="token function">id</span><span class="token operator">|</span><span class="token string">'all'</span><span class="token operator">|</span>json_conf<span class="token operator">></span>

pm2 restart <span class="token operator">&lt;</span>app_name<span class="token operator">|</span>namespace<span class="token operator">|</span><span class="token function">id</span><span class="token operator">|</span><span class="token string">'all'</span><span class="token operator">|</span>json_conf<span class="token operator">></span>

pm2 delete <span class="token operator">&lt;</span>app_name<span class="token operator">|</span>namespace<span class="token operator">|</span><span class="token function">id</span><span class="token operator">|</span><span class="token string">'all'</span><span class="token operator">|</span>json_conf<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取应用描述信息" tabindex="-1"><a class="header-anchor" href="#获取应用描述信息" aria-hidden="true">#</a> 获取应用描述信息</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pm2 describe <span class="token operator">&lt;</span>id<span class="token operator">|</span>app_name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="监听分析" tabindex="-1"><a class="header-anchor" href="#监听分析" aria-hidden="true">#</a> 监听分析</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pm2 monit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pm2 logs

pm2 logs APP-NAME       <span class="token comment"># Display APP-NAME logs</span>
pm2 logs <span class="token parameter variable">--json</span>         <span class="token comment"># JSON output</span>
pm2 logs <span class="token parameter variable">--format</span>       <span class="token comment"># Formated output</span>

pm2 flush               <span class="token comment"># Flush all logs</span>
pm2 reloadLogs          <span class="token comment"># Reload all logs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


