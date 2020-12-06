import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Rook extends Piece {
  private static readonly pieceName: string = 'Rook';

  private static readonly pieceNotation: string = 'r';

  constructor(color: ColorEnum) {
    super(color, Rook.pieceName, Rook.pieceNotation);
  }
}
export default Rook;
