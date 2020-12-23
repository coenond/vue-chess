import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Queen extends Piece {
  private static readonly _name: string = 'Queen';

  private static readonly _notation: string = 'Q';

  constructor(color: ColorEnum) {
    super(color, Queen.pieceName, Queen.pieceNotation);
  }

  static get pieceName(): string {
    return this._name;
  }

  static get pieceNotation(): string {
    return this._notation;
  }
}
export default Queen;
