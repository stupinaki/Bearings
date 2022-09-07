<template>
  <!--  <div :class="styled.wrapper">-->
  <!--    <div :class="styled.logoMap">-->
  <!--      <div :class="styled.pic">-->
  <!--        PIC-->
  <!--      </div>-->
  <!--      <div :class="styled.map">-->
  <!--        <Place />-->
  <!--        <div :class="styled.city">-->
  <!--          Саратов-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <NavigationMenu />-->
  <!--  </div>-->


  <div :class="styled.wrapperMobile">
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
</template>

<script>
import styled from "./headerBlock.module.css";
// import NavigationMenu from "../navigation/NavigationMenu.vue";
import Place from "../../assets/place.svg";
import NavigationMenuMobile from "../navigation/NavigationMenuMobile.vue";

export default {
  name: "HeaderBlock",
  components: {
    NavigationMenuMobile,
    // NavigationMenu,
    Place,
  },
  data() {
    return {
      styled,
    };
  },
};
</script>
