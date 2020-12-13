import StateBoardHelper from '@/helpers/StateBoardHelper';
import GameStateHelper from '@/helpers/GameStateHelper';
import Piece from "@/models/pieces/Piece";
import Square from "@/models/square/Square";
import State from './State';

import {
  Knight,
  Pawn,
  Rook,
  Bishop,
  Queen,
  King,
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
      case Rook.pieceName: {
          positions = this.rookMovement();
          break;
      }
      case Bishop.pieceName: {
          positions = this.bishopMovement();
          break;
      }
      case Queen.pieceName: {
          positions = this.queenMovment();
          break;
      }
      case King.pieceName: {
          positions = this.kingMovement();
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
    const indexes: number[] = new Array<number>();
    const jumps: number[] = [8, 12, 19, 21];

    jumps.forEach((number) => {
      let newIndex: number = this.index + number;
      if (!this.squareHasPieceOfSameColor(newIndex)) {
        indexes.push(newIndex);
      }
      newIndex = this.index - number;
      if (!this.squareHasPieceOfSameColor(newIndex)) {
        indexes.push(newIndex);
      }
    });

    return indexes;
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
      !this.squareHasPieceOfSameColor(newIndex)
    ) {
      indexes.push(newIndex);
    }
    newIndex = this.index + (this.piece.isBlack() ? 11 : -11);
    if (
      this.state.indexHasPiece(newIndex) &&
      !this.squareHasPieceOfSameColor(newIndex)
    ) {
      indexes.push(newIndex);
    }

    return indexes;
  }

  private kingMovement(): number[] {
    const directions: number[] = [-11, -10, -9, -1, 1, 9, 10, 11];
    const indexes: number[] = directions.map((direction: number) => {
      return this.index + direction
    });

    return indexes.filter((index: number) => {
      return !GameStateHelper.indexIsOffBoard(index) &&
        !this.squareHasPieceOfSameColor(index);
    });
  }

  private rookMovement(): number[] {
    const directions: number[] = [-1, -10, 1, 10];
    return this.createMovementForDirections(directions);
  }

  private bishopMovement(): number[] {
    const directions: number[] = [-9, -11, 9, 11];
    return this.createMovementForDirections(directions);
  }

  private queenMovment(): number[] {
    const directions: number[] = [-1, -9, -10, -11, 1, 9, 10, 11];
    return this.createMovementForDirections(directions);
  }

  private createMovementForDirections(directions: number[]): number[] {
    return directions.flatMap((direction: number) => {
      const indexes: number[] = new Array<number>();
      return this.walk(this.index, indexes, direction);
    });
  }

  /**
   * Recursivly walk all the sqaures in a direction (interval).
   * Return the array if off-board is reached or walked against another piece.
   */
  private walk(index: number, indexes: number[], direction: number): number[] {
    const newIndex: number = index + direction;
    
    if (
      GameStateHelper.indexIsOffBoard(newIndex) ||
      this.squareHasPieceOfSameColor(newIndex)
    ) {
      return indexes;
    }

    indexes.push(newIndex);

    if (this.state.indexHasPiece(newIndex)) {
      return indexes;
    }

    return this.walk(newIndex, indexes, direction);
  }

  private squareHasPieceOfSameColor(index: number): boolean {
    if (!this.state.indexHasPiece(index)) {
      return false;
    }

    return this.state.pieceOnIndex(index)?.color() === this.piece.color()
  }
}
export default MoveGenerator;