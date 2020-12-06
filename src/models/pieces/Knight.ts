import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Knight extends Piece {
  private static readonly pieceName: string = 'Knight';

  private static readonly pieceNotation: string = 'n';

  constructor(color: ColorEnum) {
    super(color, Knight.pieceName, Knight.pieceNotation);
  }
}
export default Knight;
