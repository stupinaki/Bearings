import actionNames from "./actionNames";
import {productCardsValue} from "../../../data/productCardsValue";

export default {
    initProducts({commit}) {
        commit(actionNames.SET_PRODUCTS, productCardsValue);
    },
}