class Tile {
    constructor(x,y,x2,y2,name,canvas) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.name = name;
        this.canvas = canvas;
    }

    getName() {
        return this.name;
      }

      draw() {
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.x2, this.y2);
        ctx.stroke();
    }

    printAll(){
        console.log(this.x);
        console.log(this.y);
        console.log(this.x+this.size);
        console.log(this.y+this.size);
        console.log(this.size);
    }


  }