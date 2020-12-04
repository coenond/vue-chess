import Piece from '@/models/pieces/Piece';
import Color from '@/models/common/Color';

class Pawn extends Piece {
  private static readonly pieceName: string = 'Pawn';

  private static readonly pieceInitials: string = '';

  constructor(color: Color) {
    super(color, Pawn.pieceName, Pawn.pieceInitials);
  }
}
export default Pawn;
