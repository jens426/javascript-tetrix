class Piece {
  position = [4, 5, 14, 15];
  stopMoving = false;
  constructor(color, shape, allTiles) {
    this.color = color;
    this.shape = shape;
    this.allTiles = allTiles;
  }

  getStopMoving() {
    return this.stopMoving;
  }

  placePiece() {
    if (this.shape == 4) {
      for (const element of this.position) {
        var temp = this.allTiles[element];
        this.pieceFour(temp);

        temp.setPiece(this.color);
      }

      //temp.setEmpty();
    }
  }

  pieceFour(position) {
    return false;
  }

  moveFourDown() {
    this.collitionDetectionFour();

    if (this.stopMoving == false) {
      for (const element of this.position) {
        var temp = this.allTiles[element];
        this.pieceFour(temp);
        temp.setEmpty();
      }
      this.position = [
        this.position[0] + 10,
        this.position[1] + 10,
        this.position[2] + 10,
        this.position[3] + 10,
      ];
      for (const element of this.position) {
        var temp = this.allTiles[element];
        this.pieceFour(temp);
        temp.setPiece(this.color);
      }
    }
  }

  moveFourleft() {
    if (this.stopMoving == false) {
      if (this.allTiles[this.position[2]].getLeftTile() != null) {
        // wall hit
        if (
          this.allTiles[this.position[2]].getLeftTile().getIsSet() == false &&
          this.allTiles[this.position[0]].getLeftTile().getIsSet() == false
        ) {
          // hit a other pice to left

          for (const element of this.position) {
            var temp = this.allTiles[element];
            this.pieceFour(temp);
            temp.setEmpty();
          }
          this.position = [
            this.position[0] - 1,
            this.position[1] - 1,
            this.position[2] - 1,
            this.position[3] - 1,
          ];
          for (const element of this.position) {
            var temp = this.allTiles[element];
            this.pieceFour(temp);
            temp.setPiece(this.color);
          }
        }
      }
    }
  }

  moveFourRight() {
    if (this.stopMoving == false) {
      if (this.allTiles[this.position[3]].getRightTile() != null) {
        // wall hit
        if (
          this.allTiles[this.position[3]].getRightTile().getIsSet() == false &&
          this.allTiles[this.position[1]].getRightTile().getIsSet() == false
        ) {
          // hit a other pice to right

          for (const element of this.position) {
            var temp = this.allTiles[element];
            this.pieceFour(temp);
            temp.setEmpty();
          }
          this.position = [
            this.position[0] + 1,
            this.position[1] + 1,
            this.position[2] + 1,
            this.position[3] + 1,
          ];
          for (const element of this.position) {
            var temp = this.allTiles[element];
            this.pieceFour(temp);
            temp.setPiece(this.color);
          }
        }
      }
    }
  }

  collitionDetectionFour() {
    if (this.shape == 4) {
      if (this.allTiles[this.position[3]].getTileUnder() == null) {
        //bottom
        this.stopMoving = true;
      } else if (
        this.allTiles[this.position[3]].getTileUnder().getIsSet() == true
      ) {
        //other piece collition down
        this.stopMoving = true;
      }
    }
  }

  rotateFourLeft(position) {
    if (this.stopMoving == false) {
      this.position = position;
    }
  }

  rotateFourRight(position) {
    if (this.stopMoving == false) {
      this.position = position;
    }
  }
}
