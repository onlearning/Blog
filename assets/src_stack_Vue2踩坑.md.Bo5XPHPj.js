import{_ as s,c as n,o as a,a3 as e}from"./chunks/framework.BDUgfJP_.js";const h=JSON.parse('{"title":"Vue2 踩坑","description":"","frontmatter":{},"headers":[],"relativePath":"src/stack/Vue2踩坑.md","filePath":"src/stack/Vue2踩坑.md","lastUpdated":1714114110000}'),p={name:"src/stack/Vue2踩坑.md"},l=e(`<h1 id="vue2-踩坑" tabindex="-1">Vue2 踩坑 <a class="header-anchor" href="#vue2-踩坑" aria-label="Permalink to &quot;Vue2 踩坑&quot;">​</a></h1><h2 id="虚拟-dom-不渲染数据" tabindex="-1">虚拟 DOM 不渲染数据 <a class="header-anchor" href="#虚拟-dom-不渲染数据" aria-label="Permalink to &quot;虚拟 DOM 不渲染数据&quot;">​</a></h2><p>问题描述：消息已读和未读的功能，点击消息，消息会变成已读，重新请求数据，在重新请求数据前会先清空旧数据，但是因为两次的数据一样，导致 vue 的 diff 算法默认不更新视图，使用 <code>this.$set</code> 和 <code>this.$forceUpdate</code> 等方法都不能解决问题</p><p>解决方法：在列表项加 <code>v-if=&#39;list.length&#39;</code>，vue 的 diff 算法会监测数组变化，响应式地渲染列表。</p><h2 id="eventbus-传值及累加触发问题" tabindex="-1">eventBus 传值及累加触发问题 <a class="header-anchor" href="#eventbus-传值及累加触发问题" aria-label="Permalink to &quot;eventBus 传值及累加触发问题&quot;">​</a></h2><p>1、<code>eventBus</code> 在兄弟组件之间传值如果且触发了路由跳转（A 页面跳转至 B 页面）会导致第一次传值失败</p><p>原因：B 页面没有被创建导致发送失败，如果在 B 页面 <code>creted</code> 内使用 <code>bus.$on</code>会发生<code>bus.$on</code> 先触发，A 页面的 <code>bus.$emit</code> 后触发，导致 B 页面接收不到参数</p><p>解决方法：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#6A737D;">// 在发送方 A 页面使用 this.this.$nextTick(()=&gt;{})</span></span>
<span class="line"><span style="color:#6A737D;">// 在接收方 B 页面正常接收即可</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  bus.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;eleOpen&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.openEle)</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;bus.$emit&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>2、<code>bus.$on</code> 多次触发的问题</p><p>这个<code>$on</code> 事件是不会自动清除销毁的，需要我们手动来销毁，如果不进行销毁可能会导致事件多次触发</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#6A737D;">// 在 B 组件页面中添加以下语句，在组件 beforeDestory 的时候销毁。</span></span>
<span class="line"><span style="color:#6F42C1;">beforeDestroy</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  bus.</span><span style="color:#6F42C1;">$off</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myhandle)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>3、在 <code>created</code> 里面发起请求或接收兄弟组件的参数，在 <code>mounted</code> 内无法调用到 <code>created</code> 内参数值</p><p>原因：虽然按照生命周期是 <code>created</code> 在前，<code>mounted</code> 在后，但生命周期异步加载需要时间，如果延迟时间是可以获取到数据的，但是问题是不知道需要延迟多久，所以最好不要使用定时器处理。</p><p>解决方法：</p><p>1、在 <code>created</code> 生命周期内进行异步数据的请求，且将获取到的数据赋值给 <code>this.data</code>。</p><p>2.此时如果在 <code>mounted</code> 生命周期里获取 <code>this.data</code> 是获取不到的。</p><p>3.不要在 <code>mounted</code> 内处理数据在 <code>watch</code>内使用 <code>this.$nextTick</code> 处理即可</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#6A737D;">// 在 data 定义数据</span></span>
<span class="line"><span style="color:#6F42C1;">data</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#6F42C1;">  isOpenDialog</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 在 watch 内监听</span></span>
<span class="line"><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#6F42C1;">  isOpenDialog</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 在这里可以获取和处理数据</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="this-nexttick-的使用" tabindex="-1">this.$nextTick()的使用 <a class="header-anchor" href="#this-nexttick-的使用" aria-label="Permalink to &quot;this.$nextTick()的使用&quot;">​</a></h2><p><code>this.$nextTick()</code>将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 <code>Vue.nextTick</code> 一样，不同的是回调的 this 自动绑定到调用它的实例上。</p><h2 id="vue-打包报错" tabindex="-1">vue 打包报错 <a class="header-anchor" href="#vue-打包报错" aria-label="Permalink to &quot;vue 打包报错&quot;">​</a></h2><p><code>Failed to load resource: net::ERR_FILE_NOT_FOUND</code></p><p>解决方法：</p><p>在项目根目录创建名为 vue.config.js 的文件夹</p><p>在该文件内输入以下代码重新打包</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  publicPath: </span><span style="color:#032F62;">&#39;./&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,27),o=[l];function c(t,r,i,d,u,b){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{h as __pageData,m as default};
