import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const companies = {
    state,
    actions,
    getters,
    mutations,
    namespaced: true,
}