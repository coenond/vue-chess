<template>
  <div
    class="square"
    :class="colorClass">
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
import SquareColorHelper from '@/helpers/SquareColorHelper';
import Color from '@/models/square/Color';
import Square from '@/models/square/Square';

export default defineComponent({
  name: 'Square',
  props: {
    squareObj: {
      type: Square,
      required: true,
    },
  },
  computed: {
    color(): Color {
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
