import ColorEnum from "@/models/common/ColorEnum";
import MoveGenerator from "@/models/game/MoveGenerator";
import State from "@/models/game/State";
import Piece from "@/models/pieces/Piece";

export default function allVision(state: State, color: ColorEnum): number[] {
  const allIndexes = state.gameArray.flatMap((piece: Piece | null, index: number) => {
    if (!piece || piece.color !== color) { return; }

    const generator = new MoveGenerator(piece, index, state);
    return generator.allPositions;
  });

  const uniqueIndexes = [... new Set(allIndexes)];

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return uniqueIndexes.filter(i => i != null).map(i => i!);
}
