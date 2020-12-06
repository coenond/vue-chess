import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

class Pawn extends Piece {
  private static readonly pieceName: string = 'Pawn';

  private static readonly pieceNotation: string = 'p';

  constructor(color: ColorEnum) {
    super(color, Pawn.pieceName, Pawn.pieceNotation);
  }
}
export default Pawn;
