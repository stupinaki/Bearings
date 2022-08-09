<template>
  <div>
    <div :class="styled.dropText">Загрузить список документов</div>
    <div :class="styled.dropZone">
      <div>
        <div :class="styled.instruction">
          <div>Перетащите файлы или</div>
          <ButtonUI type="type-link"> загрузите </ButtonUI>
        </div>
        <div :class="styled.supportedFormats">
          Подерживаемый формат: .doc, .docx, .excel
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import styled from "./dragAndDrop.module.css";
import ButtonUI from "../button/ButtonUI.vue";

export default {
  name: "DragAndDrop",
  data() {
    return {
      styled,
    }
  },
  components: {
    ButtonUI,
  }
}
</script>
