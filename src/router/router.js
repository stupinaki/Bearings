import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "../../src/pages/HomePage.vue";
import CompaniesPage from "../../src/pages/CompaniesPage.vue";
import GroceryPage from "../pages/GroceryPage.vue";


const routes = [
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/companies',
        component: CompaniesPage,
    },
    {
        path: '/grocery',
        component: GroceryPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
