import GameStateHelper from '@/helpers/GameStateHelper';
import NewGameHelper from '@/helpers/NewGameHelper';
import Piece from '@/models/pieces/Piece';

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

  private gameArray: Array<Piece | null>;

  constructor(state: Array<Piece | null>) {
    this.gameArray = state;
  }

  static newGame(): State {
    return NewGameHelper.create();
  }

  static size(): number {
    return this.stateSize;
  }

  offBoardIndexes(): Array<number> {
    return this.allIndexes().filter((index: number) => {
      return GameStateHelper.indexIsOffBoard(index);
    });
  }

  onBoardIndexes(): Array<number> {
    return this.allIndexes().filter((index: number) => {
      return GameStateHelper.indexIsOnBoard(index);
    });
  }

  private allIndexes(): Array<number> {
    return Array.from(Array(State.size()), (x, index) => index + 1);
  }

  static emptyState(): Array<Piece | null> {
    return new Array<null>(State.size());
  }
}
export default State;
