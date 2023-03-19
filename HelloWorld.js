function sayHelloWorld() {
  console.log("hello world");
  return null;
}

// drawnall
function drawEverThing() {
  //drawNext();
  var c = document.getElementById("myCanvas");
  var allTilesArray = new Array();
  const name = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
  ];

  var sizeb = 0;
  var nextNameInArray = 0;
  for (var ii = 1; ii < 17; ii++) {
    var size = 0;
    for (var i = 1; i < 10; i++) {
      allTilesArray.push(
        new Tile(
          350 + size,
          150 + sizeb,
          35,
          35,
          null,
          null,
          null,
          name[nextNameInArray] + "" + i,
          c
        )
      );
      size = size + 35;
    }
    nextNameInArray = nextNameInArray + 1;
    sizeb = sizeb + 35;
  }
// set pointer to all left tiles
var i = 0;
  for (const element of allTilesArray) {
    if ((i == 0) || (i == 9) || (i == 18)|| (i == 27)|| (i == 36)|| (i == 45)|| (i == 54)|| (i == 63)|| (i == 72)|| (i == 81)|| (i == 90)|| (i == 99)|| (i == 108)|| (i == 117)|| (i == 126)|| (i == 135)) element.setLeftTile(null); else 
        element.setLeftTile(allTilesArray[i-1]);
    
    i = i +1;
  }

// set pointer to all right tiles
var i = 0;
  for (const element of allTilesArray) {
    if ((i == 8) || (i == 17) || (i == i+8)|| (i == i+16)|| (i == i+24)|| (i == i+32)|| (i == i+40)|| (i == i+48)|| (i == i+56)|| (i == i+64)|| (i == i+72)|| (i == i+80)|| (i == i+88)|| (i == i+96)|| (i == i+104)|| (i == i+112)) element.setLeftTile(null); else 
        element.setRightTile(allTilesArray[i+1]);
    
    i = i +1;
  }

  // set pointer to all tileunder tiles
var i = 0;
for (const element of allTilesArray) {
  if (i > 134) element.setTileUnder(null); else 
      element.setTileUnder(allTilesArray[i+9]);
  
  i = i +1;
}

  for (const element of allTilesArray) {
    element.draw();
  }
/*
  var i = 0;
  for (const element of allTilesArray) {
    console.log(element.getName());
    temp = element.getTileUnder();
    if (temp == null) console.log("under null"); else
    console.log("under "+element.getTileUnder().getName());
    i = i +1;
  }
*/
  // print all name of tiels
  /*
  for (const element of allTilesArray) {
    console.log(element.getName());
  }
  */
}
// import of class is done in html

drawEverThing();

