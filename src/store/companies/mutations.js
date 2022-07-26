import actionNames from "./actionNames";

export default {
    [actionNames.SET_LOADING](state, isLoading) {
        state.loading = isLoading;
    },
    [actionNames.SET_COMPANIES](state, companies) {
        state.companies = companies;
    },
    [actionNames.SET_ERROR](state, isError) {
        state.error = isError;
    },
}