import actionNames from "./actionNames";

export default {
    [actionNames.SET_MAX_VALUE](state, maxValue) {
       state.maxValue = maxValue;
    },
    [actionNames.SET_MIN_VALUE](state, minValue) {
        state.minValue = minValue;
    },
}