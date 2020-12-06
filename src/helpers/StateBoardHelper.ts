import Square from '@/models/square/Square';
import boardToState from './data/board-to-state.json';

interface DataObj {
  [square: string]: number;
}


class StateBoardHelper {
  static indexForSquare(square: Square): number {
    const data: DataObj = boardToState;
    return data[square.name()];
  }
}
export default StateBoardHelper;
