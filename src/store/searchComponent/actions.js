import { getSearchParamsFromRoute, parseAndValidateArrValueFromRoute } from "../../helpers/getSearchParamsFromRoute";
import actionNames from "./actionNames.js";
import router from "../../router/router";

export default {
    async initSearchParams({commit, getters}) {
        const queryParams = router.currentRoute.value.query;
        const citiesOptions = getters.allCities;
        const companiesOptions = getters.allCompanies;

        const searchParams = {
            ...getSearchParamsFromRoute(queryParams),
            citiesFilter: parseAndValidateArrValueFromRoute(queryParams.citiesFilter, citiesOptions),
            companiesFilter: parseAndValidateArrValueFromRoute(queryParams.companiesFilter, companiesOptions),
        };
        commit(actionNames.SET_SEARCH_PARAMS, searchParams);
        return searchParams;
    },
    toggleAdditionalForm({commit, state}) {
        commit(actionNames.SET_ADDITIONAL_VISIBLE, !state.isAdditionalFormVisible);
    },
    setInputValue({ commit }, params) {
        commit(actionNames.SET_INPUT_VALUE, params);
    },
    clearSearchParams(context) {
        context.commit(actionNames.CLEAR_FORM);
    }
}