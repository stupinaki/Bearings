<template>
  <div :class="styled.container">
    <h1 :class="styled.mainTitle">
      Стать партнером
    </h1>
    <span :class="styled.mainSubTitle">
      Сервис поможет покупателю самостоятельно быстро и удобно выбрать продукцию и связаться с вами.
      Мы выступаем в роли дополнительного канала сбыта для вашей компании.
    </span>

    <div :class="styled.priceCards">
      <PriceCard
        v-for="priceCard in price"
        :key="priceCard.id"
        v-bind="priceCard"
      />
    </div>

    <BenefitsCards :benefits-value="benefitsForCompaniesValue" />

    <div :class="styled.block">
      <h2 :class="styled.title">
        Как это работает?
      </h2>
      <span :class="styled.text">
        Вы присылаете нам заявку на размещение ассортимента и регистрации компании.
        Мы узнаем детали и регистрируем компанию и ассортимент подшипников.
        Через некоторые время данные становятся доступными для поиска.
      </span>
    </div>
    <div :class="styled.block">
      <h2 :class="styled.title">
        Как начать продавать при помощи сайта?
      </h2>
      <span :class="styled.text">
        Вы можете позвонить по телефону
        <a :href="phone">  {{ ourContacts.phone }} </a>   или обратитесь по адресу электронной почты
        <a :href="email"> {{ ourContacts.email }} </a>   мы свяжемся с вами свяжемся.
      </span>
    </div>
    <div :class="styled.block">
      <h2 :class="styled.title">
        Какие данные необходимы для размещения?
      </h2>
      <ul :class="styled.text">
        <li>
          1) Карточка предприятия с контактными данными для покупателей.
        </li>
        <li>
          2) Краткое описание компании (до 250 символов).
        </li>
        <li>
          3) Эмблема компании в формате jpeg.
        </li>
        <li>
          4) Прайс в Excel формате (структуру файла можно уточнить связавшись с нами).
        </li>
      </ul>
    </div>

    <div :class="styled.form">
      <QuestionCompanyForm
        title="Остались вопросы?"
        sub-title="Свяжитесь с нами. Мы попробуем вам помочь."
      />
    </div>
  </div>
</template>

<script>
import {getMailto, getPhone} from "../../helpers/getOurContacts";
import {benefitsForCompaniesValue} from "../../../data/benefitsValue.js";
import {ourContacts} from "../../../data/ourContacts.js";
import {price} from "../../../data/price.js";
import QuestionCompanyForm from "./components/questionCompanyForm/QuestionСompanyForm.vue";
import BenefitsCards from "../homePage/components/benefitsCards/BenefitsCards.vue";
import PriceCard from "./components/priceCard/PriceCard.vue";
import styled from "./becomePartnerPage.module.css";

export default {
  name: "BecomePartnerPage",
  components: {
    PriceCard,
    BenefitsCards,
    QuestionCompanyForm,
  },
  data() {
    return {
      styled,
      price,
      ourContacts,
      benefitsForCompaniesValue,
    }
  },
  computed: {
    phone() {
      return getPhone(ourContacts.phone);
    },
    email() {
      return getMailto(ourContacts.email);
    }
  }
}
</script>

