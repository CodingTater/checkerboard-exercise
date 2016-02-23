// console.log('Its alive');


for (var i = 0; i<63; i++) {
  var tile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  var color1 = 'rgb(' + 0 + ',' + i*4 + ',' + 128 + ')';
  var color2 = 'rgb(' + 0 + ',' + 255 + ',' + i*4 + ')';
  tile.style.width = "11.1%";
  tile.style.float = "left";
  tile.style.paddingBottom = "11.1%";
  i%2  === 0 ? tile.style.backgroundColor = color1 :
  tile.style.backgroundColor = color2;
  body.appendChild(tile);
}
