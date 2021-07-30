/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ColorEnum from "@/models/common/ColorEnum";
import State from "@/models/game/State";
import { King } from "@/models/pieces";
import Piece from "@/models/pieces/Piece";
import allVision from "./AllVision";
import getOppositeColor from "./OppositeColorHelper";
import _ from 'lodash';

/**
 * Checks if the king is under check.
 * Return null if not checked check.
 * Return the kings position when under check.
 * 
 * @param state 
 * @param lastMovedColor 
 * @returns 
 */
export default function filterLegalMoves(
  state: State,
  currentPieceIndex: number,
  positions: number[],
  colorToMove: ColorEnum // black
): number[] {
  return positions.filter((index: number) => {
    const clonedState = _.cloneDeep(state);
    const hypotheticalState = clonedState.hypotheticalMove(currentPieceIndex, index);
    const opponentsVision: number[] = allVision(hypotheticalState, getOppositeColor(colorToMove));


    const kingPosition: number = hypotheticalState.gameArray.map((piece: Piece | null, i: number) => {
      if (piece?.color === colorToMove && piece.name === King.name) {
        return i;
      }
    }).filter(i => i != null).map(i => i!)[0];

    return !opponentsVision.includes(kingPosition);
  });
}