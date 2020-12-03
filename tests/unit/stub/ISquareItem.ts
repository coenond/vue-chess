import File from '@/models/square/File';
import Rank from '@/models/square/Rank';

export interface SquareItem {
  rank: Rank;
  file: File;
  color: string;
}
