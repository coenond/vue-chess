import File from '@/models/square/File';
import Rank from '@/models/square/Rank';

class Square {
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

  name(): string {
    return `${this.rank.name()}${this.file.name()}`;
  }
}
export default Square;
