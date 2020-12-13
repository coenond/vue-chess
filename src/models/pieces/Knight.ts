import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Knight extends Piece {
  private static readonly _pieceName: string = 'Knight';

  private static readonly _pieceNotation: string = 'n';

  constructor(color: ColorEnum) {
    super(color, Knight.pieceName, Knight.pieceNotation);
  }

  static get pieceName(): string {
    return this._pieceName;
  }

  static get pieceNotation(): string {
    return this._pieceNotation;
  }

}
export default Knight;
