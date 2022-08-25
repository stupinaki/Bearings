<template>
  <div :class="styled.hint">
    <div :class="styled.img">
      <MarkingHintImg />
    </div>
    <div :class="styled.text">
      Маркировка расположена на подшипнике или на его упаковке.
    </div>
  </div>
</template>

<script>
import MarkingHintImg from "../../assets/markingHint.svg";
import styled from "./markingHint.module.css";

export default {
  name: "MarkingHint",
  components: {
    MarkingHintImg,
  },
  data() {
    return {
      styled,
    }
  },
}
</script>
