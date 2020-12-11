import StateBoardHelper from '@/helpers/StateBoardHelper';
import Square from '@/models/square/Square';

describe('StateBoardHelper.ts', () => {
  it('can get index for square', () => {
    const a1: Square = Square.fromString('A1');
    const b2: Square = Square.fromString('B2');
    const c3: Square = Square.fromString('C3');
    const d4: Square = Square.fromString('D4');
    const e5: Square = Square.fromString('E5');
    const f6: Square = Square.fromString('F6');
    const g7: Square = Square.fromString('G7');
    const h8: Square = Square.fromString('H8');


    expect(StateBoardHelper.indexForSquare(a1)).toBe(91);
    expect(StateBoardHelper.indexForSquare(b2)).toBe(82);
    expect(StateBoardHelper.indexForSquare(c3)).toBe(73);
    expect(StateBoardHelper.indexForSquare(d4)).toBe(64);
    expect(StateBoardHelper.indexForSquare(e5)).toBe(55);
    expect(StateBoardHelper.indexForSquare(f6)).toBe(46);
    expect(StateBoardHelper.indexForSquare(g7)).toBe(37);
    expect(StateBoardHelper.indexForSquare(h8)).toBe(28);
  });
});
