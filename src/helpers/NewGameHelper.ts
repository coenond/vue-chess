import State from '@/models/game/State';
import StateBoardHelper from '@/helpers/StateBoardHelper';
import {
  King,
  Queen,
  Rook,
  Bishop,
  Knight,
  Pawn,
} from '@/models/pieces';
import Square from '@/models/square/Square';
import File from '@/models/square/File';
import Rank from '@/models/square/Rank';
import Piece from '@/models/pieces/Piece';
import ColorEnum from '@/models/common/ColorEnum';

interface LayoutPair {
  square: Square;
  piece: Piece;
}

class NewGameHelper {
  static create(): State {
    const gameState = new Array<Piece | null>(State.size());
    
    const allPositions: Array<LayoutPair> = NewGameHelper.allPositions();
    allPositions.forEach((pos: LayoutPair) => {
      const index: number = StateBoardHelper.indexForSquare(pos.square);
      gameState[index] = pos.piece;
    })

    return new State(gameState);
  }
  
  private static allPositions(): Array<LayoutPair> {
    const whitePawns: Array<LayoutPair> = NewGameHelper.pawnPositionFor(ColorEnum.White);
    const blackPawns: Array<LayoutPair> = NewGameHelper.pawnPositionFor(ColorEnum.Black);
    const whitePieces: Array<LayoutPair> = NewGameHelper.piecePoistionFor(ColorEnum.White);
    const blackPieces: Array<LayoutPair> = NewGameHelper.piecePoistionFor(ColorEnum.Black);

    return whitePawns.concat(blackPawns, whitePieces, blackPieces);
  }

  /**
   * For each color on the board the pieces are on the same file.
   * The only difference is the rank. All the major and minor
   * white pieces (+ King and Queen) are on rank 1, for black that's rank 8.
   * 
   * @param color
   */
  private static piecePoistionFor(color: ColorEnum): Array<LayoutPair> {
    const rank: Rank = color === ColorEnum.White ? new Rank("1") : new Rank("8");
    return [
      {
        square: new Square(new File("a"), rank),
        piece: new Rook(color),
      },
      {
        square: new Square(new File("b"), rank),
        piece: new Knight(color),
      },
      {
        square: new Square(new File("c"), rank),
        piece: new Bishop(color),
      },
      {
        square: new Square(new File("d"), rank),
        piece: new Queen(color),
      },
      {
        square: new Square(new File("e"), rank),
        piece: new King(color),
      },
      {
        square: new Square(new File("f"), rank),
        piece: new Bishop(color),
      },
      {
        square: new Square(new File("g"), rank),
        piece: new Knight(color),
      },
      {
        square: new Square(new File("h"), rank),
        piece: new Rook(color),
      },
    ];
  }

  /**
   * In a new game. THe pawns are spread over all the files.
   * All the white pawns are set on rank 2, and the black pawns on rank 7.
   * 
   * @param color
   */
  private static pawnPositionFor(color: ColorEnum): Array<LayoutPair> {
    const rank: Rank = color === ColorEnum.White ? new Rank("2") : new Rank("7");
    return File.all.map((file: File) => {
      return {
        square: new Square(file, rank),
        piece: new Pawn(color),
      };
    });
  }
}
export default NewGameHelper;
