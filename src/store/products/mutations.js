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
    },
    [actionNames.FILTER_CITY](state, cityId) {
        state.cityId = cityId;
    },
    [actionNames.SET_LOADING](state, isLoading) {
        state.loading = isLoading;
    },
    [actionNames.SET_ERROR](state, isError) {
        state.error = isError;
    }
}