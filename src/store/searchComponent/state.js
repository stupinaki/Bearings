import {defaultBearingsSearchParams} from "../../consts/defaultBearingsSearchParams.js";
import {cloneDeep} from "lodash";

export default() => ({
    isAdditionalFormVisible: false,
    searchParams: cloneDeep(defaultBearingsSearchParams),
})