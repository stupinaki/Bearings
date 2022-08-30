import App from "./App.vue";
import {store} from "./store";
import { createApp } from "vue";
import { loadFonts } from "./plugins/webfontloader";
import vuetify from "./plugins/vuetify";
import router from "./router/router";

loadFonts();

createApp(App)
    .use(router)
    .use(vuetify)
    .use(store)
    .mount("#app");




