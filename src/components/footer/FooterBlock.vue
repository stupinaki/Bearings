<template>
  <div :class="styled.container">
    <div :class="styled.column">
      <img
        :class="styled.columnLogo"
        src="./public/imgs/footer/PIC.svg"
        alt="pic logo"
      />
    </div>
    <div :class="styled.column">
      <a href="" :class="styled.columnItem">
        <b>Покупателям</b>
      </a>
      <a href="" :class="styled.columnItem"> Найти подшибники </a>
      <a href="" :class="styled.columnItem"> Оптовый заказ </a>
      <a href="" :class="styled.columnItem"> Помощь </a>
      <a href="" :class="styled.columnItem"> Вопросы и ответы </a>
    </div>
    <div :class="styled.column">
      <a href="" :class="styled.columnItem">
        <b>Продавцам</b>
      </a>
      <a href="" :class="styled.columnItem"> Сотрудничество </a>
      <a href="" :class="styled.columnItem"> Вопросы и ответы </a>
    </div>
    <div :class="styled.column">
      <a href="" :class="styled.columnItem">
        <b>Контакты</b>
      </a>
      <a href="tel:79272772330" :class="styled.columnItem">
        +7 927-277-23-30
      </a>
      <a href="mailto:skovalev74@yandex.ru" :class="styled.columnItem">
        skovalev74@yandex.ru
      </a>
      <div href="" :class="styled.columnItem">
        <a :class="styled.linksItem" href="">
          <img src="./public/imgs/footer/vk.svg" alt="vk" />
        </a>
        <a :class="styled.linksItem" href="">
          <img src="./public/imgs/footer/fb.svg" alt="fb" />
        </a>
        <a :class="styled.linksItem" href="">
          <img src="./public/imgs/footer/inst.svg" alt="inst" />
        </a>
        <a :class="styled.linksItem" href="">
          <img src="./public/imgs/footer/twit.svg" alt="twit" />
        </a>
      </div>
    </div>
  </div>

  <div>
    <a :class="styled.bottomItem" href=""> Политика конфиденциальности </a>
    <a :class="styled.bottomItem" href=""> Договор оферты </a>
    <a :class="styled.bottomItem" href=""> Обратная связь </a>
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
