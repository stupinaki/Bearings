import actionNames from "./actionNames";
import {cities} from "../../../data/cities";

export default {
    initCities({commit}) {
        commit(actionNames.SET_CITIES, cities);
    },
}