// ==UserScript==
// @name         Google News - Your Opinions are Shit
// @namespace    http://tampermonkey.net/
// @version      0.2
// @connect      google.com
// @description  Remove Opinion pieces from Google News' pages
// @author       You
// @match        https://news.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('DOMNodeInserted',function(e){
        window.setTimeout(function(){
            var HLs_oldlayout = document.querySelectorAll('span[class^="SnqYCb"]');
            var HLs_newlayout = document.querySelectorAll('span[class^="CUjhod"]');
            var i;
            for (i=0;i<HLs_oldlayout.length;i++)
            {
                if (HLs_oldlayout[i].parentNode.parentNode.parentNode.className.match(/\bfnoref\b/) == null)
                {
                    if (HLs_oldlayout[i].innerHTML.indexOf('Opinion') == 0) {
                        var theArticleNode = HLs_oldlayout[i].parentNode.parentNode.parentNode;
                        theArticleNode.parentNode.className = theArticleNode.parentNode.className + " fnoref";
                        theArticleNode.parentNode.removeChild(theArticleNode);
                    }
                }
            }
            for (i=0;i<HLs_newlayout.length;i++)
            {
                if (HLs_newlayout[i].parentNode.parentNode.className.match(/\bfnoref\b/) == null)
                {
                    if (HLs_newlayout[i].innerHTML.indexOf('Opinion') == 0) {
                        var theArticleNode_NL = HLs_newlayout[i].parentNode.parentNode;
                        theArticleNode_NL.parentNode.className = theArticleNode_NL.parentNode.className + " fnoref";
                        theArticleNode_NL.parentNode.removeChild(theArticleNode_NL);
                    }
                }
            }

        }, 200);}
	, false);
})();
