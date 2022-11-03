<template>
  <div :class="styled.container">
    <NothingFoundForm
      title="Контакты"
      sub-title="Оставьте заявку или свяжитесь с нами"
    />
  </div>
</template>

<script>
import NothingFoundForm from "../../components/nothingFoundForm/NothingFoundForm.vue";
import styled from "./contactPage.module.css";

export default {
  name: "ContactPage",
  components: {
    NothingFoundForm,
  },
  data() {
    return  {
      styled
    }
  }
}
</script>
