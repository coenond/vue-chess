<template>
  <div
    class="square"
    :class="squareClass">
    <piece
      v-if="pieceOnSquare"
      :piece-obj="pieceOnSquare" />
    <div
      v-if="firstFile"
      class="square__annotation square__annotation__file">
      <span>{{ fileName }}</span>
    </div>
    <div
      v-if="firstRank"
      class="square__annotation square__annotation__rank">
      <span>{{ rankName }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Piece from '@/components/representation/Piece.vue';
import State from '@/models/game/State';
import PieceObj from '@/models/pieces/Piece';
import Square from '@/models/square/Square';
import ColorEnum from '@/models/common/ColorEnum';

export default defineComponent({
  name: 'Square',
  components: {
    Piece,
  },
  props: {
    squareObj: {
      type: Square,
      required: true,
    },
    state: {
      type: State,
      required: true,
    },
    isHighlighted: {
      type: Boolean,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    squareHasPiece(): boolean {
      return this.state.squareHasPiece(this.squareObj);
    },
    pieceOnSquare(): PieceObj | null {
      return this.state.pieceOnSquare(this.squareObj);
    },
    color(): ColorEnum {
      return this.squareObj.color;
    },
    squareClass(): string {
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      const colorClass: string = `square__${this.color} `;
      const highlightClass: string = !this.squareHasPiece
        && this.isHighlighted ? 'square__highlighted ' : '';
      const selectedClass: string = this.isSelected ? 'square__selected ' : '';
      const captureClass: string = this.captureTarget ? 'square__capture ' : '';
      const checkedClass: string = this.isChecked ? 'square__checked ' : '';
      return `${colorClass}${highlightClass}${selectedClass}
        ${captureClass}${checkedClass}`;
    },
    fileName(): string {
      return this.squareObj.file.name;
    },
    rankName(): string {
      return this.squareObj.rank.name;
    },
    firstFile(): boolean {
      return this.rankName === '1';
    },
    firstRank(): boolean {
      return this.fileName === 'a';
    },
    captureTarget(): boolean {
      return this.squareHasPiece && this.isHighlighted && !this.isSelected;
    },
    isChecked(): boolean {
      const checkedIndex: number | null = this.state.checkedIndex;
      return !!checkedIndex && this.squareObj.index === checkedIndex;
    }
  },
});
</script>
