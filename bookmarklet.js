javascript:(function(e){function r(){var r={};n=i(t);e.devicePixelRatio=!o()?2:1;r={transform:o()?"scale(2)":"","transform-origin":o()?"0 0":""};for(var u in r){t.style[s(u)]=r[u]}}function i(e){var t="Webkit Moz Khtml O ms".split(" ");while(t.length){var n=t.shift();if(e.style[n+"Transform"]!=undefined){return n}}}var t=window.document.body,n="";var s=function(e){return n+e.charAt(0).toUpperCase()+e.substr(1)};var o=function(){return e.devicePixelRatio>1?true:false};r()})(window)