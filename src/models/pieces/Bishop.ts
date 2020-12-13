import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Bishop extends Piece {
  private static readonly _pieceName: string = 'Bishop';

  private static readonly _pieceNotation: string = 'b';

  constructor(color: ColorEnum) {
    super(color, Bishop.pieceName, Bishop.pieceNotation);
  }

  static get pieceName(): string {
    return this._pieceName;
  }

  static get pieceNotation(): string {
    return this._pieceNotation;
  }
}
export default Bishop;
