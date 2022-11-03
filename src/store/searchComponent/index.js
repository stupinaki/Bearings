import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const searchComponent = {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}