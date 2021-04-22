<template>
  <div class="game">
    <h1>Chess Game</h1>
    <button v-on:click="resetGame()">
      Reset game
    </button> | 
    <button v-on:click="clearBoard()">
      Clear Board
    </button>
    <br><br>
    <board :state="state"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NewGameHelper from '@/helpers/NewGameHelper';
import Board from '@/components/representation/Board.vue';
import State from '@/models/game/State';

export default defineComponent({
  name: 'Game',
  components: {
    Board,
  },
  data() {
    return {
      state: State.emptyState,
    };
  },
  beforeMount() {
    if (this.state.isEmpty) {
      this.state = NewGameHelper.create();
    }
  },
  methods: {
    resetGame(): void {
      this.state = State.newGame();
    },
    clearBoard(): void {
      this.state = State.emptyState;
    },
  }
});
</script>
