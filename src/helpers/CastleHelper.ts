import ColorEnum from "@/models/common/ColorEnum";
import CastleRights from "@/models/game/CastleRights";
import CastleSide from "@/models/game/enum/CastleSides";
import State from "@/models/game/State";
import Rank from "@/models/square/Rank";
import Square from "@/models/square/Square";

class CastleHelper {

  static canCastle(
    state: State,
    castleRights: CastleRights,
    color: ColorEnum,
    side: CastleSide
  ): boolean {
    if (castleRights.allowedTo(side, color)) {
      return false;
    }

    if (this.hasPiecesInBetween(state, color, side)) {
      return false;
    }

    return true;
  }

  private static hasPiecesInBetween(
    state: State,
    color: ColorEnum,
    side: CastleSide
  ): boolean {
    return side === CastleSide.KING_SIDE
      ? color === ColorEnum.White 
        ? this.whiteKingSideHasPiece(state) : this.blackKingSideHasPiece(state)
      : color === ColorEnum.White
        ? this.whiteQueenSideHasPiece(state) : this.blackQueenSideHasPiece(state);
  }

  private static whiteQueenSideHasPiece(state: State): boolean
  {
    const squares: Array<Square> = [
      Square.fromString('b1'),
      Square.fromString('c1'),
      Square.fromString('d1'),
    ];
    return squares.some((square: Square) => state.squareHasPiece(square));
  }

  private static whiteKingSideHasPiece(state: State): boolean
  {
    const squares: Array<Square> = [
      Square.fromString('f1'),
      Square.fromString('g1'),
    ];
    return squares.some((square: Square) => state.squareHasPiece(square));
  }

  private static blackQueenSideHasPiece(state: State): boolean
  {
    const squares: Array<Square> = [
      Square.fromString('b8'),
      Square.fromString('c8'),
      Square.fromString('d8'),
    ];
    return squares.some((square: Square) => state.squareHasPiece(square));
  }

  private static blackKingSideHasPiece(state: State): boolean
  {
    const squares: Array<Square> = [
      Square.fromString('f8'),
      Square.fromString('g8'),
    ];
    return squares.some((square: Square) => state.squareHasPiece(square));
  }

}
export default CastleHelper;
