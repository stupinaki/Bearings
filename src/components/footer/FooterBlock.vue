<template>
  <div :class="styled.wrapper">
    <div :class="styled.container">
      <div :class="styled.column">
        <div :class="styled.columnLogo">
          PIC
        </div>
      </div>
      <div :class="styled.column">
        <router-link
          to="/home"
          :class="styled.columnItem"
        >
          <b>Покупателям</b>
        </router-link>

        <router-link
          to="/home"
          :class="styled.columnItem"
        >
          Найти подшибники
        </router-link>

        <router-link
          to="/home"
          :class="styled.columnItem"
        >
          Оптовый заказ
        </router-link>

        <router-link
          to="/home"
          :class="styled.columnItem"
        >
          Помощь
        </router-link>

        <router-link
          to="/home"
          :class="styled.columnItem"
        >
          Вопросы и ответы
        </router-link>
      </div>

      <div :class="styled.column">
        <router-link
          to="/home"
          :class="styled.columnItem"
        >
          <b>Покупателям</b>
        </router-link>

        <router-link
          to="/home"
          :class="styled.columnItem"
        >
          Продавцам
        </router-link>

        <router-link
          to="/home"
          :class="styled.columnItem"
        >
          Вопросы и ответы
        </router-link>
      </div>

      <div :class="styled.column">
        <router-link
          to="/home"
          :class="styled.columnItem"
        >
          <b>Контакты</b>
        </router-link>

        <router-link
          to="tel:79272772330"
          :class="styled.columnItem"
        >
          +7 927-277-23-30
        </router-link>

        <router-link
          to="mailto:skovalev74@yandex.ru"
          :class="styled.columnItem"
        >
          skovalev74@yandex.ru
        </router-link>


        <div :class="styled.columnItem">
          <router-link
            to="/home"
            :class="styled.columnItem"
          >
            <Vk />
          </router-link>

          <router-link
            to="/home"
            :class="styled.columnItem"
          >
            <Facebook />
          </router-link>

          <router-link
            to="/home"
            :class="styled.columnItem"
          >
            <Instagram />
          </router-link>

          <router-link
            to="/home"
            :class="styled.columnItem"
          >
            <Twitter />
          </router-link>
        </div>
      </div>
    </div>

    <div>
      <router-link
        to="/home"
        :class="styled.bottomItem"
      >
        Политика конфиденциальности
      </router-link>

      <router-link
        to="/home"
        :class="styled.bottomItem"
      >
        Договор оферты
      </router-link>

      <router-link
        to="/home"
        :class="styled.bottomItem"
      >
        Обратная связь
      </router-link>
    </div>
  </div>
</template>

<script>
import styled from "./footerBlock.module.css";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Vk from "../../assets/vk.svg";

export default {
  name: "FooterBlock",
  components: {
    Twitter,
    Instagram,
    Facebook,
    Vk,
  },
  data() {
    return {
      styled,
    };
  },
};
</script>
