<template>
  <div :class="styled.grocery">
    <div>
      <div :class="styled.description">
        <div>
          <div :class="styled.descriptionTitle">Маркировка</div>
          <div :class="styled.descriptionSubTitle">
            {{ mark }}
          </div>
        </div>
        <div>
          <div :class="styled.descriptionTitle">Цена</div>
          <div :class="styled.descriptionSubTitle">{{ priceForOne }} ₽/шт</div>
        </div>
        <div>
          <div :class="styled.descriptionTitle">Наличие</div>
          <div :class="styled.descriptionSubTitle">{{ availability }} шт</div>
        </div>
      </div>

      <div :class="styled.details">
        <div>
          <div :class="styled.row">
            <div :class="styled.detailsTitle">Класс точности</div>
            <div :class="styled.detailsSubTitle">
              {{ accuracyClass }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="styled.detailsTitle">Тип</div>
            <div :class="styled.detailsSubTitle">
              {{ type }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="styled.detailsTitle">Параметр</div>
            <div :class="styled.detailsSubTitle">
              {{ parameter }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="styled.detailsTitle">Производитель</div>
            <div :class="styled.detailsSubTitle">
              {{ manufacturer }}
            </div>
          </div>
        </div>

        <div>
          <div :class="styled.row">
            <div :class="styled.detailsTitle">Внутренний диаметр (мм)</div>
            <div :class="styled.detailsSubTitle">
              {{ innerDiameter }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="styled.detailsTitle">Внешний диаметр (мм)</div>
            <div :class="styled.detailsSubTitle">
              {{ externalDiameter }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="styled.detailsTitle">Ширина (мм)</div>
            <div :class="styled.detailsSubTitle">
              {{ width }}
            </div>
          </div>
          <div :class="styled.row">
            <div :class="styled.detailsTitle">Масса (кг)</div>
            <div :class="styled.detailsSubTitle">
              {{ weight }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-for="card in getInTouchCardsValue" :key="card.id">
      <GetInTouchCard v-bind="card" />
    </div>
  </div>
</template>

<script>
import styled from "./groceryCard.module.css";
import GetInTouchCard from "../getInTouchCard/GetInTouchCard.vue";
import { getInTouchCardsValue } from "../../../data/getInTouchCardsValue";

export default {
  name: "GroceryCard",
  data() {
    return {
      styled,
      getInTouchCardsValue,
    };
  },
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
};
</script>
