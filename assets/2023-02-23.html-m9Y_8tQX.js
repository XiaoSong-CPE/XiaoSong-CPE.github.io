import{_ as e,o,c,b as d}from"./app-EJyl-AbL.js";const t={},a=d('<h1 id="原创动力小游戏-领奖请求的返回信息" tabindex="-1"><a class="header-anchor" href="#原创动力小游戏-领奖请求的返回信息" aria-hidden="true">#</a> 原创动力小游戏 领奖请求的返回信息</h1><p>一开始进行小游戏修改的时候，因为没有微信<code>openid</code>，发送请求只能获得<code>对不起,你本次活动没有上榜。</code>的提示，不过当时修复的是最早的一批游戏，请求信息还能有反馈（虽然反馈的是空的排行列表）已经很令人兴奋了。</p><p>后来在修复较新的游戏时发现可以正常获取排行榜，于是通过获取到的上榜用户的<code>openid</code>拿到了新的领奖信息：<code>信息提交成功!奖品于14个工作日内发出。</code>。如果我印象没错的话，我当初玩最早一批小游戏领奖时也就是这个领奖信息了。</p><p>今天修复“有爱成双”活动页面时，意外拿到了两条新信息：<code>信息提交成功!奖品于7个工作日内发出。</code>和<code>你已经填写过收件人信息了。</code>。也就是说，我之前随手选择的<code>openid</code>是没有领过奖的！并且我测试的时候，领奖信息填写的是空值，所以反复领奖也还是不会触发后面一条消息。当然我怀疑也可能是bug，毕竟后来羊羊人气高了，小游戏杀进前十可不容易——正因如此后来我也再没有拿过小游戏的礼品了——这前十名的奖励没有理由不领取。</p>',4),n=[a];function r(_,s){return o(),c("div",null,n)}const p=e(t,[["render",r],["__file","2023-02-23.html.vue"]]);export{p as default};
