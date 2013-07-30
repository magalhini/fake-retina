(function(win) {
  var body = window.document.body,
      bwPrefix = '';

  function retinafy() {
    var retinaCss = {};
    
    // Find browser prefix
    bwPrefix = findPrefix(body);

    // Apply fake device pixel ratio
    win.devicePixelRatio = !isRetina() ? 2 : 1;
    
    retinaCss = {
      'transform': isRetina() ? 'scale(2)' : '',
      'transform-origin': isRetina() ? '0 0' : ''
    };

    for (var k in retinaCss) {
      body.style[getProperty(k)] = retinaCss[k];
    }
  }
  
  function findPrefix(el) {
    var prefixes = 'Webkit Moz Khtml O ms'.split(' ');
    
    while (prefixes.length) {
      var prefix = prefixes.shift();
      
      if (el.style[prefix + 'Transform'] != undefined) {
        return prefix;
      }
    }
  }
  
  var getProperty = function (prop) {
    return bwPrefix + prop.charAt(0).toUpperCase() + prop.substr(1);
  };
  
  var isRetina = function () {
    return win.devicePixelRatio > 1 ? true : false;
  };
  
  retinafy();
  
}(window));