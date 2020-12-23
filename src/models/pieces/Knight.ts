import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Knight extends Piece {
  private static readonly _name: string = 'Knight';

  private static readonly _notation: string = 'N';

  constructor(color: ColorEnum) {
    super(color, Knight.pieceName, Knight.pieceNotation);
  }

  static get pieceName(): string {
    return this._name;
  }

  static get pieceNotation(): string {
    return this._notation;
  }

}
export default Knight;
