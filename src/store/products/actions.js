import actionNames from "./actionNames";
import {timeoutPromise} from "../../helpers/timeoutPromise";
import {productCardsValue} from "../../../data/productCardsValue";

export default {
    //todo добавить промисификацию, обработку ошибок, лоадинг
    async initProducts({ state, commit, dispatch }) {
        if (state.products.length) {
            return;
        }
        commit(actionNames.SET_LOADING, true);
        const result = await dispatch('getProducts');
        commit(actionNames.SET_PRODUCTS, result);
        commit(actionNames.SET_LOADING, false);
    },
    getProductsTest({commit}, searchParams) {
        const {
            marking,
            citiesFilter,
            accuracyClass,
            bearingType,
            bearingParameter,
            outerDiameter,
            innerDiameter,
            bearingWidth
        } = searchParams;
        const citiesID = citiesFilter.map(city => city.value);
        const isEmptySearchParams = marking === "" && citiesFilter.length === 0 && accuracyClass === ""
            && bearingType === ""  && bearingParameter === ""  && outerDiameter === ""
            && innerDiameter === ""  && bearingWidth === "";

        if(isEmptySearchParams) {
            console.log("покажи все карточки")
            commit(actionNames.SET_PRODUCTS, productCardsValue);
        }

        const filteredProductCard = productCardsValue.filter(productCard => {
            return productCard.name.includes(marking) &&
                   (bearingType ? productCard.type.includes(bearingType) : true) &&
                   ( bearingParameter ? productCard.bearing_parameters.includes(bearingParameter) : true) &&
                   (accuracyClass ? productCard.pr_class === accuracyClass: true) &&
                   (outerDiameter ? productCard.outer_d === +outerDiameter : true) &&
                   (innerDiameter ? productCard.inner_d === +innerDiameter : true) &&
                   (bearingWidth ? productCard.width === +bearingWidth : true) &&
                   ( citiesID.length ? citiesID.includes(productCard.id_city) : true);
        })

        if(filteredProductCard.length === 0) {
            console.log("покажи форму связи с нами, ибо ничего не найдено")
        }

        console.log("покажи отсортированные карточки")
        commit(actionNames.SET_PRODUCTS, filteredProductCard);
    },

    getProducts() {
        return timeoutPromise(productCardsValue, 1000)
    },
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