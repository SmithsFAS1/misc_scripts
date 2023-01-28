// ==UserScript==
// @name         Google News - Your Opinions are Shit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @connect      google.com
// @description  try to take over the world!
// @author       You
// @match        https://news.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('DOMNodeInserted',function(e){
        window.setTimeout(function(){
            var HLs = document.querySelectorAll('span[class^="SnqYCb"]');
            var i;
            for (i=0;i<HLs.length;i++)
            {
                if (HLs[i].parentNode.parentNode.parentNode.className.match(/\bfnoref\b/) == null)
                {
                    if (HLs[i].innerHTML.indexOf('Opinion') == 0) {
                        var theArticleNode = HLs[i].parentNode.parentNode.parentNode;
                        theArticleNode.parentNode.className = theArticleNode.parentNode.className + " fnoref";
                        theArticleNode.parentNode.removeChild(theArticleNode);
                    }
                }
            }
       }, 200);}
	, false);
})();
