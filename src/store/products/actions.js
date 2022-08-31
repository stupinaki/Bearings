import actionNames from "./actionNames";
import {productCardsValue} from "../../../data/productCardsValue";

export default {
    initProducts({commit}) {
        commit(actionNames.SET_PRODUCTS, productCardsValue);
    },
    setSortDirection({commit}, isDesc) {
        commit(actionNames.SET_SORT_DIRECTION, isDesc);
    },
    filterProductsAvailability({commit}, rangeArray) {
        commit(actionNames.FILTER_PRODUCTS, rangeArray)
    },
    cityFilter({commit}, cityId) {
        commit(actionNames.FILTER_CITY, cityId)
    }
}