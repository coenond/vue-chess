import SquareColorHelper from '@/helpers/SquareColorHelper';
import Square from '@/models/square/Square';
import BoardSquares from './stub/BoardSquares';
import { SquareItem } from './stub/ISquareItem';

const fullBoard: SquareItem[] = BoardSquares.fullBoard();

describe('SquareColorHelper.ts', () => {
  it('can calculte all square colors', () => {
    fullBoard.forEach((item: SquareItem) => {
      const square: Square = new Square(item.file, item.rank);
      expect(SquareColorHelper.getColorForSquare(square))
        .toBe(item.color);
    });
  });

  it('can calculte all square colors on siqnature', () => {
    fullBoard.forEach((item: SquareItem) => {
      expect(SquareColorHelper.getColorForSignature(item.file, item.rank))
        .toBe(item.color);
    });
  });
});
