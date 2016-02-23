// console.log('Its alive');

var tile = document.createElement("div");
var divs;

for (var i = 0; i<63; i++) {
  var tile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  tile.style.width = "11.1%";
  tile.style.float = "left";
  tile.style.paddingBottom = "11.1%";
  var a = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var c = Math.floor(Math.random() * 255);
  var color = 'rgb(' + a + ',' + b + ',' + c + ')';
  tile.style.backgroundColor = color;
  body.appendChild(tile);
};


var colorChange = function(){
 for (var i = 0; i<63; i++){
   var divs = document.getElementsByTagName("div")[i]
   var a = Math.floor(Math.random() * 255);
   var b = Math.floor(Math.random() * 255);
   var c = Math.floor(Math.random() * 255);
   var color = 'rgb(' + a + ',' + b + ',' + c + ')';
   divs.style.backgroundColor = color;
 };
}

setInterval(colorChange, 2000);
