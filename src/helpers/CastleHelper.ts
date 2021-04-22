import ColorEnum from "@/models/common/ColorEnum";
import CastleSide from "@/models/game/enum/CastleSides";
import State from "@/models/game/State";
import { King } from "@/models/pieces";
import Piece from "@/models/pieces/Piece";
import Square from "@/models/square/Square";

class CastleHelper {

  static canCastle(
    state: State,
    color: ColorEnum,
    side: CastleSide
  ): boolean {
    return state.castleRights.allowedTo(side, color)
      && !this.hasPiecesInBetween(state, color, side);
  }

  static isCastlingMove(piece: Piece, origin: Square, destination: Square): boolean {
    if (piece.name !== King.name) {
      return false;
    }

    return Math.abs(origin.index - destination.index) === 2;
  }

  static moveRook(state: State, destination: Square): Array<Piece | null>
  {
    const gameArray: Array<Piece | null> = state.gameArray;
    const squareString: string = destination.name;

    let originSquare: Square;  
    let destinationSquare: Square;  
    let rook: Piece | null;

    if (this.castlingSide(destination) === CastleSide.QUEEN_SIDE) {
      originSquare = Square.fromString('a' + squareString.substr(1))
      destinationSquare = Square.fromString('d' + squareString.substr(1))
      rook = state.pieceOnSquare(originSquare);
    } else {
      originSquare = Square.fromString('h' + squareString.substr(1))
      destinationSquare = Square.fromString('f' + squareString.substr(1))
      rook = state.pieceOnSquare(originSquare);
    }

    gameArray[originSquare.index] = null;
    gameArray[destinationSquare.index] = rook;

    return gameArray;
  }

  static castlingSide(destination: Square): CastleSide
  {
    return destination.file.name === 'g'
      ? CastleSide.KING_SIDE : CastleSide.QUEEN_SIDE;
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
