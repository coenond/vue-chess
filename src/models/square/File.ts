class File {
  private char: string;

  constructor(char: string) {
    this.char = char;
  }

  name(): string {
    return this.char;
  }

  static all(): Array<File> {
    return [
      new File('A'),
      new File('B'),
      new File('C'),
      new File('D'),
      new File('E'),
      new File('F'),
      new File('G'),
      new File('H'),
    ];
  }
}
export default File;
