var allTilesArray = new Array();

function sayHelloWorld() {
  console.log("hello world");
  return null;
}

// drawnall
function drawEverThing() {
  //drawNext();
  var c = document.getElementById("myCanvas");
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
    for (var i = 1; i < 11; i++) {
      allTilesArray.push(
        new Tile(
          350 + size,
          150 + sizeb,
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
  var roughLength = 0;
  for (const element of allTilesArray) {
    if (roughLength == 10) {
      element.setLeftTile(null);
      roughLength = 0;
    } else {
      element.setLeftTile(allTilesArray[i - 1]);
    }
    i = i + 1;
    roughLength = roughLength + 1;
  }
  allTilesArray[0].setLeftTile(null);

  // set pointer to all right tiles
  var i = 0;
  var roughLength = 1;
  for (const element of allTilesArray) {
    if (roughLength == 10) {
      element.setRightTile(null);
      roughLength = 0;
    } else {
      element.setRightTile(allTilesArray[i + 1]);
    }
    i = i + 1;
    roughLength = roughLength + 1;
  }

  // set pointer to all tileunder tiles
  var i = 0;
  for (const element of allTilesArray) {
    if (i > 149) element.setTileUnder(null);
    else element.setTileUnder(allTilesArray[i + 10]);

    i = i + 1;
  }

  for (const element of allTilesArray) {
    element.draw();
  }

  // print name of pointer af all tiles to the right
  /*
  var i = 0;
  for (const element of allTilesArray) {
    //console.log(element.getName());
    temp = element.getRightTile();
    if (temp == null) console.log(element.getName() + " right null");
    else
      console.log(
        element.getName() + "right " + element.getRightTile().getName()
      );
    i = i + 1;
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
const test1 = new Piece("red", 4, allTilesArray);
test1.placePiece();

$(document).ready(function () {
  $("body").keydown(function (e) {
    if (e.which == 40) {
      // down
      test1.moveFourDown();
    }
    if (e.which == 83) {
      // s key
      test1.moveFourDown();
    }

    if (e.which == 39) {
      // right
      test1.moveFourRight();
    }
    if (e.which == 68) {
      // d key
      test1.moveFourRight();
    }

    if (e.which == 37) {
      // left
      test1.moveFourLeft();
    }
    if (e.which == 65) {
      // a key
      test1.moveFourLeft();
    }
  });
});
