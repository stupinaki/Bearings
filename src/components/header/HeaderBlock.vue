<template>
  <div :class="styled.wrapper">
    <div :class="styled.logoMap">
      <div :class="styled.pic">
        PIC
      </div>
      <div :class="styled.map">
        <img
            :class="styled.mapImg"
            src="../../../public/imgs/header/place.svg"
            alt="map"
        >
        <div :class="styled.city">
          Саратов
        </div>
      </div>
    </div>
    <NavigationMenu />
  </div>
</template>

<script>
import styled from "./headerBlock.module.css";
import NavigationMenu from "../navigation/NavigationMenu.vue";

export default {
  name: "HeaderBlock",
  data() {
    return {
      styled,
    }
  },
  components: {
    NavigationMenu,
  }
}
</script>
