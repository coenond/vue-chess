import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class King extends Piece {
  private static readonly _pieceName: string = 'King';

  private static readonly _pieceNotation: string = 'K';

  constructor(color: ColorEnum) {
    super(color, King.pieceName, King.pieceNotation);
  }

  static get pieceName(): string {
    return this._pieceName;
  }

  static get pieceNotation(): string {
    return this._pieceNotation;
  }
}
export default King;
