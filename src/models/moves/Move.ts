import ColorEnum from "../common/ColorEnum";
import Piece from "../pieces/Piece";
import Square from "../square/Square";

export class Move {

  constructor(
    public readonly moveNumber: number,
    public readonly color: ColorEnum,
    public readonly originPosition: Square,
    public readonly destinationPosition: Square,
    public readonly piece: Piece,
    public readonly isCapture = false
  ) {
    this.originPosition = originPosition;
  }
}
