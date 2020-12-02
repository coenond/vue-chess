<template>
  <div class="game">
    <h1>Chess Game</h1>
    <board />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Board from '@/components/representation/Board.vue';

export default defineComponent({
  name: 'Game',
  components: {
    Board,
  },
});
</script>
