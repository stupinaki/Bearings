<template>
  <div :class="styled.wrapper">
    <div :class="styled.logoMap">
      <div :class="styled.pic">
        PIC
      </div>
      <div :class="styled.map">
        <img
          :src="Place"
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
import Place from "../../assets/place.svg";

export default {
  name: "HeaderBlock",
  components: {
    NavigationMenu,
  },
  data() {
    return {
      styled,
      Place,
    };
  },
};
</script>
