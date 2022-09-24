import {searchParamsNames} from "../consts/searchParamsNames";
import {cities} from "../../data/cities";

export function getStrFromSearchParams(params) {
    const result = [];

    for(let param in params) {
        const value = params[param];
        const isArray = Array.isArray(value);
        const str = isArray ? getCitiesNames(value, param) : getValue(value, param);
        result.push(str);
    }
    return result.join(" ")
}

function getCitiesNames(citiesArr, key) {
    if(!citiesArr.length) {
        return  "";
    }
    return searchParamsNames[key] + ": " + cities
        .filter(city => citiesArr.includes(city.id))
        .map(city => city.name)
        .join(", ");
}

function getValue(value, key) {
    const isValue = !!value;
    if(isValue) {
        return searchParamsNames[key] + ": " + value;
    }
    return "";
}