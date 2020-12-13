import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Pawn extends Piece {
  private static readonly _pieceName: string = 'Pawn';

  private static readonly _pieceNotation: string = 'p';

  constructor(color: ColorEnum) {
    super(color, Pawn._pieceName, Pawn._pieceNotation);
  }

  static get pieceName(): string {
    return this._pieceName;
  }

  static get pieceNotation(): string {
    return this._pieceNotation;
  }
}
export default Pawn;
