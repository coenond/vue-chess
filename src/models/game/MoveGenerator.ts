import StateBoardHelper from '@/helpers/StateBoardHelper';
import GameStateHelper from '@/helpers/GameStateHelper';
import Piece from "@/models/pieces/Piece";
import Square from "@/models/square/Square";
import { Knight } from '@/models/pieces';

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
}
export default MoveGenerator;