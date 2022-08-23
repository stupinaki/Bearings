<template>
  <div>
    <DragAndDrop @drop-data="handleDrop">
      <div :class="styled.dropDescription">
        <span :class="styled.instruction">
          {{ text }}
        </span>
        <ButtonUI
          type="type-link"
          :class="styled.loadBtn"
          @click="handleLoad"
        >
          загрузите
        </ButtonUI>
        <span :class="styled.supportedFormats">
          Подерживаемый формат: {{ accept }}
        </span>
      </div>
    </DragAndDrop>
    <input
      ref="input"
      type="file"
      :multiple="isMultiple"
      :class="styled.fileInput"
      :accept="accept"
      @input="onFileInput"
    >
    <div>
      <div
        v-if="files.length"
        :class="styled.deleteAllAttachments"
      >
        Удалить все файлы
        <span
          :class="styled.deleteIcon"
          @click="deleteAllFiles"
        >
          <b>🞬</b>
        </span>
      </div>
      <div
        v-for="file in files"
        :key="file.name"
      >
        <span :class="styled.attachmentName">
          {{ file.name }}
        </span>
        <span
          :class="styled.deleteIcon"
          @click="deleteFile(file)"
        >
          <b>🞬</b>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {uniqBy} from "lodash";
import DragAndDrop from "../UI/dragAndDrop/DragAndDrop.vue";
import ButtonUI from "../UI/button/ButtonUI.vue";
import styled from "./fileInput.module.css";

export default {
  name: "FileInput",
  components: {
    DragAndDrop,
    ButtonUI,
  },
  props: {
    text: {
      type: String,
      default: "Перетащите файлы или",
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    acceptArray: {
      type: Array,
      default() {
        return [".doc", ".docx", ".excel"];
      },
    },
  },
  data() {
    return {
      styled,
      files: [],
    }
  },
  computed: {
    accept() {
      return this.$props.acceptArray.join(", ");
    },
  },
  methods: {
    onFileInput(e) {
      const newFiles = Array.from(e.target.files);
      if (this.isMultiple) {
        this.files = uniqBy([...this.files, ...newFiles], f => f.name);
        return;
      }
      this.files = newFiles;
    },

    handleDrop(dataTransfer) {
      const newFiles = Array.from(dataTransfer.files);
      const newValidFiles = this.filterInvalidFiles(newFiles);

      if (this.isMultiple) {
        this.files = uniqBy([...this.files, ...newValidFiles], f => f.name);
        return;
      }

      this.files = [newValidFiles[0]];
    },

    filterInvalidFiles(files) {
      return files.filter(f => {
        const ext = f.name.split('.').pop();
        return this.accept.includes(ext);
      })
    },

    deleteFile(file) {
      this.files = this.files.filter(f => f !== file);
    },

    deleteAllFiles() {
      this.files = [];
    },

    handleLoad() {
      this.$refs.input.click();
    },
  }
}
</script>
