import ColorEnum from '@/models/common/ColorEnum';

class Piece {
  private pieceColor: ColorEnum;

  private pieceName: string;

  private pieceNotation: string;

  constructor(
    color: ColorEnum,
    name: string,
    notation: string,
  ) {
    this.pieceColor = color;
    this.pieceName = name;
    this.pieceNotation = notation;
  }

  color(): ColorEnum {
    return this.pieceColor;
  }

  name(): string {
    return this.pieceName;
  }

  notation(): string {
    return this.pieceNotation;
  }

  // id(): string {
  //   return this.pieceIdentifier;
  // }

  imgFile(): string {
    return `${this.pieceName.toLocaleLowerCase()}_${this.pieceColor}.svg`;
  }
}
export default Piece;
