import actionNames from "./actionNames";
import {timeoutPromise} from "../../helpers/timeoutPromise";
import {companiesCardsValue} from "../../../data/companiesCardsValue";

export default {
    async initCompanies({ state, commit, dispatch}) {
        if (state.companies.length) {
            return;
        }

        commit(actionNames.SET_LOADING, true);
        const promise = dispatch('getCompanies');

        const consumer = () => {
            promise.then(
                (result) => {
                    commit(actionNames.SET_COMPANIES, result);
                    console.log(result, "мы успешно получили карточки");
                },
                (error) => {
                    commit(actionNames.SET_ERROR, true);
                    console.log(error);
                }
            ).finally( () => {
                commit(actionNames.SET_LOADING, false);
                console.log( "мы в finally");
            })
        }
        consumer();
    },

    getCompanies() {
        // todo replace with real data
        return timeoutPromise(companiesCardsValue, 2000)
    },

}
