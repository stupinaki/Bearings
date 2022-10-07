import {timeoutPromise} from "../helpers/timeoutPromise";
import {productCardsValue} from "../../data/productCardsValue";
import isEmpty from "lodash/isEmpty";

export function fetchRequestProducts(searchParams) {
    const {
        marking,
        citiesFilter,
        accuracyClass,
        bearingType,
        bearingParameter,
        outerDiameter,
        innerDiameter,
        bearingWidth,
        companiesFilter,
    } = searchParams || {};

    const isEmptySearchParams = isEmpty(marking) && isEmpty(citiesFilter)
        && isEmpty(accuracyClass) && isEmpty(bearingType) && isEmpty(bearingParameter)
        && isEmpty(outerDiameter) && isEmpty(innerDiameter) && isEmpty(bearingWidth) && isEmpty(companiesFilter);

    if (isEmptySearchParams) {
        return timeoutPromise([...productCardsValue], 500);
    }
    const citiesID = citiesFilter.map(city => city.value);
    const companiesID = companiesFilter.map(company => company.value);

    const data = productCardsValue.filter(productCard => {
        return (marking ? productCard.name.includes(marking) : true) &&
               (bearingType ? productCard.type.includes(bearingType) : true) &&
               (bearingParameter ? productCard.bearing_parameters.includes(bearingParameter) : true) &&
               (accuracyClass ? productCard.pr_class === accuracyClass : true) &&
               (outerDiameter ? productCard.outer_d === +outerDiameter : true) &&
               (innerDiameter ? productCard.inner_d === +innerDiameter : true) &&
               (bearingWidth ? productCard.width === +bearingWidth : true) &&
               (citiesID.length ? citiesID.includes(productCard.id_city) : true) &&
               (companiesID.length ? companiesID.includes(productCard.id_organization) : true) ;
    });
    return timeoutPromise(data, 1000);
}
