import actionNames from "./actionNames.js";
import {defaultBearingsSearchParams} from "../../consts/defaultBearingsSearchParams.js";
import cloneDeep from "lodash/cloneDeep";

export default {
    [actionNames.SET_INPUT_VALUE](state, {name, value}) {
        state.searchParams[name] = value;
    },
    [actionNames.SET_ADDITIONAL_VISIBLE](state, value) {
        state.isAdditionalFormVisible = value;
    },
    [actionNames.CLEAR_FORM](state) {
        state.searchParams = cloneDeep(defaultBearingsSearchParams);
    },
    [actionNames.SET_SEARCH_PARAMS](state, searchParams) {
        for(let param in state.searchParams) {
            state.searchParams[param] = searchParams[param];
        }
    }
}