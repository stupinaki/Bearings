import {createStore} from "vuex";
import { companies } from "./companies";
import { offers } from "./offers";
import { getInTouch } from  "./getInTouch";
import { products } from "./products"
import {cities} from "./cities";
import {mainSearchForm} from "./mainSearchForm";


const store = createStore({
    modules: {
        offers,
        cities,
        products,
        companies,
        getInTouch,
        mainSearchForm,
    },
})

export default store;