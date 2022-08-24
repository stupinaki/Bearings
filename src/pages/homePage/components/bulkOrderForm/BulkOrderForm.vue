<template>
  <div :class="styled.wrapper">
    <FormUI
      title="Для заказа оптом заполните форму"
      sub-title="Мы передадим данные нашим партнерам, и они свяжутся с вами для уточнения деталей."
    >
      <FileInput is-multiple />
    </FormUI>
  </div>
</template>

<script>
import FormUI from "../../../../components/UI/form/FormUI.vue";
import FileInput from "../fileInput/FileInput.vue";
import styled from "./bulkOrderForm.module.css";

export default {
  name: "BulkOrderForm",
  components: {
    FileInput,
    FormUI,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
