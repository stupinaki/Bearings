import actionNames from "./actionNames";
import {productCardsValue} from "../../../data/productCardsValue";

export default {
    //todo добавить промисификацию, обработку ошибок, лоадинг
    initProducts({commit}, searchParams) {

        console.log({productCardsValue, searchParams})
        // const test = productCardsValue.filter(card => card.name === searchParams.marking)
        // const { marking, citiesFilter, accuracyClass, bearingType, bearingParameter, outerDiameter, innerDiameter,  bearingWidth } = searchParams;
        // const arr =  productCardsValue.filter(productCard => {
            // return productCard.name === marking &&
            // productCard.type === bearingType &&
            // productCard.pr_class === accuracyClass &&
            // productCard.outer_d === outerDiameter &&
            // productCard.inner_d === innerDiameter &&
            // productCard.width === bearingWidth &&
            // productCard.bearing_parameters === bearingParameter
            // searchParams.cityFilter.(productCard.id_city)
        // })
        // console.log({arr})
        // if(!arr.length) {
        //     console.log(" ничего не найдено")
        // }
        commit(actionNames.SET_PRODUCTS, productCardsValue);

    },
    // initProducts({commit}) {
    //     commit(actionNames.SET_PRODUCTS, productCardsValue);
    // },
    setSortDirection({commit}, isDesc) {
        commit(actionNames.SET_SORT_DIRECTION, isDesc);
    },
    filterProductsAvailability({commit}, rangeArray) {
        commit(actionNames.FILTER_PRODUCTS, rangeArray)
    },
    cityFilter({commit}, cityId) {
        commit(actionNames.FILTER_CITY, cityId)
    }
}