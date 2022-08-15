import {createStore} from "vuex";
import {companiesCardsValue} from "../../data/companiesCardsValue";
import {offerCardsValue} from "../../data/offerCardsValue";
import { companies } from "./companies";
import { offers } from "./offers";
import { getInTouch } from  "./getInTouch";
import { products } from "./products"


const store = createStore({
    modules: {
        companies,
        offers,
        getInTouch,
        products,
    },
    state () {
        return {
            cardsValue: companiesCardsValue,
            offerCardsValue: offerCardsValue,
        }
    },
})

export default store;