import GameStateHelper from '@/helpers/GameStateHelper';
import onBoardIndexes from './stub/OnBoardIndexes';

describe('GameStateHelper.ts', () => {
  it('can determine all indexes on chess Board', () => {
    onBoardIndexes.forEach((index: number) => {
      expect(GameStateHelper.indexIsOnBoard(index))
        .toBeTruthy;
    });
  });
});
