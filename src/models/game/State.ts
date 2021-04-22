import CastleHelper from '@/helpers/CastleHelper';
import GameStateHelper from '@/helpers/GameStateHelper';
import NewGameHelper from '@/helpers/NewGameHelper';
import StateBoardHelper from '@/helpers/StateBoardHelper';
import Piece from '@/models/pieces/Piece';
import Square from '@/models/square/Square';
import ColorEnum from '../common/ColorEnum';
import { King, Rook } from '../pieces';
import CastleRights from './CastleRights';
import CastleSide from './enum/CastleSides';

/**
 * The Game State is hold in an Array with the size of 120.
 *   -> (12 Ranks and 10 Files)
 * The board (size of 64) is in the middle of the array.
 * There are 2 rows used on each side of the board for vertical padding,
 * and 1 row on each side for horizontal padding.
 * 
 * The "padding rows" are used to as "off-board" locations.
 * This is needed for legal-move generation.
 */
class State {
  private static readonly stateSize: number = 120;

  private _gameArray: Array<Piece | null>;

  private _lastMovedColor: ColorEnum | null;

  private _castleRights: CastleRights;

  // private _moves: Array<Move | null>;

  constructor(state: Array<Piece | null>) {
    this._gameArray = state;
    this._lastMovedColor = null;
    this._castleRights = new CastleRights();
    // this._moves = Array<null>;
  }

  static newGame(): State {
    return NewGameHelper.create();
  }

  static size(): number {
    return this.stateSize;
  }

  get gameArray(): Array<Piece | null> {
    return this._gameArray;
  }

  get lastMovedColor(): ColorEnum | null {
    return this._lastMovedColor;
  }

  get castleRights(): CastleRights {
    return this._castleRights;
  }

  pieceOnSquare(square: Square): Piece | null {
    const index: number = StateBoardHelper.indexForSquare(square);
    return this.gameArray[index];
  }

  pieceOnIndex(index: number): Piece | null {
    return this.gameArray[index];
  }

  squareHasPiece(square: Square): boolean {
    const index: number = StateBoardHelper.indexForSquare(square);
    return !!this.gameArray[index];
  }

  indexHasPiece(index: number): boolean {
    return !!this.gameArray[index];
  }

  get offBoardIndexes(): number[] {
    return GameStateHelper.filterOffBoardIndexes(State.allIndexes);
  }

  get onBoardIndexes(): number[] {
    return GameStateHelper.filterOnBoardIndexes(State.allIndexes);
  }

  get isEmpty(): boolean {
    return this.gameArray.every(index => index === null);
  }

  movePiece(piece: Piece, origin: Square, destination: Square): State {
    const originIndex: number = StateBoardHelper.indexForSquare(origin);
    const destinationIndex: number = StateBoardHelper.indexForSquare(destination);
    let gameArray: Array<Piece | null> = this._gameArray;

    this._lastMovedColor = piece.color;

    if ([King.name, Rook.name].includes(piece.name)) {
      this._castleRights = this.removeCastleRights(piece, origin);
    }

    if (CastleHelper.isCastlingMove(piece, origin, destination)) {
      gameArray = CastleHelper.moveRook(this, destination);
    }

    gameArray[originIndex] = null;
    gameArray[destinationIndex] = piece;

    return this;
  }

  private removeCastleRights(piece: Piece, position: Square): CastleRights {
    if (piece.name === King.name) {
      return this._castleRights.removeFor(piece.color);
    }

    const side: CastleSide = position.file.name === 'a'
      ? CastleSide.QUEEN_SIDE : CastleSide.KING_SIDE
    
    return this._castleRights.removeFor(piece.color, side);
  }

  static get allIndexes(): number[] {
    return Array.from(Array(State.size()), (x, index) => index + 1);
  }

  static get emptyState(): State {
    return new State(Array<null>(State.size()));
  }
}
export default State;
