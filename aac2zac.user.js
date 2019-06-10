// ==UserScript==
// @name        AcFun自动换地址 V3文章版
// @description 可跳转回早期旧版文章二级页以及评论区
// @author      补档PO
// @version     1.3.2

// @include     http://www.acfun.cn/a/ac*

// ==/UserScript==

window.location.href = window.location.href.replace(/^http:\/\/www.\acfun\.cn\/a\//, 'http:\/\/www.\acfun\.cn\/z\/');
