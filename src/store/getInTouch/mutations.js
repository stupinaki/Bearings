import actionNames from "./actionNames";

export default {
    [actionNames.SET_GET_IN_TOUCH](state, getInTouch) {
        state.getInTouch = getInTouch;
    },
}