import actionNames from "./actionNames";
import {timeoutPromise} from "../../helpers/timeoutPromise";
import {companiesCardsValue} from "../../../data/companiesCardsValue";

export default {
    async initCompanies({state, commit, dispatch}) {
        if (state.companies.length) {
            return;
        }

        commit(actionNames.SET_LOADING, true);

        try {
            const result = await dispatch('getCompanies');
            commit(actionNames.SET_COMPANIES, result);
        } catch (error) {
            commit(actionNames.SET_ERROR, true);
        }
        commit(actionNames.SET_LOADING, false);
    },

    getCompanies() {
        // todo replace with real data
        return timeoutPromise(companiesCardsValue, 1000)
    },

}
