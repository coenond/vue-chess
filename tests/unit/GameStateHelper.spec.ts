import GameStateHelper from '@/helpers/GameStateHelper';
import State from '@/models/game/State';
import onBoardIndexes from './stub/OnBoardIndexes';

describe('GameStateHelper.ts', () => {

  it('can determine all indexes on chess Board', () => {
    onBoardIndexes.forEach((index: number) => {
      expect(GameStateHelper.indexIsOnBoard(index))
        .toBeTruthy;
    });
  });

  it('can filter on board indexes', () => {
    const allIndexes: number[] = State.allIndexes;
    expect(GameStateHelper.filterOnBoardIndexes(allIndexes).length).toBe(64);
  });
});
