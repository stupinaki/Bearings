<template>
  <div
    v-if="viewportWidth <= 900"
    :class="styled.wrapperMobile"
  >
    <div :class="styled.logoMap">
      <div :class="styled.pic">
        PIC
      </div>
      <div :class="styled.map">
        <Place />
        <div :class="styled.city">
          Саратов
        </div>
      </div>
    </div>
    <NavigationMenuMobile />
  </div>

  <div
    v-else
    :class="styled.wrapper"
  >
    <div :class="styled.logoMap">
      <div :class="styled.pic">
        PIC
      </div>
      <div :class="styled.map">
        <Place />
        <div :class="styled.city">
          Саратов
        </div>
      </div>
    </div>
    <NavigationMenu />
  </div>
</template>

<script>
import NavigationMenuMobile from "../navigation/NavigationMenuMobile.vue";
import NavigationMenu from "../navigation/NavigationMenu.vue";
import Place from "../../assets/place.svg";
import styled from "./headerBlock.module.css";
import {mapState} from "vuex";

export default {
  name: "HeaderBlock",
  components: {
    NavigationMenuMobile,
    NavigationMenu,
    Place,
  },
  data() {
    return {
      styled,
    };
  },
  computed: {
    ...mapState("viewport", ["viewportWidth"]),
  }
};
</script>
