<template>
  <div :class="styled.container">
    <div>
      <TypographyText
        size="header1"
        color="darkgray"
        value="Стать партнером"
      />
      <TypographyText
        :class="styled.mainSubTitle"
        size="title2"
        color="darkgray"
        value="Сервис поможет покупателю самостоятельно быстро и удобно выбрать продукцию и связаться с вами.
               Мы выступаем в роли дополнительного канала сбыта для вашей к"
      />
    </div>
    <div :class="styled.priceCards">
      <PriceCard
        v-for="priceCard in price"
        :key="priceCard.id"
        v-bind="priceCard"
      />
    </div>
    <BenefitsCards :benefits-value="benefitsForCompaniesValue" />
    <div :class="styled.form">
      <QuestionFormSmall
        title="Остались вопросы?"
        sub-title="Свяжитесь с нами. Мы попробуем вам помочь."
      />
    </div>
  </div>
</template>

<script>
import {benefitsForCompaniesValue} from "../../../data/benefitsValue.js";
import {ourContacts} from "../../../data/ourContacts.js";
import {price} from "../../../data/price.js";
import QuestionFormSmall from "../../components/questionFormSmall/QuestionFormSmall.vue";
import TypographyText from "../../components/typography/TypographyText.vue";
import BenefitsCards from "../homePage/components/benefitsCards/BenefitsCards.vue";
import PriceCard from "./components/priceCard/PriceCard.vue";
import styled from "./becomePartnerPage.module.css";

export default {
  name: "BecomePartnerPage",
  components: {
    PriceCard,
    BenefitsCards,
    TypographyText,
    QuestionFormSmall,
  },
  data() {
    return {
      styled,
      price,
      ourContacts,
      benefitsForCompaniesValue,
    }
  },
}
</script>

