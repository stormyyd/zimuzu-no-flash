// ==UserScript==
// @name          zimuzu.tv 免 Flash 复制
// @version       0.2
// @namespace     stormyyd
// @description   免 Flash 在 zimuzu.tv 上进行批量复制
// @license       WTFPL
// @supportURL    storm-yyd@outlook.com
// @grant GM_setClipboard
// @include       http://www.zimuzu.tv/*
// @include       http://zimuzu.tv/*
// ==/UserScript==

var ed2k = $("a[rel='ed2k']");
var magnet = $("a[rel='magnet']");
var disk = $("a[rel='disk']");

$(ed2k).unbind();
$(magnet).unbind();
$(disk).unbind();
$(ed2k).siblings("span").remove();

$(ed2k).click(function(){
    $("textarea#UserScript").remove();
    var urls = "";
    $("div.fl").each(function(){
        if($(this).children("input").attr("checked") == "checked" && $(this).is(":visible")){
            url = $(this).siblings("div.fr").children("a[type='ed2k']").attr("href");
            urls += url + "\n";
        }
    });
    GM_setClipboard(urls);
    alert("下载链接已复制到剪贴板");
});

$(magnet).click(function(){
    $("textarea#UserScript").remove();
    var urls = "";
    $("div.fl").each(function(){
        if($(this).children("input").attr("checked") == "checked" && $(this).is(":visible")){
            url = $(this).siblings("div.fr").children("a[type='magnet']").attr("href");
            urls += url + "\n";
        }
    });
    GM_setClipboard(urls);
    alert("下载链接已复制到剪贴板");
});

$(disk).click(function(){
    $("textarea#UserScript").remove();
    var urls = "";
    $("div.fl").each(function(){
        if($(this).children("input").attr("checked") == "checked" && $(this).is(":visible")){
            url = $(this).siblings("div.fr").children("a[type='disk']").attr("href");
            urls += url + "\n";
        }
    });
    GM_setClipboard(urls);
    alert("下载链接已复制到剪贴板");
});
