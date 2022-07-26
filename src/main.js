import { createApp } from 'vue'
import App from './App.vue'
import componentsUI from '@/components/UI/index.js'

const app = createApp(App);

console.log(componentsUI)
componentsUI.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app');