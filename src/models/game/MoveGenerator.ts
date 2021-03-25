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
import CastleSide from './enum/CastleSides';

class MoveGenerator {

  private _piece: Piece;

  private _index: number;

  private _state: State;

  constructor(piece: Piece, square: Square, state: State) {
    this._piece = piece;
    this._index = StateBoardHelper.indexForSquare(square);
    this._state = state;
  }

  get allPositions(): number[] {
    let positions: number[];
    switch(this._piece.name) {
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
          positions = this.queenMovement();
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
      let newIndex: number = this._index + number;
      if (!this.squareHasPieceOfSameColor(newIndex)) {
        indexes.push(newIndex);
      }
      newIndex = this._index - number;
      if (!this.squareHasPieceOfSameColor(newIndex)) {
        indexes.push(newIndex);
      }
    });

    return indexes;
  }

  private pawnMovement(): number[] {
    const indexes: number[] = new Array<number>();
    const onStart: boolean = this._piece.isBlack()
      ? this._index > 30 && this._index < 39
      : this._index > 80 && this._index < 89;
    
    let newIndex: number = this._index + (this._piece.isBlack() ? 10 : -10);
    if (!this._state.indexHasPiece(newIndex)) {
      indexes.push(newIndex);
    }

    newIndex = this._index + (this._piece.isBlack() ? 20 : -20);
    if (onStart && !this._state.indexHasPiece(newIndex)) {
      indexes.push(newIndex);
    }

    // Check if Pawn can capture
    newIndex = this._index + (this._piece.isBlack() ? 9 : -9);
    if (
      this._state.indexHasPiece(newIndex) &&
      !this.squareHasPieceOfSameColor(newIndex)
    ) {
      indexes.push(newIndex);
    }
    newIndex = this._index + (this._piece.isBlack() ? 11 : -11);
    if (
      this._state.indexHasPiece(newIndex) &&
      !this.squareHasPieceOfSameColor(newIndex)
    ) {
      indexes.push(newIndex);
    }

    return indexes;
  }

  private kingMovement(): number[] {
    const directions: number[] = [-11, -10, -9, -1, 1, 9, 10, 11];
    const indexes: number[] = directions.map((direction: number) => {
      return this._index + direction
    });

    if (this._state.castleRights.allowedTo(CastleSide.QUEEN_SIDE, this._piece.color)) {
      indexes.push(this._index - 2);
    }
    if (this._state.castleRights.allowedTo(CastleSide.KING_SIDE, this._piece.color)) {
      indexes.push(this._index + 2);
    }

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

  private queenMovement(): number[] {
    const directions: number[] = [-1, -9, -10, -11, 1, 9, 10, 11];
    return this.createMovementForDirections(directions);
  }

  private createMovementForDirections(directions: number[]): number[] {
    return directions.flatMap((direction: number) => {
      const indexes: number[] = new Array<number>();
      return this.walk(this._index, indexes, direction);
    });
  }

  /**
   * Recursively walk all the squares in a direction (interval).
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

    if (this._state.indexHasPiece(newIndex)) {
      return indexes;
    }

    return this.walk(newIndex, indexes, direction);
  }

  private squareHasPieceOfSameColor(index: number): boolean {
    if (!this._state.indexHasPiece(index)) {
      return false;
    }

    return this._state.pieceOnIndex(index)?.color === this._piece.color
  }
}
export default MoveGenerator;