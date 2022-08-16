import actionNames from "./actionNames";

export default {
    [actionNames.SET_CITIES](state, cities) {
        state.cities = cities;
    },
}