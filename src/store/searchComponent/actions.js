import actionNames from "./actionNames.js";
import {getValidateSearchParamsFromRoute} from "../../helpers/getSearchParamsFromRoute";
import {defaultBearingsSearchParams} from "../../consts/defaultBearingsSearchParams";
import router from "../../router/router";

export default {
    async initSearchParams({commit, dispatch}) {
        const queryParams = router.currentRoute.value.query;
        const cities = await dispatch("cities/receiveCities", null, { root: true });
        const searchParamsFromRoute = getValidateSearchParamsFromRoute(queryParams, cities);
        const searchParams = {...defaultBearingsSearchParams, ...searchParamsFromRoute };

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