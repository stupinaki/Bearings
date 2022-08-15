<template>
  <div :class="styled.grocery">
    <div>
      <div :class="styled.description">
        <div>
          <div :class="[styled.descriptionTitle, styled.text]">
            Маркировка
          </div>
          <div :class="[styled.descriptionSubTitle, styled.text]">
            {{ mark }}
          </div>
        </div>
        <div>
          <div :class="[styled.descriptionTitle, styled.text]">
            Цена
          </div>
          <div :class="[styled.descriptionSubTitle, styled.text]">
            {{ priceForOne }} ₽/шт
          </div>
        </div>
        <div>
          <div :class="[styled.descriptionTitle, styled.text]">
            Наличие
          </div>
          <div :class="[styled.descriptionSubTitle, styled.text]">
            {{ availability }} шт
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
              {{ accuracyClass }}
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
              {{ parameter }}
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
              {{ innerDiameter }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="[styled.detailsTitle, styled.text]">
              Внешний диаметр (мм)
            </div>
            <div :class="[styled.detailsSubTitle, styled.text]">
              {{ externalDiameter }}
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

    <div
      v-for="card in getInTouch"
      :key="card.id"
    >
      <GetInTouchCard v-bind="card" />
    </div>
  </div>
</template>

<script>
import styled from "./productCard.module.css";
import GetInTouchCard from "../getInTouchCard/GetInTouchCard.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "GroceryCard",
  components: {
    GetInTouchCard,
  },
  props: {
    mark: {
      type: String,
      default: "-",
    },
    priceForOne: {
      type: String,
      default: "-",
    },
    availability: {
      type: String,
      default: "-",
    },
    accuracyClass: {
      type: String,
      default: "-",
    },
    type: {
      type: String,
      default: "-",
    },
    parameter: {
      type: String,
      default: "-",
    },
    manufacturer: {
      type: String,
      default: "-",
    },
    innerDiameter: {
      type: String,
      default: "-",
    },
    externalDiameter: {
      type: String,
      default: "-",
    },
    width: {
      type: String,
      default: "-",
    },
    weight: {
      type: String,
      default: "-",
    },
  },
  data() {
    return {
      styled,
    };
  },
  beforeMount() {
    this.initGetInTouch();
  },
  methods: {
    ...mapActions("getInTouch", ["initGetInTouch"]),
  },
  computed: {
    ...mapState("getInTouch", ["getInTouch"]),
  }
}
</script>
