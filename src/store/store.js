import {createStore} from "vuex";
import { companies } from "./companies";
import { offers } from "./offers";
import { getInTouch } from  "./getInTouch";
import { products } from "./products";
import {dragAndDrop} from "./dragAndDrop";


const store = createStore({
    modules: {
        companies,
        offers,
        getInTouch,
        products,
        dragAndDrop,
    },
})

export default store;