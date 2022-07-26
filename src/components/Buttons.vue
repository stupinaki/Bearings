<template>
git
    <Button size="m" type="primary"> ggg</Button>
    <Button size="s" type="secondary">kkkk</Button>
    <Button size="yyy">tttt</Button>
    <Button size="s" type="typeLink">ee</Button>
    <Button size="l" type="pseudo">rrr</Button>
    <Button size="m" type="primary" :disabled="true" >qqqq</Button>


</template>

<script>
import Button from '@/components/UI/button/Button.vue';

export default {
  name: 'Buttons',
  components: {
    Button
  }
}
</script>

<style scoped>

</style>
