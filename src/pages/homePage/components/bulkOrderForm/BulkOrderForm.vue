<template>
  <TypographyText
    value="Для заказа оптом заполните форму"
    size="header3"
  />
  <TypographyText
    value="Мы передадим данные нашим партнерам, и они свяжутся с вами для уточнения деталей."
    size="title2"
    :class="styled.subTitle"
  />
  <div :class="styled.wrapper">
    <ContactUsForm>
      <FileInput is-multiple />
    </ContactUsForm>
  </div>
</template>

<script>
import TypographyText from "../../../../components/typography/TypographyText.vue";
import ContactUsForm from "../../../../components/contactUsForm/ContactUsForm.vue";
import FileInput from "../fileInput/FileInput.vue";
import styled from "./bulkOrderForm.module.css";

export default {
  name: "BulkOrderForm",
  components: {
    FileInput,
    ContactUsForm,
    TypographyText,
  },
  data() {
    return {
      styled,
    }
  }
}
</script>
