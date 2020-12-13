import StateBoardHelper from '@/helpers/StateBoardHelper';
import GameStateHelper from '@/helpers/GameStateHelper';
import Piece from "@/models/pieces/Piece";
import Square from "@/models/square/Square";
import ColorEnum from '../common/ColorEnum';
import {
  Knight,
  Pawn,
} from '@/models/pieces';

class MoveGenerator {

  private piece: Piece;

  private index: number;

  constructor(piece: Piece, square: Square) {
    this.piece = piece;
    this.index = StateBoardHelper.indexForSquare(square);
  }

  get allPositions(): number[] {
    let positions: number[];
    switch(this.piece.name()) {
      case Knight.pieceName: {
          positions = this.knightMovement();
          break;
      }
      case Pawn.pieceName: {
          positions = this.pawnMovement();
          break;
      }
      default: {
        positions = [];
      }
    }

    return GameStateHelper.filterOnBoardIndexes(positions);
  }

  /**
   * A knight always has 8 possible squares
   * to move to.
   */
  private knightMovement(): number[] {
    return [
      this.index + 8,
      this.index + 12,
      this.index + 19,
      this.index + 21,
      this.index - 8,
      this.index - 12,
      this.index - 19,
      this.index - 21,
    ];
  }

  private pawnMovement(): number[] {
    const indexes: number[] = new Array<number>();
    const onStart: boolean = this.piece.isBlack()
      ? this.index > 30 && this.index < 39
      : this.index > 80 && this.index < 89;

    indexes.push(
      this.piece.isBlack() ? this.index + 10 : this.index - 10
    );

    if (onStart) {
      indexes.push(
        this.piece.isBlack() ? this.index + 20 : this.index - 20
      );
    }

    return indexes;
  }

  /**
   * Recursivly add indexes to the array until the rook
   * has moved off the board. 
   * @param indexes
   */
  // private rookMovement(indexes: number[]): number[] {
  //   const newIndex: number = this.index + 1;
    
  //   if (GameStateHelper.indexIsOffBoard(newIndex)) {
  //     return indexes;
  //   }

  //   indexes.push(newIndex);
  //   return this.rookMovement(indexes);
  // }
}
export default MoveGenerator;