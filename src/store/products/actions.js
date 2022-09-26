import actionNames from "./actionNames";
import {fetchRequestProducts} from "../../api/fetchRequestProducts";
import {normaliseSearchParams} from "../../helpers/normaliseSearchParams";
import router, { routerNames } from "../../router/router";

export default {
    async initProducts({ state, commit, dispatch }, searchParams) {
        commit(actionNames.SET_LOADING, true);

        const normalSearchParams = normaliseSearchParams(searchParams);
        router.push({path: routerNames.products, query: normalSearchParams})

        try {
            const result = await dispatch('fetchProducts', searchParams);
            commit(actionNames.SET_PRODUCTS, result);
        } catch (error) {
            commit(actionNames.SET_ERROR, true);
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