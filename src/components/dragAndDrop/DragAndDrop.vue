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

      <!--      <p :class="styled.instruction">-->
      <!--        Процесс загрузки:-->
      <!--      </p>-->

      <progress
        ref="progressBar"
        max="100"
        :value="progressValue"
        :class="progressClass"
      />
    </div>
  </div>
</template>

<script>
import styled from "./dragAndDrop.module.css";
import ButtonUI from "../button/ButtonUI.vue";

export default {
  //todo добавить больше классов на разные состояния:
  //todo 1. объект еще вне drag and drop,
  //todo 2. обект в нем,
  //todo 3. объект загружен

  name: "DragAndDrop",
  components: {
    ButtonUI,
  },
  data() {
    return {
      styled,
      isFileInDropZone: false,
      isLoading: false,
      progressValue: 0,
    }
  },
  computed: {
    dropZoneClass() {
      if(!this.isFileInDropZone){
        return [styled.dropZone];
      }
      return [styled.highlight];
    },
    progressClass() {
      if(this.isLoading){
        return [styled.progressTrue];
      }
      return [styled.progressFalse]
    }
  },
  methods: {
    handleLoad(){
      this.$refs.input.click();
    },
    handleDrop(e) {
      this.isLoading = true;
      this.fillProgressBar();
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
    },
    fillProgressBar() {
      for(let i = 0; i < 10; i++){
        setTimeout(this.increaseProgressBar, 2000)
      }
    },
    increaseProgressBar(){
      return this.$data.progressValue += 10;
    }

  },
}
</script>
