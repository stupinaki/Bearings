import { createApp } from 'vue'
import App from './App.vue'
import componentsUI from '@/components/UI/index.js'

const app = createApp(App);

componentsUI.forEach(componentUI => {
    app.component(componentUI.name, componentUI)
})

app.mount('#app');