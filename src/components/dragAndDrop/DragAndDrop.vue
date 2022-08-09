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
      >

      <p :class="styled.supportedFormats">
        Подерживаемый формат: .doc, .docx, .excel
      </p>
    </div>
  </div>
</template>

<script>
import styled from "./dragAndDrop.module.css";
import ButtonUI from "../button/ButtonUI.vue";

export default {
  name: "DragAndDrop",
  components: {
    ButtonUI,
  },
  data() {
    return {
      styled,
      isFileInDropZone: false,
    }
  },
  computed: {
    dropZoneClass() {
      if(!this.isFileInDropZone){
        return [styled.dropZone];
      }
      return [styled.highlight];
    }
  },
  methods: {
    handleLoad(){
      this.$refs.input.click();
    },
    handleDrop(e) {
      this.unHighlight();
      const dt = e.dataTransfer;
      const files = dt.files
      this.handleFiles(files);
    },
    highlight() {
      this.isFileInDropZone = true;
    },
    unHighlight() {
      this.isFileInDropZone = false;
    },
    handleFiles(files) {
      ([...files]).forEach(file => this.uploadFile(file));
    },
    //todo спросить URL для запроса, узнать как должно выгдядить это после после успешной загрузки
    uploadFile(file) {
      const url = 'URL ДЛЯ ЗАГРУЗКИ ФАЙЛОВ';
      const formData = new FormData();

      formData.append('file', file)
      fetch(url, {
        method: 'POST',
        body: formData
      })
          .then(() => { /* Готово. Информируем пользователя */ })
          .catch(() => { /* Ошибка. Информируем пользователя */ })
    }
  },
}
</script>
