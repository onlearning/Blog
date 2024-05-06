import{_ as e,c as o,o as p,a3 as s}from"./chunks/framework.BDUgfJP_.js";const b=JSON.parse('{"title":"JQuery 基础","description":"","frontmatter":{},"headers":[],"relativePath":"src/base/JQuery基础.md","filePath":"src/base/JQuery基础.md","lastUpdated":1713863841000}'),a={name:"src/base/JQuery基础.md"},c=s(`<h1 id="jquery-基础" tabindex="-1">JQuery 基础 <a class="header-anchor" href="#jquery-基础" aria-label="Permalink to &quot;JQuery 基础&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>jQuery 是封装了一些 js 方法的 js 库</p><p>优化了 Dom 操作，事件处理和 Ajax 的交互</p><p>引用完之后加载两种方法，相当于 DomContentLoaded</p><p>1.<code>$(document).ready(function(){})</code></p><p>2.<code>$(function(){})</code> 常用</p><p><code>$</code>是 jQuery 的简写，使用这个符号就可以调用 jQuery 方法</p><p>jQuery 获取到的对象是 jQuery 对象，本质是对 dom 元素进行封装</p><p>jQuery 对象只能使用 jQuery 方法，不能使用原生的方法，如果是原生的 dom 对象也不能用 jQuery 方法</p><p>DOM 对象和 jQuery 对象互相转换</p><p><code>$(对象名)</code> 可以将 dom 对象转换为 jQuery 对象</p><p><code>$(&#39;div&#39;)[0]</code> <code>$(&#39;div&#39;).get(0)</code>;都可以转换为 dom 对象</p><h2 id="常用-api" tabindex="-1">常用 API <a class="header-anchor" href="#常用-api" aria-label="Permalink to &quot;常用 API&quot;">​</a></h2><h3 id="jquery-选择器" tabindex="-1">jQuery 选择器 <a class="header-anchor" href="#jquery-选择器" aria-label="Permalink to &quot;jQuery 选择器&quot;">​</a></h3><p><code>$(&#39;选择器名&#39;)</code>，可以选择所有名字相同的选择器</p><p><code>$(&#39;ul li:first&#39;)</code> 选择第一个元素</p><p><code>$(&#39;ul li:last&#39;)</code> 选择最后一个元素</p><p><code>$(&#39;ul li:eq(n)&#39;)</code> 选择第 n 个元素</p><p><code>$(&#39;ul li:odd&#39;)</code> 选择奇数的元素</p><p><code>$(&#39;ul li:even&#39;)</code> 选择偶数的元素</p><p><code>$(&#39;.son&#39;).parent()</code>返回最近一级的父元素</p><p><code>$(&#39;ul&#39;).childern(&#39;li&#39;)</code> 相当于 ul&gt;li</p><p><code>$(&#39;ul&#39;).find(&#39;li&#39;)</code> 相当于 ul li 选择所有的 li</p><p><code>$(&#39;.first&#39;).siblings(&#39;li&#39;)</code> 查找所有兄弟节点</p><p><code>$(&#39;.first&#39;).nextAll()</code>查找当前元素之后所有的同级元素</p><p><code>$(&#39;.first&#39;).prevAll()</code>查找当前元素之前所有的同级元素</p><p><code>$(&#39;.first&#39;).has(类名)</code> 检查是否含有某个类，含有则返回 true</p><p><code>$(&#39;.first&#39;).eq(3)</code>相当于之前的 <code>li：eq(3)</code>，从第四个元素开始</p><p><code>show()</code>显示元素</p><p><code>hide()</code>隐藏元素</p><p>排他思想</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;button&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">​ </span><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">css</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">​ </span><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">siblings</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;button&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">css</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>$(this).index()</code>获得当前元素的索引</p><p><code>$(this).css().siblings().css()</code> 链式编程（简洁），需要明确 this 指向</p><h3 id="修改样式" tabindex="-1">修改样式 <a class="header-anchor" href="#修改样式" aria-label="Permalink to &quot;修改样式&quot;">​</a></h3><p><code>$(&#39;div&#39;).css（&#39;属性名&#39;，&#39;属性值&#39;）</code> 修改一个样式</p><p><code>$(&#39;div&#39;).css(&#39;background&#39;,&#39;pink&#39;)</code> 设置背景色为粉色</p><p>修改多个样式，以对象的形式</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">css</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#032F62;">  &#39;属性名&#39;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;属性值&#39;</span><span style="color:#24292E;">，</span></span>
<span class="line"><span style="color:#032F62;">  &#39;属性名&#39;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;属性值&#39;</span><span style="color:#24292E;">，</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>$(&#39;div&#39;).addClass(类名)</code>，相当于 classList，添加类，但 classList 要 IE10+</p><p><code>$(&#39;div&#39;).removeClass(类名)</code>，删除类名</p><p><code>$(&#39;div&#39;).toggleClass(类名)</code>，切换类名</p><p>以下括号内可以没参数</p><p><code>show(s,e,f)</code>显示元素</p><p><code>hide(s,e,f)</code>隐藏元素</p><p><code>toggle(s,e,f)</code>切换显示和隐藏</p><p><code>slideUp(s,e,f)</code>上拉滑动</p><p><code>slideDown(s,e,f)</code>下滑动</p><p><code>slideToggle(s,e,f)</code>滑动切换</p><p><code>feadIn(s,e,f)</code>淡入效果</p><p><code>fadeOut(s,e,f)</code>淡出效果</p><p><code>fadeToggle(s,e,f）</code>淡入淡出切换</p><p><code>fadeTo(s,o,e,f)</code>修改透明度，需要时间的 o 透明度参数</p><p><code>animate(对象,s,e,f)</code> 对象以键值对存在</p><p>s 可以是 fast、normal、fast 或毫秒数</p><p>e 是切换效果，默认是 swing，可以改成 linear</p><p>f 是回调函数</p><p>事件切换 hover（鼠标经过函数，鼠标离开函数）</p><p>可以简写成 hover（切换隐藏和显示函数）</p><p>动画具有排队效果，如果短时间触发多次函数，可以使用 <code>stop()</code>函数，需要写在动画的前面</p><p><code>$(this).children(&#39;ul&#39;).stop().slideToggle()</code></p><h3 id="属性操作" tabindex="-1">属性操作 <a class="header-anchor" href="#属性操作" aria-label="Permalink to &quot;属性操作&quot;">​</a></h3><p>获取元素固有属性 <code>.prop(&#39;属性名&#39;)</code></p><p>修改元素固有属性 <code>.prop(&#39;属性名&#39;，&#39;属性值&#39;)</code></p><p>获取自定义属性 <code>.attr(&#39;属性名&#39;)</code></p><p>修改元素自定义属性 <code>.attr(&#39;属性名&#39;，&#39;属性值&#39;)</code></p><p>获取 h5 自定义 data 开头的属性 <code>.data(&#39;属性名(不含 data-)&#39;)</code></p><p>复选框选中状态判断：checked <code>$(&#39;box:checked&#39;)</code></p><p>获取内容文本值</p><p><code>.html()</code> 获取设置元素的内容</p><p><code>.text()</code> 获取设置元素文本值</p><p><code>.val()</code> 获取设置表单值</p><p>查找指定的祖先元素<code>.parents(&#39;元素名&#39;)</code></p><p>保留 n 位小数 <code>toFixed(n)</code></p><h3 id="元素操作" tabindex="-1">元素操作 <a class="header-anchor" href="#元素操作" aria-label="Permalink to &quot;元素操作&quot;">​</a></h3><p>同一类会有隐式迭代，做相同的操作</p><p>如果需要不同的操作，使用 <code>each(回调函数)</code> 方法，回调函数第一个参数为索引号，第二个为 dom 元素，需要转换为 jQuery 元素</p><p><code>$(&#39;div&#39;).each(function(index,dom){})</code></p><p><code>$.each(obj,function(i,ele){})</code>用来遍历数组或对象</p><p>创建元素<code>$(&#39;&lt;li&gt;&lt;/li&gt;&#39;)</code></p><p>添加元素</p><p><code>.append()</code> 内部添加默认在后面（父子关系）</p><p><code>.prepend()</code> 内部添加放在前面（父子关系）</p><p><code>.after()</code> 外部添加在后面，兄弟关系</p><p><code>.bdfore()</code> 外部添加在前面，兄弟关系</p><p><code>.remove()</code> 删除元素</p><p><code>.empty()</code> 删除子元素</p><p><code>.html()</code> 和 empty 相同</p><h3 id="尺寸操作" tabindex="-1">尺寸操作 <a class="header-anchor" href="#尺寸操作" aria-label="Permalink to &quot;尺寸操作&quot;">​</a></h3><p><code>width()</code>/<code>height()</code>宽度和高度</p><p><code>innerWidth()</code>/<code>innerHeight()</code>包含 padding 的宽度和高度</p><p><code>outerWidth()</code>/<code>outerHeight()</code>包含边框</p><p><code>outerWidth(true)</code>/<code>outerHeight(true)</code>包含边框、padding 和 margin</p><p><code>offset()</code>元素距离文档的距离，可以通过 top 和 left 设置距离</p><p><code>position()</code>只能获取父元素的距离，不能设置</p><p><code>scollTop()</code>/<code>scollLeft()</code>已滚动的距离</p><p>文档滚动距离<code>$(document).scollTop()</code></p><p>返回顶部不能用 document</p><p>要使用<code>$(&#39;body,html&#39;).stop().animate({scrollTop:0})</code></p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><p>事件注册，和原生 js 一样</p><p>事件处理，on,内部以键值组成</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#6F42C1;">  mouseenter</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){}</span></span>
<span class="line"><span style="color:#6F42C1;">  click</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>on 可以实现事件委托</p><p><code>$(&#39;ul li&#39;).click()</code></p><p>可以写成<code>$(&#39;ul&#39;).on(&#39;click&#39;,&#39;li&#39;,function)</code></p><p><code>on()</code> 可以给未来创建的动态元素绑定元素</p><p><code>off()</code> 可以解绑 on 绑定的事件，为空解绑所有事件，加入对应方法可以删除对应方法</p><p><code>one()</code> 可以绑定只触发一次的函数</p><p><code>tigger()</code> 自动触发事件</p><p><code>tiggerHandler()</code> 自动触发事件，不会触发默认行为，比如 input 获得焦点就会有光标</p><p><code>event.stopPropagation()</code> 阻止冒泡事件</p><h3 id="拷贝对象" tabindex="-1">拷贝对象 <a class="header-anchor" href="#拷贝对象" aria-label="Permalink to &quot;拷贝对象&quot;">​</a></h3><p><code>$.extend(deep,target,obj)</code></p><p>deep 默认为 false，浅拷贝，改为 true 则是深拷贝</p><p>多库共存</p><p>如果是$符号冲突，使用 jquery 命名</p><p>还可以释放控制权 jQuery.noConflict()；</p><h2 id="jquery-插件" tabindex="-1">jQuery 插件 <a class="header-anchor" href="#jquery-插件" aria-label="Permalink to &quot;jQuery 插件&quot;">​</a></h2><p>jquery 之家和 jquery22</p><p>瀑布流插件</p><p>图片懒加载（提升网页加载速度，减轻服务器压力）</p><p>全屏滚动插件</p><p>bootstrap 插件</p>`,125),n=[c];function l(d,t,r,i,u,h){return p(),o("div",null,n)}const m=e(a,[["render",l]]);export{b as __pageData,m as default};
