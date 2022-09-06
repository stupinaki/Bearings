import actionNames from "./actionNames";
import {fetchRequestProducts} from "../../api/fetchRequestProducts";

export default {
    //todo добавить обработку ошибок, лоадинг
    async initProducts({ state, commit, dispatch }, searchParams) {
        commit(actionNames.SET_LOADING, true);
        const result = await dispatch('fetchProducts', searchParams);
        commit(actionNames.SET_PRODUCTS, result);
        commit(actionNames.SET_LOADING, false);
    },
    fetchProducts(_, searchParams) {
        return fetchRequestProducts(searchParams);
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