 
    function sayHelloWorld() {
        console.log('hello world');
        return null;
    }
/*
    function drawNext() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(50, 50, 100, 100);
        ctx.stroke();
    }
    */

// drawnall
    function drawEverThing(){
     //drawNext();
     var c = document.getElementById("myCanvas");
     var allTilesArray = new Array();

     var sizeb = 0;
     for(var ii = 1; ii < 17; ii++){
        var size = 0;
        for(var i = 1; i < 10; i++){
            allTilesArray.push(new Tile(350+size,150+sizeb,35,35,"a2",c));
            size = size+35;
        }
        var size = 0;
        var sizeb = sizeb+35;
    }

  
     for (const element of allTilesArray) {
        element.draw()
      }

     //a1.draw();
     //console.log(a1.getName()); 


    }
        // import of class is done in html
     

drawEverThing();



console.log('hello world');
console.log('this is line 2');