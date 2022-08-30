import actionNames from "./actionNames.js";

export default {
    [actionNames.TOGGLE_ADDITIONAL_VISIBLE](state) {
        state.isAdditionalFormVisible = !state.isAdditionalFormVisible;
    },
    [actionNames.SET_SEARCH_PARAMS](state, params) {
        state.searchParams = params;
    }
}