import actionNames from "./actionNames";
import {fetchRequestCities} from "../../api/fetchRequestCities";

export default {
    async initCities({ state, commit, dispatch }) {
        if (state.cities.length) {
            return;
        }
        try {
            const result = await dispatch('fetchCities');
            commit(actionNames.SET_CITIES, result);
        } catch (error) {
            commit(actionNames.SET_ERROR, true);
        }
    },
    fetchCities() {
        return fetchRequestCities();
    },
}