(function() {
  'use strict';

  var tile = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];

  for (var i = 0; i < 63; i++) {
    tile.style.width = '11.1%';
    tile.style.float = 'left';
    tile.style.paddingBottom = '11.1%';
    tile.style.backgroundColor = i % 2 === 0
    ? 'black' : 'red';
    body.appendChild(tile);
  }
}
)();
