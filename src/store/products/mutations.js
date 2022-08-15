import actionNames from "./actionNames";

export default {
    [actionNames.SET_PRODUCTS](state, products) {
        state.products = products;
    }
}