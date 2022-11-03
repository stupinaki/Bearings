import {defaultBearingsSearchParams} from "../consts/defaultBearingsSearchParams";

export function parseAndValidateArrValueFromRoute(initValues, allOptions) {
    const parsed = (initValues || []).map(id => +id);
    return allOptions.filter(item => parsed.includes(item.value));
}

export function getSearchParamsFromRoute(queryParams) {
    const searchParams = {};

    for(let param in defaultBearingsSearchParams) {
        const value = queryParams[param];
        searchParams[param] = value || defaultBearingsSearchParams[param];
    }
    return searchParams;
}