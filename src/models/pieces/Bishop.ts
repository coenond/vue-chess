import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Bishop extends Piece {
  private static readonly pieceName: string = 'Bishop';

  private static readonly pieceNotation: string = 'b';

  constructor(color: ColorEnum) {
    super(color, Bishop.pieceName, Bishop.pieceNotation);
  }
}
export default Bishop;
