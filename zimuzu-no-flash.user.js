// ==UserScript==
// @name          字幕组（原 人人影视） 免 Flash 复制
// @version       0.3.3
// @namespace     stormyyd
// @description   免 Flash 在 字幕组（原 人人影视） 上进行批量复制
// @license       WTFPL
// @supportURL    storm-yyd@outlook.com
// @grant         GM_setClipboard
// @include       http://www.zmz2017.com/resource/list/*
// ==/UserScript==

var ed2k = $("a[rel='ed2k']");
var magnet = $("a[rel='magnet']");
var disk = $("a[rel='disk']");

$(ed2k).unbind();
$(magnet).unbind();
$(disk).unbind();
$(ed2k).siblings("span").remove();

var getUrl = function(urlType){
    var urls = "";
    $("div.fl").each(function(){
        if($(this).children("input").attr("checked") == "checked" && $(this).is(":visible")){
            url = $(this).siblings("div.fr").children("a[type='" + urlType + "']").attr("href");
            if(url !== undefined) urls += url + "\n";
        }
    });
    urls = urls.slice(0, -1);
    GM_setClipboard(urls);
    GLOBAL.ShowMsg("已将链接复制到剪贴板");
};

$(ed2k).click(function(){
    getUrl("ed2k");
});
$(magnet).click(function(){
    getUrl("magnet");
});
$(disk).click(function(){
    getUrl("disk");
});