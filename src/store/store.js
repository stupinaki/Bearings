import {createStore} from "vuex";
import {companiesCardsValue} from "../../data/CompaniesCardsValue";
import {getInTouchCardsValue} from "../../data/getInTouchCardsValue";
import {productCardsValue} from "../../data/productCardValue";
import {offerCardsValue} from "../../data/offerCardsValue";


const store = createStore({
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