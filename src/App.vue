<template>
  <div>ЭТО ОСНОВНАЯ СТРАНИЦА</div>

  <ButtonsExample />
</template>

<script>
import ButtonsExample from "./components/ButtonsExample.vue";

export default {
  components: {
    ButtonsExample,
  },
};
</script>

<style>
:root {
  --primary-color: #4a53f5;
  --primary-hover-color: #3840e6;
  --pseudo-hover-color: #edeeff;
  --secondary-color: #f3f5ff;
  --secondary-hover-color: #d8ddf9;
}
</style>
