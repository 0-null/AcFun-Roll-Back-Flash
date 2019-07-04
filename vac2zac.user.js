// ==UserScript==
// @name        AcFun自动换地址

// @description 视频页面调用flash播放器
// @description 旧版评论区风格，不保证后续可用

// @description 感谢 浮云总是梦 全程指导代码！
// @author      浮云总是梦 补档PO
// @version     1.3.3

// @include     https://www.acfun.cn/*

// ==/UserScript==

if (window.location.href.indexOf('www.acfun.cn/v') > 0) {
  window.location.href = window.location.href.replace('www.acfun.cn/v', 'www.acfun.cn/z')
}

document.getElementById("ACFlashPlayer-re").data = "https://cdn.aixifan.com/flash/player-view-homura.swf"
