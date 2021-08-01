class Rank {

  private static readonly allChars: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

  private _char: string;

  constructor(char: string) {
    this._char = char;
  }

  get name(): string {
    return this._char;
  }

  toNumber(): number {
    return +this._char;
  }

  static get all(): Rank[] {
    return Rank.allChars.map((char: string): Rank => new Rank(char));
  }
}
export default Rank;
