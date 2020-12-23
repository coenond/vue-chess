<template>
  <div class="board">
    <square v-for='s in allSquares'
      :key='s.name'
      :is-highlighted='highlights.includes(s.name)'
      :is-selected='!!squareSelected && s.name === squareSelected.name'
      :square-obj="s" 
      :state="latestState"
      v-on:click="squareClicked(s)" />
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { defineComponent } from 'vue';
import MoveGenerator from '@/models/game/MoveGenerator';
import PieceObj from '@/models/pieces/Piece';
import SquareObj from '@/models/square/Square';
import State from '@/models/game/State';
import Square from '@/components/representation/Square.vue';
import StateBoardHelper from '@/helpers/StateBoardHelper';

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
  data() {
    return {
      highlights: Array<string>(),
      squareSelected: null as SquareObj | null,
      pieceSelected: null as PieceObj | null,
      latestState: this.state,
    }
  },
  watch: {
    state: function (newState: State): void {
      this.latestState = newState;
    }
  },
  computed: {
    allSquares(): SquareObj[] {
      return SquareObj.all();
    },
  },
  methods: {
    squareClicked(clickedSquare: SquareObj) {
      // Move piece if highlighted square is clicked
      if (this.highlights.includes(clickedSquare.name) && !!this.pieceSelected && !!this.squareSelected) {
        this.latestState = this.latestState.movePiece(this.pieceSelected, this.squareSelected, clickedSquare);
        this.resetSelected();
        return;
      }
      
      const piece: PieceObj | null = this.pieceOnSquare(clickedSquare);
      !!piece ? this.setSelected(piece, clickedSquare) : this.resetSelected();
    },
    pieceOnSquare(square: SquareObj): PieceObj | null {
      return this.state.pieceOnSquare(square);
    },
    setSelected(piece: PieceObj, square: SquareObj) {
      this.pieceSelected = piece;
      this.squareSelected = square;
      const generator: MoveGenerator = new MoveGenerator(piece, square, this.latestState);
      this.highlights = generator.allPositions.map((index) => {
        return StateBoardHelper.squareForIndex(index);
      });
    },
    resetSelected() {
      this.pieceSelected = null;
      this.squareSelected = null;
      this.highlights = Array<string>();
    },
  }
});
</script>
