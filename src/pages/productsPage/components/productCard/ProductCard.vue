<template>
  <div :class="styled.grocery">
    <div>
      <div :class="styled.description">
        <div>
          <div :class="[styled.descriptionTitle, styled.text]">
            Маркировка
          </div>
          <div :class="[styled.descriptionSubTitle, styled.text]">
            {{ name }}
          </div>
        </div>
        <div>
          <div :class="[styled.descriptionTitle, styled.text]">
            Цена
          </div>
          <div :class="[styled.descriptionSubTitle, styled.text]">
            {{ price }} ₽/шт
          </div>
        </div>
        <div>
          <div :class="[styled.descriptionTitle, styled.text]">
            Наличие
          </div>
          <div :class="[styled.descriptionSubTitle, styled.text]">
            {{ count }} шт
          </div>
        </div>
      </div>
      <div :class="styled.details">
        <div>
          <div :class="styled.row">
            <div :class="[styled.detailsTitle, styled.text]">
              Класс точности
            </div>
            <div :class="[styled.detailsSubTitle, styled.text]">
              {{ prClass }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="[styled.detailsTitle, styled.text]">
              Тип
            </div>
            <div :class="[styled.detailsSubTitle, styled.text]">
              {{ type }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="[styled.detailsTitle, styled.text]">
              Параметр
            </div>
            <div :class="[styled.detailsSubTitle, styled.text]">
              {{ bearingParameters }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="[styled.detailsTitle, styled.text]">
              Производитель
            </div>
            <div :class="[styled.detailsSubTitle, styled.text]">
              {{ manufacturer }}
            </div>
          </div>
        </div>

        <div>
          <div :class="styled.row">
            <div :class="[styled.detailsTitle, styled.text]">
              Внутренний диаметр (мм)
            </div>
            <div :class="[styled.detailsSubTitle, styled.text]">
              {{ innerD }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="[styled.detailsTitle, styled.text]">
              Внешний диаметр (мм)
            </div>
            <div :class="[styled.detailsSubTitle, styled.text]">
              {{ outerD }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="[styled.detailsTitle, styled.text]">
              Ширина (мм)
            </div>
            <div :class="[styled.detailsSubTitle, styled.text]">
              {{ width }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="[styled.detailsTitle, styled.text]">
              Масса (кг)
            </div>
            <div :class="[styled.detailsSubTitle, styled.text]">
              {{ weight }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <GetInTouchCard
      v-bind="getInTouchCard"
      :company-id="getInTouchCard.id_org"
    />
  </div>
</template>

<script>
import styled from "./productCard.module.css";
import GetInTouchCard from "../getInTouchCard/GetInTouchCard.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "ProductCard",
  components: {
    GetInTouchCard,
  },
  props: {
    name: {
        type: String,
        default: "-",
      },
    price: {
        type: Number,
        default: null,
      },
    count: {
        type: Number,
        default: null,
      },
    prClass: {
        type: String,
        default: "-",
      },
    type: {
        type: String,
        default: "-",
      },
    bearingParameters: {
        type: String,
        default: "-",
      },
    manufacturer: {
        type: String,
        default: "-",
      },
    innerD: {
        type: Number,
        default: null,
      },
    outerD: {
        type: Number,
        default: null,
      },
    width: {
        type: Number,
        default: null,
      },
    weight: {
        type: Number,
        default: null,
      },
    idOrganization: {
        type: Number,
        default: null,
    }
  },
  data() {
    return {
      styled,
    };
  },
  computed: {
    ...mapState("getInTouch", ["getInTouch"]),
    getInTouchCard() {
      return this.getInTouch.find(card => card.id_org === this.idOrganization);
    }
  },
  beforeMount() {
    this.initGetInTouch();
  },
  methods: {
    ...mapActions("getInTouch", ["initGetInTouch"]),
  }
};
</script>
