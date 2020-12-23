import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class King extends Piece {
  private static readonly _name: string = 'King';

  private static readonly _notation: string = 'K';

  constructor(color: ColorEnum) {
    super(color, King.pieceName, King.pieceNotation);
  }

  static get pieceName(): string {
    return this._name;
  }

  static get pieceNotation(): string {
    return this._notation;
  }
}
export default King;
