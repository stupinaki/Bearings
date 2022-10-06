<template>
  <div :class="styled.container">
    <div :class="styled.block">
      <h2 :class="styled.title">
        Для подшипниковых компаний и магазинов подшипников:
      </h2>
      <span :class="styled.text">
        Наш сайт предоставляет информацию о Вас и предлагаемой Вами продукции потребителям подшипников.
        Целевая аудитория сайта: средние, малые предприятия, экстренные закупки крупных предприятий, физические лица.
        <br>
        Сайт помогает покупателю самостоятельно быстро и удобно выбрать Вашу продукцию и связаться с Вами,
        выступает в роли дополнительного канала сбыта для Вашей компании.
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
        Для размещения необходимы:
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

    <div :class="styled.block">
      <h2 :class="styled.title">
        Стоимость размещения
      </h2>
      <span :class="styled.text">
        1000 руб. до 2000 позиций подшипников за месяц размещения с момента появления ваших объявлений.
        100 руб. в месяц до 50 позиций, но не менее трех месяцев размещения.
      </span>
    </div>

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
  </div>
</template>

<script>
import styled from "./becomePartnerPage.module.css";
import {ourContacts} from "../../../data/ourContacts.js";
import {getMailto, getPhone} from "../../helpers/getOurContacts";
//todo добавить сюда форму get in touch ?

export default {
  name: "BecomePartnerPage",
  data() {
    return {
      styled,
      ourContacts,
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

