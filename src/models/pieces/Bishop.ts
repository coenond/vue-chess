import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Bishop extends Piece {
  private static readonly _name: string = 'Bishop';

  private static readonly _notation: string = 'B';

  constructor(color: ColorEnum) {
    super(color, Bishop.pieceName, Bishop.pieceNotation);
  }

  static get pieceName(): string {
    return this._name;
  }

  static get pieceNotation(): string {
    return this._notation;
  }
}
export default Bishop;
