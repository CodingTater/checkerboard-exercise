// console.log('Its alive');


for (var i = 0; i<63; i++) {
  var tile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  tile.style.width = "11.1%";
  tile.style.float = "left";
  tile.style.paddingBottom = "11.1%";
  tile.style.backgroundColor = color;
  body.appendChild(tile);
}
