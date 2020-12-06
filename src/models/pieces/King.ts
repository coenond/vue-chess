import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class King extends Piece {
  private static readonly pieceName: string = 'King';

  private static readonly pieceNotation: string = 'k';

  constructor(color: ColorEnum) {
    super(color, King.pieceName, King.pieceNotation);
  }
}
export default King;
