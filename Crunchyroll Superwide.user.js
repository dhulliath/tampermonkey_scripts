// ==UserScript==
// @name         Crunchyroll Superwide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Moves Crunchyroll video to top of page and resizes to fit page a lá Netflix
// @author       Peter Olejniczak
// @match        https://www.crunchyroll.com/*/*
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';

    $('body').prepend($('#showmedia_video_box_wide'));
    $('#showmedia_video_box_wide').css({'width':'100vw', 'height':'100vh'});

})();