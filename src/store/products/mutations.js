import actionNames from "./actionNames";

export default {
    [actionNames.SET_PRODUCTS](state, products) {
        state.products = products;
    },
    [actionNames.SET_SORT_DIRECTION](state, isDesc) {
        state.isOrderDesc = isDesc;
    },
    [actionNames.FILTER_PRODUCTS](state, rangeArray) {
        state.rangeFilter = rangeArray;
    }
}