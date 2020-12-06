<template>
    <img class="piece" :src="require(`@/assets/images/pieces/${file}`)">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PieceObj from '@/models/pieces/Piece';

export default defineComponent({
  name: 'Piece',
  props: {
    pieceObj: {
      type: PieceObj,
      requried: true,
    },
  },
  computed: {
    file(): string {
      return this.pieceObj?.imgFile() || '';
    }
  },
});
</script>
