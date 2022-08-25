import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters.js";

export const products = {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}