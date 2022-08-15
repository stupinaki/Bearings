import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

export const companies = {
    state,
    actions,
    mutations,
    namespaced: true,
}