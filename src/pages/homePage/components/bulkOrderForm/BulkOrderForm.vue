<template>
  <div :class="styled.wrapper">
    <ContactUsForm
      title="Для заказа оптом заполните форму"
      sub-title="Мы передадим данные нашим партнерам, и они свяжутся с вами для уточнения деталей."
    >
      <FileInput is-multiple />
    </ContactUsForm>
  </div>
</template>

<script>
import ContactUsForm from "../../../../components/contactUsForm/ContactUsForm.vue";
import FileInput from "../fileInput/FileInput.vue";
import styled from "./bulkOrderForm.module.css";

export default {
  name: "BulkOrderForm",
  components: {
    FileInput,
    ContactUsForm,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
