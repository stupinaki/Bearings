import {createStore} from "vuex";
import { companies } from "./companies";
import { offers } from "./offers";
import { getInTouch } from  "./getInTouch";
import { products } from "./products"


const store = createStore({
    modules: {
        companies,
        offers,
        getInTouch,
        products,
    },
})

export default store;