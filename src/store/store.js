import {createStore} from "vuex";
import { companies } from "./companies";
import { offers } from "./offers";
import { getInTouch } from  "./getInTouch";
import {cities} from "./cities";
import {mainSearchForm} from "./mainSearchForm";
import { products } from "./products";
import { filtersRange } from "./filtersRange";


const store = createStore({
    modules: {
        offers,
        cities,
        products,
        companies,
        getInTouch,
        filtersRange,
        mainSearchForm,
    },
})

export default store;