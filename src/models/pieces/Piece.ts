import ColorEnum from '@/models/common/ColorEnum';

class Piece {
  private pieceColor: ColorEnum;

  private pieceName: string;

  private pieceNotation: string;

  private pieceIdentifier: string;

  constructor(
    color: ColorEnum,
    name: string,
    notation: string,
  ) {
    this.pieceColor = color;
    this.pieceName = name;
    this.pieceNotation = notation;
    this.pieceIdentifier = this.createId();
  }

  color(): ColorEnum {
    return this.pieceColor;
  }

  isBlack(): boolean {
    return this.pieceColor === ColorEnum.Black;
  }

  name(): string {
    return this.pieceName;
  }

  notation(): string {
    return this.pieceNotation;
  }

  id(): string {
    return this.pieceIdentifier;
  }

  imgFile(): string {
    return `${this.pieceName.toLocaleLowerCase()}_${this.pieceColor}.svg`;
  }

  private createId(): string {
    const color = this.pieceColor.charAt(0).toLowerCase();
    return `${color}${this.pieceNotation}`;
  }
}
export default Piece;
