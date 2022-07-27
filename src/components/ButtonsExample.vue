<template>
  <ButtonUI size="m" type="primary"> ggg</ButtonUI>
  <ButtonUI size="s" type="secondary">kkkk</ButtonUI>
  <ButtonUI size="s" type="typeLink">ee</ButtonUI>
  <ButtonUI size="l" type="pseudo">rrr</ButtonUI>
  <ButtonUI size="m" type="primary" :disabled="true">qqqq</ButtonUI>
</template>

<script>
import ButtonUI from "./button/ButtonUI.vue";

export default {
  name: "ButtonsExample",
  components: {
    ButtonUI,
  },
};
</script>

<style scoped></style>
