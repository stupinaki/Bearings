<template>
  <HeaderBlock />
  <BenefitsCards />
  <FooterBlock />
</template>

<script>
import HeaderBlock from "../components/header/HeaderBlock.vue";
import FooterBlock from "../components/footer/FooterBlock.vue";
import BenefitsCards from "../components/benefitsCards/BenefitsCards.vue";

export default {
  name: "HomePage",
  components: {
    HeaderBlock,
    FooterBlock,
    BenefitsCards,
  }
}
</script>
