import actionNames from "./actionNames";
import {getInTouchCardsValue} from "../../../data/getInTouchCardsValue";


export default {
    initGetInTouch({commit}) {
        commit(actionNames.SET_GET_IN_TOUCH, getInTouchCardsValue);
    },
}