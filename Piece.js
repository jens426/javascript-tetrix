class Piece {
  TilePosition = [];
  TileLeftSide = [];
  TileRightSide = [];
  TileBottom = [];

  TileFourPosition = [];
  // 1 is side that has to be check for colliton
  TileFourLeftSide = [1, 0, 1, 0];
  TileFourRightSide = [0, 1, 0, 1];
  TileFourBottom = [0, 0, 1, 1];

  TileOnePosition = [];
  // 1 is side that has to be check for colliton
  TileOneLeftSide = [1, 1, 1, 1];
  TileOneRightSide = [1, 1, 1, 1];
  TileOneBottom = [0, 0, 0, 1];

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
    this.stopMoving = false;
    this.TileFourPosition = [4, 5, 14, 15];
    this.TileOnePosition = [5, 15, 25, 35];

    if (this.shape == 4) {
      this.TilePosition = this.TileFourPosition;
      this.TileLeftSide = this.TileFourLeftSide;
      this.TileRightSide = this.TileFourRightSide;
      this.TileBottom = this.TileFourBottom;
    }

    if (this.shape == 1) {
      this.TilePosition = this.TileOnePosition;
      this.TileLeftSide = this.TileOneLeftSide;
      this.TileRightSide = this.TileOneRightSide;
      this.TileBottom = this.TileOneBottom;
    }

    //TileFourPosition = [4, 5, 14, 15];

    for (const element of this.TilePosition) {
      var temp = this.allTiles[element];
      this.pieceFour(temp);

      temp.setPiece(this.color);
    }

    //temp.setEmpty();
  }

  pieceFour(position) {
    return false;
  }

  movePieceDown() {
    this.collitionDetectionDown(this.TilePosition, this.TileBottom);

    if (this.stopMoving == false) {
      for (const element of this.TilePosition) {
        var temp = this.allTiles[element];
        this.pieceFour(temp);
        temp.setEmpty();
      }
      this.TilePosition = [
        this.TilePosition[0] + 10,
        this.TilePosition[1] + 10,
        this.TilePosition[2] + 10,
        this.TilePosition[3] + 10,
      ];
      for (const element of this.TilePosition) {
        var temp = this.allTiles[element];
        this.pieceFour(temp);
        temp.setPiece(this.color);
      }
    }
  }

  movePieceLeft() {
    this.moveLeft(this.TilePosition, this.TileLeftSide);
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

  movePieceRight() {
    this.moveRight(this.TilePosition, this.TileRightSide);
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

  rotateLeft(TilePosition) {
    if (this.stopMoving == false) {
      this.position = this.position;
    }
  }

  rotateRight(TilePosition) {
    if (this.stopMoving == false) {
      this.TilePosition = TilePosition;
    }
  }
}
