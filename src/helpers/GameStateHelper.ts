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
}
export default GameStateHelper;
