import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Queen extends Piece {
  private static readonly pieceName: string = 'Queen';

  private static readonly pieceNotation: string = 'q';

  constructor(color: ColorEnum) {
    super(color, Queen.pieceName, Queen.pieceNotation);
  }
}
export default Queen;
