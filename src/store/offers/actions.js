import actionNames from "./actionNames";
import {offerCardsValue} from "../../../data/offerCardsValue";


export default {
    initOffers({commit}) {
        commit(actionNames.SET_OFFERS, offerCardsValue);
    },
}