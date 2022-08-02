<template>
  <div :class="styled.wrapper">
    <div :class="styled.container">
      <div :class="styled.column">
        <div :class="styled.columnLogo">PIC</div>
      </div>
      <div :class="styled.column">
        <a :class="styled.columnItem" href="#">
          <b>Покупателям</b>
        </a>
        <a :class="styled.columnItem" href="#"> Найти подшибники </a>
        <a :class="styled.columnItem" href="#"> Оптовый заказ </a>
        <a :class="styled.columnItem" href="#"> Помощь </a>
        <a :class="styled.columnItem" href="#"> Вопросы и ответы </a>
      </div>
      <div :class="styled.column">
        <a :class="styled.columnItem" href="#">
          <b>Продавцам</b>
        </a>
        <a :class="styled.columnItem" href="#"> Сотрудничество </a>
        <a :class="styled.columnItem" href="#"> Вопросы и ответы </a>
      </div>
      <div :class="styled.column">
        <a :class="styled.columnItem" href="#">
          <b>Контакты</b>
        </a>
        <a href="tel:79272772330" :class="styled.columnItem">
          +7 927-277-23-30
        </a>
        <a href="mailto:skovalev74@yandex.ru" :class="styled.columnItem">
          skovalev74@yandex.ru
        </a>
        <div :class="styled.columnItem">
          <a :class="styled.linksItem" href="#">
            <img :src="Vk" alt="vk" />
          </a>
          <a :class="styled.linksItem" href="#">
            <img :src="Facebook" alt="facebook"/>
          </a>
          <a :class="styled.linksItem" href="#">
            <img :src="Instagram" alt="instagram"/>
          </a>
          <a :class="styled.linksItem" href="#">
            <img :src="Twitter" alt="twitter" />
          </a>
        </div>
      </div>
    </div>

    <div>
      <a :class="styled.bottomItem" href="#"> Политика конфиденциальности </a>
      <a :class="styled.bottomItem" href="#"> Договор оферты </a>
      <a :class="styled.bottomItem" href="#"> Обратная связь </a>
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
  data() {
    return {
      styled,
      Twitter,
      Instagram,
      Facebook,
      Vk,
    };
  },
};
</script>
