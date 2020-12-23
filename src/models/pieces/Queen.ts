import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Queen extends Piece {
  private static readonly _pieceName: string = 'Queen';

  private static readonly _pieceNotation: string = 'Q';

  constructor(color: ColorEnum) {
    super(color, Queen.pieceName, Queen.pieceNotation);
  }

  static get pieceName(): string {
    return this._pieceName;
  }

  static get pieceNotation(): string {
    return this._pieceNotation;
  }
}
export default Queen;
