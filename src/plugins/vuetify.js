// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { aliases } from 'vuetify/iconsets/mdi'
import PlaceImg from "../assets/place.svg"

// Vuetify
import {createVuetify} from "vuetify";

export default createVuetify({
    icons: {
        aliases: {
            ...aliases,
            customPlaceSvg: PlaceImg,
        },
    }
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
