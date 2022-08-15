import {createStore} from "vuex";
import {companyCardsValue} from "../../data/CompanyCardsValue";
import {getInTouchCardsValue} from "../../data/getInTouchCardsValue";
import {groceryCardsValue} from "../../data/groceryCardValue";
import {offerCardsValue} from "../../data/offerCardsValue";


const store = createStore({
    state () {
        return {
            cardsValue: companyCardsValue,
            getInTouchCardsValue: getInTouchCardsValue,
            groceryCardsValue: groceryCardsValue,
            offerCardsValue: offerCardsValue,
        }
    },
})

export default store;