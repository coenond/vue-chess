import SquareColorHelper from '@/helpers/SquareColorHelper';
import File from '@/models/square/File';
import Rank from '@/models/square/Rank';
import Color from '@/models/square/Color';

describe('SquareColorHelper.ts', () => {
  it('can calculte a black squares', () => {
    const file = new File('A');
    const rank = new Rank('1');

    expect(SquareColorHelper.getColorForSignature(file, rank))
      .toBe(Color.Black);
  });
  it('can calculte a white squares', () => {
    const file = new File('B');
    const rank = new Rank('1');

    expect(SquareColorHelper.getColorForSignature(file, rank))
      .toBe(Color.White);
  });
});
