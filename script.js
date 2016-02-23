// console.log('Its alive');


for (var i = 0; i<63; i++) {
  var tile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  var a = setInterval(Math.floor(Math.random() * 256), 2000);
  var b = setInterval(Math.floor(Math.random() * 256), 2000);
  var c = setInterval(Math.floor(Math.random() * 256), 2000);
  var color = 'rgb(' + a + ',' + b + ',' + c + ')';
  tile.style.width = "11.1%";
  tile.style.float = "left";
  tile.style.paddingBottom = "11.1%";
  tile.style.backgroundColor = color;
  body.appendChild(tile);
};
