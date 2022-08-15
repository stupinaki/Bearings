import {createStore} from "vuex";
import {companiesCardsValue} from "../../data/companiesCardsValue";
import {getInTouchCardsValue} from "../../data/getInTouchCardsValue";
import {productCardsValue} from "../../data/productCardValue";
import {offerCardsValue} from "../../data/offerCardsValue";
import { companies } from "./companies"


const store = createStore({
    modules: {
        companies,
    },
    state () {
        return {
            cardsValue: companiesCardsValue,
            getInTouchCardsValue: getInTouchCardsValue,
            productCardsValue: productCardsValue,
            offerCardsValue: offerCardsValue,
        }
    },
})

export default store;