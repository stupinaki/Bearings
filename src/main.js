import { createApp } from 'vue'
import App from './App.vue'
import componentsUI from '@/components/UI';


const app = createApp(App);

//метод component позволяет зарегистрировать компонет глобально
componentsUI.forEach(component => {
    app.component(component.name, component)
})


app.mount('#app');