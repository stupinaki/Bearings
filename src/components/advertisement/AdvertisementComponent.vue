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
</template>

<script>
import styled from "./advertisementComponent.module.css";

export default {
  name: "AdvertisementComponent", 
  data() {
    return {
      styled,
    }
  },
}
</script>
