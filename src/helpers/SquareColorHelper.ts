import Square from '@/models/square/Square';
import File from '@/models/square/File';
import Rank from '@/models/square/Rank';
import Color from '@/models/square/Color';

class SquareColorHelper {
  static getColorForSquare(square: Square): Color {
    return this.isBlack(square.getFile(), square.getRank())
      ? Color.Black : Color.White;
  }

  static getColorForSignature(file: File, rank: Rank): Color {
    return this.isBlack(file, rank)
      ? Color.Black : Color.White;
  }

  private static isBlack(file: File, rank: Rank): boolean {
    return (
      ['A', 'C', 'E', 'G'].includes(file.name())
      && ['1', '3', '5', '7'].includes(rank.name())
    ) || (
      ['B', 'D', 'F', 'H'].includes(file.name())
      && ['2', '4', '6', '8'].includes(rank.name())
    );
  }
}
export default SquareColorHelper;
