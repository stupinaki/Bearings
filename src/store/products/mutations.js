import actionNames from "./actionNames";

export default {
    [actionNames.SET_PRODUCTS](state, products) {
        state.products = products;
    },
    [actionNames.SORT_ASCENDING_PRICE](state) {

        state.products = state.products.sort((a, b) => a.priceForOne - b.priceForOne);
    },
    [actionNames.SORT_DESCENDING_PRICE](state) {
        state.products = state.products.sort((a, b) => b.priceForOne - a.priceForOne);
    }
}