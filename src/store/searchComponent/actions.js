import actionNames from "./actionNames.js";

export default {
    toggleAdditionalForm(context) {
        context.commit(actionNames.TOGGLE_ADDITIONAL_VISIBLE);
    },
    initSearchParams(context, params) {
        context.commit(actionNames.SET_SEARCH_PARAMS, params);
    },
    clearForm(context) {
        context.commit(actionNames.CLEAR_FORM);
    }
}