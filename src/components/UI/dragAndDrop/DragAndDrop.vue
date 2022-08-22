<template>
  <div
    ref="dropZone"
    :class="dropZoneClass"
    @dragenter.prevent="insideDropZone"
    @dragleave.prevent="outsideDropZone"
    @drop.prevent="handleDrop"
  >
    <slot />
  </div>
</template>

<script>
import styled from "./dragAndDrop.module.css";

export default {
  name: "DragAndDrop",
  emits: ['dropData'],
  data() {
    return {
      counter: 0,
      isFileInDropZone: false,
      styled,
    }
  },
  computed: {
    dropZoneClass() {
      if(this.$data.counter !== 0) {
        return [styled.dropZone, styled.active];
      }
      return [styled.dropZone, styled.dropZone];
    }
  },
  methods: {
    insideDropZone() {
      this.counter +=1;
    },
    outsideDropZone() {
      this.counter -=1;
    },
    handleDrop(e) {
      this.counter = 0;
      const data = e.dataTransfer;
      this.$emit('dropData', data);
    }
  }
}
</script>
