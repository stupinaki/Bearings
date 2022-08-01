<template>
  <div :class="styled.wrapper">
    <div :class="styled.container">
      <div :class="styled.column">
        <div :class="styled.columnLogo"> PIC </div>
      </div>
      <div :class="styled.column">
        <a :class="styled.columnItem">
          <b>Покупателям</b>
        </a>
        <a :class="styled.columnItem"> Найти подшибники </a>
        <a :class="styled.columnItem"> Оптовый заказ </a>
        <a :class="styled.columnItem"> Помощь </a>
        <a :class="styled.columnItem"> Вопросы и ответы </a>
      </div>
      <div :class="styled.column">
        <a :class="styled.columnItem">
          <b>Продавцам</b>
        </a>
        <a :class="styled.columnItem"> Сотрудничество </a>
        <a :class="styled.columnItem"> Вопросы и ответы </a>
      </div>
      <div :class="styled.column">
        <a :class="styled.columnItem">
          <b>Контакты</b>
        </a>
        <a href="tel:79272772330" :class="styled.columnItem">
          +7 927-277-23-30
        </a>
        <a href="mailto:skovalev74@yandex.ru" :class="styled.columnItem">
          skovalev74@yandex.ru
        </a>
        <div :class="styled.columnItem">
          <a :class="styled.linksItem">
            <img src="../../../public/imgs/footer/vk.svg" alt="vk" />
          </a>
          <a :class="styled.linksItem">
            <img src="../../../public/imgs/footer/facebook.svg" alt="facebook" />
          </a>
          <a :class="styled.linksItem">
            <img src="../../../public/imgs/footer/instagram.svg" alt="instagram" />
          </a>
          <a :class="styled.linksItem">
            <img src="../../../public/imgs/footer/twitter.svg" alt="twitter" />
          </a>
        </div>
      </div>
    </div>

    <div>
      <a :class="styled.bottomItem"> Политика конфиденциальности </a>
      <a :class="styled.bottomItem"> Договор оферты </a>
      <a :class="styled.bottomItem"> Обратная связь </a>
    </div>
  </div>
 </template>

<script>
import styled from "./footerBlock.module.css";

export default {
  name: "FooterBlock",
  data() {
    return {
      styled,
    };
  },
};
</script>
