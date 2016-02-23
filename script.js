// console.log('Its alive');


for (var i = 0; i<63; i++) {
  var tile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(tile);
  tile.style.width = "11.1%";
  tile.style.float = "left";
  tile.style.paddingBottom = "11.1%";
  i%2  === 0 ? tile.style.backgroundColor = "black" :
  tile.style.backgroundColor = "red";
}
