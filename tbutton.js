// ==UserScript==
// @name         Google translate button
// @namespace    http://github.com/ndikanov/
// @version      0.1
// @description  Google translate button for google.com.ua
// @author       Nick
// @grant        none
// @include      http://www.google.com.ua/*
// @include      https://www.google.com.ua/*
// ==/UserScript==

function main() {

    var par = document.getElementById("sblsbb");
    var tButton = document.createElement('button');

    tButton.className = 'lsbb kpbb';
    tButton.id = 'tButton';
    tButton.innerHTML = '<span>Перевод</span>';

    par.appendChild(tButton);

    tButton.onclick = function () {

        var query = document.getElementById("lst-ib").value;
        var tLang;

        if (query.match(/[а-яґєії]/i)) {
            tLang = "en"
        } else {
            tLang = "ru"
        }

        location.href = 'https://translate.google.com.ua/#auto/' + tLang + '/' + encodeURI(query);
    };

    var addRules = function (css) {
        var heads = document.getElementsByTagName('head'),
            node = document.createElement('style');
        heads.length && heads[0].appendChild(node);
        node.appendChild(document.createTextNode(css));
    };

    addRules('#tButton {position: relative; height: inherit; top: -16px; left: 3px;}');

}

window.onload = main();