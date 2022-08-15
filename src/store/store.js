import {createStore} from "vuex";
import {companiesCardsValue} from "../../data/companiesCardsValue";
import {productCardsValue} from "../../data/productCardValue";
import {offerCardsValue} from "../../data/offerCardsValue";
import { companies } from "./companies";
import { offers } from "./offers";
import { getInTouch } from  "./getInTouch";


const store = createStore({
    modules: {
        companies,
        offers,
        getInTouch,
    },
    state () {
        return {
            cardsValue: companiesCardsValue,
            productCardsValue: productCardsValue,
            offerCardsValue: offerCardsValue,
        }
    },
})

export default store;