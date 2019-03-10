// ==UserScript==
// @name         Remove Wikia article videos
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Get rid of those autoplay Wikia videos
// @author       Peter Olejniczak
// @match        *.wikia.com/*
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
        $('.featured-video__wrapper').remove();
    });
})();