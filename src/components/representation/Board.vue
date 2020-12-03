<template>
  <div class="board">
    <square v-for='s in allSquares'
      :key='s.name()'
      :square-obj="s" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SquareObj from '@/models/square/Square';
import Square from '@/components/representation/Square.vue';

export default defineComponent({
  name: 'Board',
  components: {
    Square,
  },
  computed: {
    allSquares(): SquareObj[] {
      return SquareObj.all();
    },
  },
});
</script>
