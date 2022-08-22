import actionNames from "./actionNames";

export default {
    [actionNames.SET_GET_IN_TOUCH](state, cities) {
        state.cities = cities;
    },
}