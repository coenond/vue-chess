import File from '@/models/square/File';
import Rank from '@/models/square/Rank';

class Square {
  private _file: File;

  private _rank: Rank;

  constructor(file: File, rank: Rank) {
    this._file = file;
    this._rank = rank;
  }

  get file(): File {
    return this._file;
  }

  get rank(): Rank {
    return this._rank;
  }

  get name(): string {
    return `${this.file.name}${this.rank.name}`;
  }

  static all(): Square[] {
    // Reverse the ranks for the right board layout.
    const ranks: Rank[] = Rank.all.reverse();
    const files: File[] = File.all;
    return ranks.flatMap((r: Rank): Square[] => files.map((f: File): Square => new Square(f, r)));
  }

  static fromString(position: string): Square {
    const file: File = new File(position.split('')[0]);
    const rank: Rank = new Rank(position.split('')[1]);
    return new Square(file, rank);
  }
}
export default Square;
