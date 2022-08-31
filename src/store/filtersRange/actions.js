import actionNames from "./actionNames";
import {productCardsValue} from "../../../data/productCardsValue.js";

const counts = productCardsValue.map(product => product.count);
const maxValue = Math.max(...counts);
const minValue = Math.min(...counts);

export default {
    initFilterRange({commit}) {
        commit(actionNames.SET_MAX_VALUE, maxValue);
        commit(actionNames.SET_MIN_VALUE, minValue);
    },
}