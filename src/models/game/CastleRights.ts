import ColorEnum from "../common/ColorEnum";
import CastleSide from "./enum/CastleSides";

class CastleRights {

  private _whiteQueenSide: boolean;
  private _whiteKingSide: boolean;
  private _blackQueenSide: boolean;
  private _blackKingSide: boolean;

  constructor() {
    this._whiteQueenSide = true;
    this._whiteKingSide = true;
    this._blackQueenSide = true;
    this._blackKingSide = true;
  }

  allowedTo(side: CastleSide, color: ColorEnum): boolean {
    return side === CastleSide.KING_SIDE
      ? color === ColorEnum.White ? this._whiteKingSide : this._blackKingSide
      : color === ColorEnum.White ? this._whiteQueenSide : this._blackQueenSide;
  }

  removeFor(color: ColorEnum, side?: CastleSide): CastleRights {
    if (!side) {
      color === ColorEnum.White ? this.removeAllForWhite() : this.removeAllForBlack();
    } else {
      color === ColorEnum.White ? this.removeForWhite(side) : this.removeForBlack(side);
    }

    return this;
  }

  private removeAllForWhite(): void {
    this._whiteKingSide, this._whiteQueenSide = false;
  }

  private removeAllForBlack(): void {
    this._blackKingSide, this._blackQueenSide = false;
  }

  private removeForWhite(side: CastleSide): void {
    side === CastleSide.KING_SIDE
      ? this._whiteKingSide = false
      : this._whiteQueenSide = false;
  }

  private removeForBlack(side: CastleSide): void {
    side === CastleSide.KING_SIDE
      ? this._blackKingSide = false
      : this._blackQueenSide = false;
  }

}
export default CastleRights;
