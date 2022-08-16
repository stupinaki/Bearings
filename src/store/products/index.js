import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

export const products = {
    state,
    actions,
    mutations,
    namespaced: true,
}