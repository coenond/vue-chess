import ColorEnum from "../common/ColorEnum";
import Piece from "../pieces/Piece";
import Square from "../square/Square";

export default class Move {

  constructor(
    public readonly moveNumber: number,
    public readonly color: ColorEnum,
    public readonly originPosition: Square,
    public readonly destinationPosition: Square,
    public readonly piece: Piece,
    public readonly isCapture: boolean
  ) {
    this.moveNumber = moveNumber;
    this.color = color;
    this.originPosition = originPosition;
    this.destinationPosition = destinationPosition;
    this.piece = piece;
    this.isCapture = isCapture;
  }

  /**
   * @todo add Castling notation
   * @todo add capture notation for pawns
   * @todo add Check notation
   * @todo add Checkmate notation
   * @todo add which rook/knight/queen if necessary
   */
  get notation(): string {
    const captureNotation = this.isCapture ? 'x' : '';
    return `${this.piece.notation}${captureNotation}${this.destinationPosition.name}`;
  }
}
