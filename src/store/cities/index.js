import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export const cities = {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
