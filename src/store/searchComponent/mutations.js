import actionNames from "./actionNames.js";

export default {
    [actionNames.TOGGLE_ADDITIONAL_VISIBLE](state) {
        state.isAdditionalFormVisible = !state.isAdditionalFormVisible;
    },
    [actionNames.SET_SEARCH_PARAMS](state, params) {
        state.searchParams[params[0]] = params[1];
        console.log("store searchParams:", state.searchParams)
    },
    [actionNames.CLEAR_FORM](state) {
        state.searchParams = {};
        console.log("store searchParams after clear:", state.searchParams)
    }
}