import {defaultBearingsSearchParams} from "../consts/defaultBearingsSearchParams";
import {getCitiesOptions} from "./getCitiesOptions";

export function getValidateSearchParamsFromRoute(queryParams, cities) {
    const searchParams = getSearchParamsFromRoute(queryParams);
    const correctCitiesFilter = validationCitiesFilter(searchParams, cities);
    return {
        ...searchParams,
        citiesFilter: correctCitiesFilter,
    };
}

export function getSearchParamsFromRoute(queryParams) {
    const searchParams = {};

    for(let param in defaultBearingsSearchParams) {
        const value = queryParams[param];
        if(value) {
            searchParams[param] = value;
        }
    }
    return searchParams;
}

export function validationCitiesFilter(searchParams, cities) {
    const citiesFilter = searchParams.citiesFilter || [];
    const filteredCities = citiesFilter.map(id => +id);
    const citiesArr = cities.filter(city => filteredCities.includes(city.id));

    return getCitiesOptions(citiesArr);
}
