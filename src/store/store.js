import {createStore} from "vuex";
import { companies } from "./companies";
import { offers } from "./offers";
import { getInTouch } from  "./getInTouch";
import {cities} from "./cities";
import {searchComponent} from "./searchComponent";
import { products } from "./products";
import { viewport } from "./viewport"


const store = createStore({
    modules: {
        offers,
        cities,
        products,
        viewport,
        companies,
        getInTouch,
        searchComponent,
    },
})

export default store;