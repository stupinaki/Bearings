import {createStore} from "vuex";
import { companies } from "./companies";
import { offers } from "./offers";
import { getInTouch } from  "./getInTouch";
import { products } from "./products"
import {cities} from "./cities";


const store = createStore({
    modules: {
        offers,
        cities,
        products,
        companies,
        getInTouch,
    },

})

export default store;