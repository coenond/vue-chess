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
import File from '@/models/square/File';
import Rank from '@/models/square/Rank';
import Square from '@/components/representation/Square.vue';

export default defineComponent({
  name: 'Board',
  components: {
    Square,
  },
  data() {
    return {
      files: File.all(),
      ranks: Rank.all(),
    };
  },
  computed: {
    allSquares(): SquareObj[] {
      return SquareObj.all();
    },
  },
});
</script>
