class File {

  private static readonly allChars: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  private char: string;

  constructor(char: string) {
    this.char = char;
  }

  get name(): string {
    return this.char;
  }

  static get all(): File[] {
    return File.allChars.map((char: string): File => new File(char));
  }
} 
export default File;
