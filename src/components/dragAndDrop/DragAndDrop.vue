<template>
  <div :class="styled.dropText">
    Загрузить список документов
  </div>

  <div
    ref="dropZone"
    :class="dropZoneClass"
    @dragenter.prevent="highlight"
    @dragover.prevent="highlight"
    @dragleave.prevent="unHighlight"
    @drop.prevent="handleDrop"
  >
    <div :class="styled.dropDescription">
      <p :class="styled.instruction">
        Перетащите файлы или
      </p>
      <ButtonUI
        type="type-link"
        :class="styled.loadBtn"
        @click="handleLoad"
      >
        загрузите
      </ButtonUI>

      <input
        ref="input"
        :class="styled.fileInput"
        type="file"
        multiple
        accept="doc,.docx,.excel"
        @input="uploadedComplete"
      >

      <p :class="styled.supportedFormats">
        Подерживаемый формат: .doc, .docx, .excel
      </p>

      <p
        v-show="isUploadSuccessful"
        :class="styled.uploadedComplete"
      >
        <b>Загрузка завершена</b>
      </p>
    </div>
  </div>
</template>

<script>
import ButtonUI from "../UI/button/ButtonUI.vue";
import styled from "./dragAndDrop.module.css";

export default {
  name: "DragAndDrop",
  components: {
    ButtonUI,
  },
  data() {
    return {
      styled,
      isUploadSuccessful: false,
      isFileInDropZone: false,
      isLoading: false,
    }
  },
  computed: {
    dropZoneClass() {
      if(!this.$data.isFileInDropZone){
        return [styled.dropZone];
      }
      return [styled.highlight];
    },
  },
  methods: {
    handleLoad(){
      this.$refs.input.click();
    },
    handleDrop(e) {
      this.unHighlight();
      const dt = e.dataTransfer;
      const files = dt.files;

      if(files.length){
        this.uploadedComplete()
      }
    },
    highlight() {
      this.$data.isFileInDropZone = true;
    },
    unHighlight() {
      this.$data.isFileInDropZone = false;
    },
    uploadedComplete(){
      this.$data.isUploadSuccessful = true;
    }
  },
}
</script>
