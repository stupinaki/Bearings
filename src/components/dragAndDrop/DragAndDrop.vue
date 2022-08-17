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
        @change="uploadedComplete"
      >

      <p :class="styled.supportedFormats">
        Подерживаемый формат: .doc, .docx, .excel
      </p>

      <p
        v-show="this.isUploadSuccessful"
        :class="styled.uploadedComplete"
      >
        <b>Загрузка завершена</b>
      </p>

    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
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
    }
  },
  computed: {
    ...mapState("dragAndDrop", [
        "isFileInDropZone",
        "isLoading",
    ]),
    dropZoneClass() {
      if(!this.isFileInDropZone){
        return [styled.dropZone];
      }
      return [styled.highlight];
    },
  },
  methods: {
    ...mapActions("dragAndDrop", [
        "turnOnHighlight",
        "turnOffHighlight",
        "initToggleLoading",
    ]),
    handleLoad(){
      this.$refs.input.click();
    },
    handleDrop() {
      this.initToggleLoading();
      this.unHighlight();
    },
    highlight() {
      this.turnOnHighlight();
    },
    unHighlight() {
      this.turnOffHighlight();
    },
    uploadedComplete(){
      this.$data.isUploadSuccessful = true;
    }
  },
}
</script>
