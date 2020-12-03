import File from '@/models/square/File';
import Rank from '@/models/square/Rank';
import { Squares } from '@/models/square/ISquare';

class Square implements Squares {
  private file: File;

  private rank: Rank;

  constructor(file: File, rank: Rank) {
    this.file = file;
    this.rank = rank;
  }

  getFile(): File {
    return this.file;
  }

  getRank(): Rank {
    return this.rank;
  }

  static all(): Square[] {
    // Reverse the ranks for the right board layout.
    const ranks: Rank[] = Rank.all().reverse();
    const files: File[] = File.all();
    return ranks.flatMap((r: Rank): Square[] => files.map((f: File): Square => new Square(f, r)));
  }

  name(): string {
    return `${this.file.name()}${this.rank.name()}`;
  }
}
export default Square;
