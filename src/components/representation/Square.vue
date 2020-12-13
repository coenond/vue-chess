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
import SquareColorHelper from '@/helpers/SquareColorHelper';
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
  },
  computed: {
    pieceOnSquare(): PieceObj | null {
      return this.state.pieceOnSquare(this.squareObj);
    },
    color(): ColorEnum {
      return SquareColorHelper.getColorForSquare(this.squareObj);
    },
    squareClass(): string {
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      const colorClass: string = `square__${this.color}`;
      const highlightClass: string = this.isHighlighted ? 'square__highlighted' : '';
      return `${colorClass} ${highlightClass}`;
    },
    fileName(): string {
      return this.squareObj.file.name();
    },
    rankName(): string {
      return this.squareObj.rank.name();
    },
    firstFile(): boolean {
      return this.rankName === '1';
    },
    firstRank(): boolean {
      return this.fileName === 'A';
    },
  },
});
</script>
