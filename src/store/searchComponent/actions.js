import actionNames from "./actionNames.js";

export default {
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