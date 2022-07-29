<template>
  <div class="grocery">
    <div>
      <div>
        <div>
          <div>Маркировка</div>
          <div>6302cg18</div>
        </div>
        <div>
          <div>Цена</div>
          <div>3.00 ₽/шт</div>
        </div>
        <div>
          <div>Наличие</div>
          <div>320 шт</div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>Класс точности</div>
            <div>6</div>
          </div>
          <div>
            <div>Тип</div>
            <div>6п</div>
          </div>
          <div>
            <div>Параметр</div>
            <div>889</div>
          </div>
          <div>
            <div>Производитель</div>
            <div>ГПЗ 4</div>
          </div>
        </div>

        <div>
          <div>
            <div>Внутренний диаметр (мм)</div>
            <div>5.0</div>
          </div>
          <div>
            <div>Внешний диаметр (мм)</div>
            <div>19.0</div>
          </div>
          <div>
            <div>Ширина (мм)</div>
            <div>6.0</div>
          </div>
          <div>
            <div>Масса (кг)</div>
            <div>0.009</div>
          </div>
        </div>
      </div>
    </div>

    <GetInTouchCard />
  </div>
</template>

<script>
import styled from "./groceryCard.module.css";
import GetInTouchCard from "../getInTouchCard/GetInTouchCard.vue";

export default {
  name: "GroceryCard",
  data() {
    return {
      styled,
    };
  },
  components: {
    GetInTouchCard,
  },
};
</script>

<style scoped></style>
