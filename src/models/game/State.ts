import GameStateHelper from '@/helpers/GameStateHelper';
import NewGameHelper from '@/helpers/NewGameHelper';
import StateBoardHelper from '@/helpers/StateBoardHelper';
import Piece from '@/models/pieces/Piece';
import Square from '@/models/square/Square';

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

  constructor(state: Array<Piece | null>) {
    this._gameArray = state;
  }

  static newGame(): State {
    return NewGameHelper.create();
  }

  static size(): number {
    return this.stateSize;
  }

  get gameArray(): Array<Piece | null>{
    return this._gameArray;
  }

  pieceOnSquare(square: Square): Piece | null {
    const index: number = StateBoardHelper.indexForSquare(square);
    return this.gameArray[index];
  }

  squareHasPiece(square: Square): boolean {
    const index: number = StateBoardHelper.indexForSquare(square);
    return !!this.gameArray[index];
  }

  offBoardIndexes(): number[] {
    return GameStateHelper.filterOffBoardIndexes(State.allIndexes);
  }

  onBoardIndexes(): number[] {
    return GameStateHelper.filterOnBoardIndexes(State.allIndexes);
  }

  isEmpty(): boolean {
    return this.gameArray.every(index => index === null);
  }

  movePiece(piece: Piece, origin: Square, destination: Square): State {
    const originIndex: number = StateBoardHelper.indexForSquare(origin);
    const destinationIndex: number = StateBoardHelper.indexForSquare(destination);
    const state: Array<Piece | null> = this.gameArray;

    state[originIndex] = null;
    state[destinationIndex] = piece;
    return new State(state);
  }

  static get allIndexes(): number[] {
    return Array.from(Array(State.size()), (x, index) => index + 1);
  }

  static emptyState(): State {
    return new State(Array<null>(State.size()));
  }
}
export default State;
