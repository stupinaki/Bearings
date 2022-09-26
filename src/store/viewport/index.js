import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const viewport = {
    state,
    actions,
    getters,
    mutations,
    namespaced: true,
}