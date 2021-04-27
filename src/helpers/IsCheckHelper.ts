/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ColorEnum from "@/models/common/ColorEnum";
import State from "@/models/game/State";
import { King } from "@/models/pieces";
import Piece from "@/models/pieces/Piece";
import allVision from "./AllVision";
import getOppositeColor from "./OppositeColorHelper";

/**
 * Checks if the king is under check.
 * Return null if there is there is no check.
 * Return the kings position when under check.
 * 
 * @param state 
 * @param lastMovedColor 
 * @returns 
 */
export default function setsCheck(
  state: State,
  lastMovedColor: ColorEnum
): number | null {
  const vision: number[] = allVision(state, lastMovedColor);
  const oppositeColor: ColorEnum = getOppositeColor(lastMovedColor);

  const kingPosition: number = state.gameArray.map((piece: Piece | null, i: number) => {
    if (piece && piece.color === oppositeColor && piece.name === King.name) {
      return i;
    }
  }).filter(i => i != null).map(i => i!)[0];

  return vision.includes(kingPosition) ? kingPosition : null;
}