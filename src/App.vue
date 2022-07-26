<template>
<div>
  ЭТО ОСНОВНАЯ СТРАНИЦА
</div>

<Buttons></Buttons>

</template>

<script>
import Buttons from '@/components/Buttons.vue';

export default {
  components: {
    Buttons,
  }
}
</script>

<style>
  :root {
    --primary-color: #4A53F5;
    --primary-hover-color: #3840e6;
    --pseudo-hover-color: #EDEEFF;
    --secondary-color: #F3F5FF;
    --secondary-hover-color: #d8ddf9;
  }
</style>
