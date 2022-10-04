import isNil from "lodash/isNil"

export function normaliseSearchParams(searchParams) {
    const obj = {};


    Object.keys(searchParams).filter(v => !isNil(searchParams[v])).forEach(key => {
        const isArray = Array.isArray(searchParams[key]);
        const isEmptyStr = searchParams[key] === "";

        if(isArray) {
            obj[key] = searchParams[key].map(v => v.value) || [];
            return;
        }
        if(!isEmptyStr) {
            obj[key] = searchParams[key];
        }
    });
    return obj;
}
