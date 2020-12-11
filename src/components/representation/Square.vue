<template>
  <div
    class="square"
    :class="colorClass">
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
  },
  computed: {
    pieceOnSquare(): PieceObj  | null{
      return this.state.pieceOnSquare(this.squareObj);
    },
    color(): ColorEnum {
      return SquareColorHelper.getColorForSquare(this.squareObj);
    },
    colorClass(): string {
      return `square__${this.color}`;
    },
    fileName(): string {
      return this.squareObj.getFile().name();
    },
    rankName(): string {
      return this.squareObj.getRank().name();
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
