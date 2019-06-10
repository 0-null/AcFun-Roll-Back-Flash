// ==UserScript==
// @name        AcFun自动换地址 V3视频版
// @description 视频页面调用flash播放器【已失效】

// @description 目前可以调用旧版评论区风格，不保证后续可用

// @author      补档PO
// @version     1.3.1

// @include     https://www.acfun.cn/v/ac*

// ==/UserScript==

window.location.href = window.location.href.replace(/^https:\/\/www.\acfun\.cn\/v\//, 'https:\/\/www.\acfun\.cn\/z\/');
