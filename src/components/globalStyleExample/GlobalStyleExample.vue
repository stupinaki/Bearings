<template>
  <div>
    <div :class="styled.myLocalClass">
      <div :class="styled.nestedClass" />
      <div class="my-global-class" />
    </div>
  </div>
</template>

<script>
import styled from './globalStyleExample.module.css'

export default {
  name: "GlobalStyleExample",
  data() {
    return {
      styled
    }
  }
}
</script>
