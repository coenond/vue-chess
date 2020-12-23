import ColorEnum from '@/models/common/ColorEnum';

class Piece {
  private _color: ColorEnum;

  private _name: string;

  private _notation: string;

  private _identifier: string;

  constructor(
    color: ColorEnum,
    name: string,
    notation: string,
  ) {
    this._color = color;
    this._name = name;
    this._notation = notation;
    this._identifier = this.createId();
  }

  get color(): ColorEnum {
    return this._color;
  }

  get name(): string {
    return this._name;
  }

  get notation(): string {
    return this._notation;
  }

  get id(): string {
    return this._identifier;
  }

  get imgFile(): string {
    return `${this._name.toLocaleLowerCase()}_${this._color}.svg`;
  }

  isBlack(): boolean {
    return this._color === ColorEnum.Black;
  }

  private createId(): string {
    const color = this._color.charAt(0).toLowerCase();
    return `${color}${this._notation}`;
  }
}
export default Piece;
