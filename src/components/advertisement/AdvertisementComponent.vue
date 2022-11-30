<template>
  <div :class="styled.advertisement">
    <div :class="styled.description">
      <div :class="styled.name">
        TECHINTORG
      </div>
      <div>
        <div> Импортные подшипники оптом </div>
        <div :class="styled.contacts">
          <a
            href="tel:+79257001767"
            :class="styled.link"
          >
            +7 (925) 700-17-67
          </a>
          <a
            href="mailto:info@podshipnikopt.ru"
            :class="styled.link"
          >
            info@podshipnikopt.ru
          </a>
        </div>
      </div>
      <a
        href="http://podshipnikopt.ru/"
        target="_blank"
        :class="styled.order"
      >
        Оставить заявку
      </a>
    </div>

    <div :class="styled.marksWrapper">
      <div :class="styled.marks">
        <div>
          SKF
        </div>
        <div>
          FAG
        </div>
        <div>
          Timken
        </div>
        <div>
          NSK
        </div>
      </div>
    </div>
  </div>

<!--  <div :class="styled.container">-->
<!--    <a-->
<!--        v-if="isSmall"-->
<!--        href="http://podshipnikopt.ru/"-->
<!--        target="_blank"-->
<!--    >-->
<!--      <img src="../../assets/advertisementSmall.svg" alt="advertisementSmall">-->
<!--    </a>-->

<!--    <a-->
<!--        v-else-->
<!--        href="http://podshipnikopt.ru/"-->
<!--        target="_blank"-->
<!--    >-->
<!--      <img src="../../assets/advertisementBig.svg" alt="advertisementBig">-->
<!--    </a>-->
<!--  </div>-->
</template>

<script>
import styled from "./advertisementComponent.module.css";
import {mapState} from "vuex";

export default {
  name: "AdvertisementComponent", 
  data() {
    return {
      styled,
    }
  },
  computed: {
    ...mapState("viewport", ["viewportWidth"]),
    isSmall() {
      return this.viewportWidth <= 900;
    }
  }
}
</script>
