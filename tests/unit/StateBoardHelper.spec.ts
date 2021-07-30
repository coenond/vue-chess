import StateBoardHelper from '@/helpers/StateBoardHelper';
import Square from '@/models/square/Square';

describe('StateBoardHelper.ts', () => {

  it('can get index for square', () => {
    const a1: Square = Square.fromString('a1');
    const b2: Square = Square.fromString('b2');
    const c3: Square = Square.fromString('c3');
    const d4: Square = Square.fromString('d4');
    const e5: Square = Square.fromString('e5');
    const f6: Square = Square.fromString('f6');
    const g7: Square = Square.fromString('g7');
    const h8: Square = Square.fromString('h8');


    expect(StateBoardHelper.indexForSquare(a1)).toBe(91);
    expect(StateBoardHelper.indexForSquare(b2)).toBe(82);
    expect(StateBoardHelper.indexForSquare(c3)).toBe(73);
    expect(StateBoardHelper.indexForSquare(d4)).toBe(64);
    expect(StateBoardHelper.indexForSquare(e5)).toBe(55);
    expect(StateBoardHelper.indexForSquare(f6)).toBe(46);
    expect(StateBoardHelper.indexForSquare(g7)).toBe(37);
    expect(StateBoardHelper.indexForSquare(h8)).toBe(28);
  });

  it('can get square for index', () => {
    expect(StateBoardHelper.squareForIndex(21)).toBe('a8');
    expect(StateBoardHelper.squareForIndex(32)).toBe('b7');
    expect(StateBoardHelper.squareForIndex(43)).toBe('c6');
    expect(StateBoardHelper.squareForIndex(54)).toBe('d5');
    expect(StateBoardHelper.squareForIndex(65)).toBe('e4');
    expect(StateBoardHelper.squareForIndex(76)).toBe('f3');
    expect(StateBoardHelper.squareForIndex(87)).toBe('g2');
    expect(StateBoardHelper.squareForIndex(98)).toBe('h1');
  });

});
