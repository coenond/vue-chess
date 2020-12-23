import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Rook extends Piece {
  private static readonly _name: string = 'Rook';

  private static readonly _notation: string = 'R';

  constructor(color: ColorEnum) {
    super(color, Rook.pieceName, Rook.pieceNotation);
  }

  static get pieceName(): string {
    return this._name;
  }

  static get pieceNotation(): string {
    return this._notation;
  }
}
export default Rook;
