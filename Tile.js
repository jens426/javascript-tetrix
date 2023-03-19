class Tile {
  constructor(x, y, x2, y2,leftTile,rightTile,tileUnder, name, canvas) {
    this.x = x;
    this.leftTile = leftTile;
    this.rightTile = rightTile;
    this.tileUnder = tileUnder;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.name = name;
    this.canvas = canvas;
  }

  getTileUnder(){
    return this.tileUnder;
  }

  setTileUnder(tileUnder){
    this.tileUnder = tileUnder;
  }

  getLeftTile(){
    return this.leftTile;
  }

  getRightTile(){
    return this.rightTile;
  }

  setRightTile(rightTile){
    this.rightTile = rightTile;
  }

  setLeftTile(leftTile){
    this.leftTile = leftTile;
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

  printAll() {
    console.log(this.x);
    console.log(this.y);
    console.log(this.x + this.size);
    console.log(this.y + this.size);
    console.log(this.size);
  }
}
