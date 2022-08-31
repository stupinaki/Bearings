import actionNames from "./actionNames.js";
import {defaultBearingsSearchParams} from "../../consts/defaultBearingsSearchParams.js";
import cloneDeep from "lodash/cloneDeep";

export default {
    [actionNames.SET_INPUT_VALUE](state, {name, value}) {
        console.log(actionNames.SET_INPUT_VALUE,{name, value})
        state.searchParams[name] = value;
    },
    [actionNames.SET_ADDITIONAL_VISIBLE](state, value) {
        console.log(actionNames.SET_ADDITIONAL_VISIBLE, { value})

        state.isAdditionalFormVisible = value;
    },
    [actionNames.CLEAR_FORM](state) {
        console.log(actionNames.CLEAR_FORM)
        state.searchParams = cloneDeep(defaultBearingsSearchParams);
    }
}