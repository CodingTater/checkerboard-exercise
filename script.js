(function() {
  'use strict';

  for (var i = 0; i < 63; i++) {
    var tile = document.createElement('div');
    var body = document.getElementsByTagName('body')[0];
    var rColor = Math.floor(Math.random() * 256);
    var gColor = Math.floor(Math.random() * 256);
    var bColor = Math.floor(Math.random() * 256);
    var color = 'rgb(' + rColor + ',' + gColor + ',' + bColor + ')';

    tile.style.width = '11.1%';
    tile.style.float = 'left';
    tile.style.paddingBottom = '11.1%';
    tile.style.backgroundColor = color;
    body.appendChild(tile);
  }
}
)();
