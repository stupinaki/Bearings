import actionNames from "./actionNames";

export default {
    [actionNames.SET_OFFERS](state, offers) {
        state.offers = offers;
    }
}