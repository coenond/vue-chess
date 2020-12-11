<template>
  <div class="board">
    <square v-for='s in allSquares'
      :key='s.name()'
      :square-obj="s" 
      :state="state" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SquareObj from '@/models/square/Square';
import State from '@/models/game/State';
import Square from '@/components/representation/Square.vue';

export default defineComponent({
  name: 'Board',
  components: {
    Square,
  },
  props: {
    state: {
      type: State,
      required: true,
    },
  },
  computed: {
    allSquares(): SquareObj[] {
      return SquareObj.all();
    },
  },
});
</script>
