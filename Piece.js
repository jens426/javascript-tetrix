class Piece {
  TileFourPosition = [4, 5, 14, 15];

  // 1 is left side that has to be check for colliton
  TileFourLeftSide = [1, 0, 1, 0];
  TileFourRightSide = [0, 1, 0, 1];
  TileFourBottom = [0, 0, 1, 1];

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
      for (const element of this.TileFourPosition) {
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
    this.collitionDetectionDown(this.TileFourPosition, this.TileFourBottom);

    if (this.stopMoving == false) {
      for (const element of this.TileFourPosition) {
        var temp = this.allTiles[element];
        this.pieceFour(temp);
        temp.setEmpty();
      }
      this.TileFourPosition = [
        this.TileFourPosition[0] + 10,
        this.TileFourPosition[1] + 10,
        this.TileFourPosition[2] + 10,
        this.TileFourPosition[3] + 10,
      ];
      for (const element of this.TileFourPosition) {
        var temp = this.allTiles[element];
        this.pieceFour(temp);
        temp.setPiece(this.color);
      }
    }
  }

  moveFourLeft() {
    this.moveLeft(this.TileFourPosition, this.TileFourLeftSide);
  }

  moveRight(TilePosition, TileRight) {
    if (this.stopMoving == false) {
      let isAllowToMove = true;

      let ArrayToCheck = [];
      for (let i = 0; i < TileRight.length; i++) {
        if (TileRight[i] == 0) {
          ArrayToCheck.push(0);
        } else {
          ArrayToCheck.push(TilePosition[i]);
        }
      }

      for (const element of ArrayToCheck) {
        if (element == 0) {
          // do nothing
        } else {
          if (this.allTiles[element].getRightTile() == null) {
            // wall hit

            isAllowToMove = false;
          } else {
            if (this.allTiles[element].getRightTile().getIsSet() == true) {
              isAllowToMove = false;
            }
          }
        }
      }

      // not hit a other pice to right
      if (isAllowToMove) {
        // remove from tiles
        for (const element of TilePosition) {
          var temp = this.allTiles[element];
          this.pieceFour(temp);
          temp.setEmpty();
        }

        // move position 1 to right
        TilePosition;
        for (let i = 0; i < TilePosition.length; i++) {
          TilePosition[i] = TilePosition[i] + 1;
        }

        // paint again to the right
        for (const element of TilePosition) {
          var temp = this.allTiles[element];
          this.pieceFour(temp);
          temp.setPiece(this.color);
        }
      }
    }
  }

  moveLeft(TilePosition, TileLeft) {
    if (this.stopMoving == false) {
      let isAllowToMove = true;

      let ArrayToCheck = [];
      for (let i = 0; i < TileLeft.length; i++) {
        if (TileLeft[i] == 0) {
          ArrayToCheck.push(0);
        } else {
          ArrayToCheck.push(TilePosition[i]);
        }
      }

      for (const element of ArrayToCheck) {
        if (element == 0) {
          // do nothing
        } else {
          if (this.allTiles[element].getLeftTile() == null) {
            // wall hit

            isAllowToMove = false;
          } else {
            if (this.allTiles[element].getLeftTile().getIsSet() == true) {
              isAllowToMove = false;
            }
          }
        }
      }

      // not hit a other pice to left
      if (isAllowToMove) {
        // remove from tiles
        for (const element of TilePosition) {
          var temp = this.allTiles[element];
          this.pieceFour(temp);
          temp.setEmpty();
        }

        // move position 1 to left
        TilePosition;
        for (let i = 0; i < TilePosition.length; i++) {
          TilePosition[i] = TilePosition[i] - 1;
        }

        // paint again to the left
        for (const element of TilePosition) {
          var temp = this.allTiles[element];
          this.pieceFour(temp);
          temp.setPiece(this.color);
        }
      }
    }
  }

  moveFourRight() {
    this.moveRight(this.TileFourPosition, this.TileFourRightSide);
  }

  collitionDetectionDown(TilePosition, TileBottom) {
    let ArrayToCheck = [];
    for (let i = 0; i < TileBottom.length; i++) {
      if (TileBottom[i] == 0) {
        ArrayToCheck.push(0);
      } else {
        ArrayToCheck.push(TilePosition[i]);
      }
    }
    for (const element of ArrayToCheck) {
      if (element == 0) {
        // do nothing
      } else {
        if (this.allTiles[element].getTileUnder() == null) {
          //bottom

          this.stopMoving = true;
        } else if (this.allTiles[element].getTileUnder().getIsSet() == true) {
          //other piece collition down

          this.stopMoving = true;
        }
      }
    }
  }

  rotateFourLeft(TileFourPosition) {
    if (this.stopMoving == false) {
      this.position = position;
    }
  }

  rotateFourRight(TileFourPosition) {
    if (this.stopMoving == false) {
      this.TileFourPosition = TileFourPosition;
    }
  }
}
