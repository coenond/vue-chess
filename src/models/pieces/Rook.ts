import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Rook extends Piece {
  private static readonly _pieceName: string = 'Rook';

  private static readonly _pieceNotation: string = 'R';

  constructor(color: ColorEnum) {
    super(color, Rook.pieceName, Rook.pieceNotation);
  }

  static get pieceName(): string {
    return this._pieceName;
  }

  static get pieceNotation(): string {
    return this._pieceNotation;
  }
}
export default Rook;
