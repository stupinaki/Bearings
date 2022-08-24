import actionNames from "./actionNames";
import {productCardsValue} from "../../../data/productCardsValue";

export default {
    initProducts({commit}) {
        commit(actionNames.SET_PRODUCTS, productCardsValue);
    },
    sortAscendingPrice({commit}) {
        commit(actionNames.SORT_ASCENDING_PRICE);
    },
    sortDescendingPrice({commit}) {
        commit(actionNames.SORT_DESCENDING_PRICE);
    },
    filterProductsAvailability({commit}, rangeArray) {
        commit(actionNames.FILTER_PRODUCTS, rangeArray)
    }
}