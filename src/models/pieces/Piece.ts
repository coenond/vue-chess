import Color from '@/models/common/Color';

class Piece {
  private readonly baseUrl = '/src/assets/images/pieces/';

  private pieceColor: Color;

  private pieceName: string;

  private pieceInitial: string;

  constructor(
    color: Color,
    name: string,
    initial: string,
  ) {
    this.pieceColor = color;
    this.pieceName = name;
    this.pieceInitial = initial;
  }

  getColor(): Color {
    return this.pieceColor;
  }

  getName(): string {
    return this.pieceName;
  }

  getInitial(): string {
    return this.pieceInitial;
  }

  fileName(): string {
    return `${this.pieceName.toLocaleLowerCase()}_${this.pieceColor}.svg`;
  }
}
export default Piece;
