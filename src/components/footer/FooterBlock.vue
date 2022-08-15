<template>
  <div :class="styled.footer">
    <div :class="styled.wrapper">
      <div :class="styled.container">
        <div :class="styled.column">
          <div :class="styled.columnLogo">
            PIC
          </div>
        </div>
        <div :class="styled.column">
          <router-link
            :to="{ name: 'empty' }"
            :class="styled.columnItem"
          >
            <b>Покупателям</b>
          </router-link>

          <router-link
            :to="{name: 'empty'}"
            :class="styled.columnItem"
          >
            Найти подшибники
          </router-link>

          <router-link
            :to="{name: 'empty'}"
            :class="styled.columnItem"
          >
            Оптовый заказ
          </router-link>

          <router-link
            :to="{name: 'empty'}"
            :class="styled.columnItem"
          >
            Помощь
          </router-link>

          <router-link
            :to="{name: 'empty'}"
            :class="styled.columnItem"
          >
            Вопросы и ответы
          </router-link>
        </div>

        <div :class="styled.column">
          <router-link
            :to="{name: 'empty'}"
            :class="styled.columnItem"
          >
            <b>Покупателям</b>
          </router-link>

          <router-link
            :to="{name: 'empty'}"
            :class="styled.columnItem"
          >
            Продавцам
          </router-link>

          <router-link
            :to="{name: 'empty'}"
            :class="styled.columnItem"
          >
            Вопросы и ответы
          </router-link>
        </div>

        <div :class="styled.column">
          <router-link
            :to="{name: 'empty'}"
            :class="styled.columnItem"
          >
            <b>Контакты</b>
          </router-link>

          <a
            href="tel:79272772330"
            :class="styled.columnItem"
          >
            +7 927-277-23-30
          </a>

          <a
            href="mailto:skovalev74@yandex.ru"
            :class="styled.columnItem"
          >
            skovalev74@yandex.ru
          </a>


          <div :class="styled.columnItems">
            <a
              v-for="img in footerImgValue"
              :key="img.id"
              href="#"
              :class="styled.columnItem"
            >
              <component :is="imageMap[img.imgName]" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <router-link
          :to="{name: 'privacyPolicy'}"
          :class="styled.bottomItem"
        >
          Политика конфиденциальности
        </router-link>

        <router-link
          :to="{name: 'contractOffer'}"
          :class="styled.bottomItem"
        >
          Договор оферты
        </router-link>

        <router-link
          :to="{name: 'empty'}"
          :class="styled.bottomItem"
        >
          Обратная связь
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import styled from "./footerBlock.module.css";
import imageMap from "./footerImages";
import {footerImgValue} from "../../../data/footerImgValue";

export default {
  name: "FooterBlock",
  data() {
    return {
      styled,
      imageMap,
      footerImgValue,
    };
  },
};
</script>
