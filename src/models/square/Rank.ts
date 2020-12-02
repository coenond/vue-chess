class Rank {
  private char: string;

  constructor(char: string) {
    this.char = char;
  }

  name(): string {
    return this.char;
  }

  toNumber(): number {
    return +this.char;
  }

  static all(): Array<Rank> {
    return [
      new Rank('1'),
      new Rank('2'),
      new Rank('3'),
      new Rank('4'),
      new Rank('5'),
      new Rank('6'),
      new Rank('7'),
      new Rank('8'),
    ];
  }
}
export default Rank;
