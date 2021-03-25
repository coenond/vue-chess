import NewGameHelper from '@/helpers/NewGameHelper';
import State from '@/models/game/State';
import Square from '@/models/square/Square';
import File from '@/models/square/File';
import Rank from '@/models/square/Rank';

describe('NewGameHelper.ts', () => {
  const newGame: State = NewGameHelper.create();
  
  it('Should have all on board indexes', () => {
    expect(newGame.onBoardIndexes.length).toBe(64);
  });

  it('should leave middle ranks empty', () => {
    const rank3: Square[] = File.all.map((file: File) => {
      return new Square(file, new Rank('3'));
    });
    const rank4: Square[] = File.all.map((file: File) => {
      return new Square(file, new Rank('4'));
    });
    const rank5: Square[] = File.all.map((file: File) => {
      return new Square(file, new Rank('5'));
    });
    const rank6: Square[] = File.all.map((file: File) => {
      return new Square(file, new Rank('6'));
    });
    const allEmptySquares: Square [] = rank3.concat(rank4, rank5, rank6);

    allEmptySquares.forEach((square: Square) => {
      expect(newGame.squareHasPiece(square)).toBeFalsy();
    });
  });

  it('should should have filled ranks', () => {
    const rank1: Square[] = File.all.map((file: File) => {
      return new Square(file, new Rank('1'));
    });
    const rank2: Square[] = File.all.map((file: File) => {
      return new Square(file, new Rank('2'));
    });
    const rank7: Square[] = File.all.map((file: File) => {
      return new Square(file, new Rank('7'));
    });
    const rank8: Square[] = File.all.map((file: File) => {
      return new Square(file, new Rank('8'));
    });
    const allFilledSquares: Square [] = rank1.concat(rank2, rank7, rank8);

    allFilledSquares.forEach((square: Square) => {
      expect(newGame.squareHasPiece(square)).toBeTruthy();
    });
  });
});
