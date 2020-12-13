class GameStateHelper {

  static indexIsOffBoard(index: number): boolean {
    if (index < 21) return true;
    if (index > 98) return true;
    if (index % 10 === 0) return true;
    if (index % 10 === 9) return true;

    return false
  }

  static indexIsOnBoard(index: number): boolean {
    return !GameStateHelper.indexIsOffBoard(index);
  }

  static filterOnBoardIndexes(indexes: number[]): number[] {
    return indexes.filter((i: number) => GameStateHelper.indexIsOnBoard(i));
  }

  static filterOffBoardIndexes(indexes: number[]): number[] {
    return indexes.filter((i: number) => GameStateHelper.indexIsOffBoard(i));
  }
}
export default GameStateHelper;
