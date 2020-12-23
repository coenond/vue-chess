import Square from '@/models/square/Square';
import boardToState from './data/board-to-state.json';

interface SquareBased {
  [square: string]: number;
}

interface IndexBased {
  [index: number]: string;
}


class StateBoardHelper {
  static indexForSquare(square: Square): number {
    const data: SquareBased = boardToState;
    return data[square.name];
  }
  static squareForIndex(index: number): string {
    const data: IndexBased = Object.entries(boardToState)
      .reduce((obj, [key, value]) => ({ ...obj, [value]: key }), {});
    return data[index];
  }
}
export default StateBoardHelper;
