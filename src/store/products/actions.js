import actionNames from "./actionNames";
import {fetchRequestProducts} from "../../api/fetchRequestProducts";

export default {
    async initProducts({ state, commit, dispatch }, searchParams) {
        commit(actionNames.SET_LOADING, true);

        try {
            const result = await dispatch('fetchProducts', searchParams);
            commit(actionNames.SET_PRODUCTS, result);
            console.log(result, "мы успешно получили карточки");
        } catch (error) {
            commit(actionNames.SET_ERROR, true);
            console.log(error);
        }
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