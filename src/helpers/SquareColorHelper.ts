import Square from '@/models/square/Square';
import File from '@/models/square/File';
import Rank from '@/models/square/Rank';
import ColorEnum from '@/models/common/ColorEnum';

class SquareColorHelper {
  static getColorForSquare(square: Square): ColorEnum {
    return SquareColorHelper.getColorForSignature(square.file, square.rank);
  }

  static getColorForSignature(file: File, rank: Rank): ColorEnum {
    return this.isBlack(file, rank)
      ? ColorEnum.Black : ColorEnum.White
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
