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
          name[nextNameInArray] + "" + i,
          c
        )
      );
      size = size + 35;
    }
    nextNameInArray = nextNameInArray + 1;
    sizeb = sizeb + 35;
  }

  for (const element of allTilesArray) {
    element.draw();
  }

  // print all name of tiels
  /*
  for (const element of allTilesArray) {
    console.log(element.getName());
  }
  */
}
// import of class is done in html

drawEverThing();

console.log("hello world");
console.log("this is line 2");
