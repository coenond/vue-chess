import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Pawn extends Piece {
  private static readonly _name: string = 'Pawn';

  private static readonly _notation: string = '';

  constructor(color: ColorEnum) {
    super(color, Pawn._name, Pawn._notation);
  }

  static get pieceName(): string {
    return this._name;
  }

  static get pieceNotation(): string {
    return this._notation;
  }
}
export default Pawn;
