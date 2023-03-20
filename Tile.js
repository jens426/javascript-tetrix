class Tile {
  isSet = false;
  constructor(x, y, size, leftTile, rightTile, tileUnder, name, canvas) {
    this.x = x;
    this.leftTile = leftTile;
    this.rightTile = rightTile;
    this.tileUnder = tileUnder;
    this.y = y;
    this.size = size;
    this.name = name;
    this.canvas = canvas;
  }

  getIsSet() {
    return this.isSet;
  }

  setPiece(color) {
    this.isSet = true;
    this.drawRect(color);
  }

  setEmpty() {
    this.isSet = false;
    this.draw();
  }

  getTileUnder() {
    return this.tileUnder;
  }

  setTileUnder(tileUnder) {
    this.tileUnder = tileUnder;
  }

  getLeftTile() {
    return this.leftTile;
  }

  getRightTile() {
    return this.rightTile;
  }

  setRightTile(rightTile) {
    this.rightTile = rightTile;
  }

  setLeftTile(leftTile) {
    this.leftTile = leftTile;
  }

  getName() {
    return this.name;
  }

  draw(color) {
    var ctx = this.canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.stroke();
  }

  draw() {
    var ctx = this.canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = "WHITE";
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.stroke();
  }
  // draw with litle grahics watermark of rectangle
  drawRect(color) {
    var ctx = this.canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.strokeStyle = "BLACK";
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.rect(this.x + 1, this.y + 1, this.size - 2, this.size - 2);
    ctx.rect(this.x + 2, this.y + 2, this.size - 3, this.size - 3);

    ctx.rect(this.x + 8, this.y + 8, this.size - 15, this.size - 15);
    ctx.stroke();
  }
  // draw with litle grahics watermark of circle
  drawArc() {
    var ctx = this.canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.strokeStyle = "BLACK";
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.rect(this.x + 1, this.y + 1, this.size - 2, this.size - 2);
    ctx.rect(this.x + 2, this.y + 2, this.size - 3, this.size - 3);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(
      this.x + this.size / 2,
      this.y + this.size / 2,
      8,
      0,
      2 * Math.PI,
      false
    );
    console.log(this.x);
    console.log(this.x2);
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
