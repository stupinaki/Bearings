import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "../../src/pages/HomePage.vue";
import CompaniesPage from "../../src/pages/CompaniesPage.vue";


const routes = [
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/companies',
        component: CompaniesPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
