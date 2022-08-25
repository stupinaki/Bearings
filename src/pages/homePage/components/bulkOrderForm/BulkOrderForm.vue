<template>
  <div :class="styled.title">
    Для заказа оптом заполните форму
  </div>
  <div :class="styled.subTitle">
    Мы передадим данные нашим партнерам, и они свяжутся с вами для уточнения деталей.
  </div>

  <div :class="styled.wrapper">
    <ContactUsForm>
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
