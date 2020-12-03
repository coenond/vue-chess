<template>
  <div
    class="square"
    :class="colorClass">
    <p>{{ squareObj.name() }}</p>
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
      console.log(`square__${this.color}`);
      return `square__${this.color}`;
    },
  },
});
</script>
