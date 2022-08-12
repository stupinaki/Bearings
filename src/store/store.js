import {createStore} from "vuex";
import {benefitsValue} from "../../data/benefitsValue";
import {cardsValue} from "../../data/cardsValue";
import {chipValue} from "../../data/chipValue";
import {footerImgValue} from "../../data/footerImgValue";
import {getInTouchCardsValue} from "../../data/getInTouchCardsValue";
import {groceryCardsValue} from "../../data/groceryCardValue";
import {offerCardsValue} from "../../data/offerCardsValue";
import {questionCardValue} from "../../data/questionCardValue";


const store = createStore({
    state () {
        return {
            benefitsValue: benefitsValue,
            cardsValue: cardsValue,
            chipValue: chipValue,
            footerImgValue: footerImgValue,
            getInTouchCardsValue: getInTouchCardsValue,
            groceryCardsValue: groceryCardsValue,
            offerCardsValue: offerCardsValue,
            questionCardValue: questionCardValue,
            count: 0,
        }
    },
})

export default store;