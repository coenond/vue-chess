import StateBoardHelper from '@/helpers/StateBoardHelper';
import GameStateHelper from '@/helpers/GameStateHelper';
import Piece from "@/models/pieces/Piece";
import Square from "@/models/square/Square";
import State from './State';

import {
  Knight,
  Pawn,
} from '@/models/pieces';

class MoveGenerator {

  private piece: Piece;

  private index: number;

  private state: State;

  constructor(piece: Piece, square: Square, state: State) {
    this.piece = piece;
    this.index = StateBoardHelper.indexForSquare(square);
    this.state = state;
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
    
    let newIndex: number = this.index + (this.piece.isBlack() ? 10 : -10);
    if (!this.state.indexHasPiece(newIndex)) {
      indexes.push(newIndex);
    }

    newIndex = this.index + (this.piece.isBlack() ? 20 : -20);
    if (onStart && !this.state.indexHasPiece(newIndex)) {
      indexes.push(newIndex);
    }

    // Check if Pawn can capture
    newIndex = this.index + (this.piece.isBlack() ? 9 : -9);
    if (
      this.state.indexHasPiece(newIndex) &&
      this.state.pieceOnIndex(newIndex)?.color() !== this.piece.color()
    ) {
      indexes.push(newIndex);
    }
    newIndex = this.index + (this.piece.isBlack() ? 11 : -11);
    if (
      this.state.indexHasPiece(newIndex) &&
      this.state.pieceOnIndex(newIndex)?.color() !== this.piece.color()
    ) {
      indexes.push(newIndex);
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