import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "../pages/homePage/HomePage.vue";
import CompaniesPage from "../pages/companiesPage/CompaniesPage.vue";
import GroceryPage from "../pages/groceryPage/GroceryPage.vue";
import EmptyPage from "../pages/emptyPage/EmptyPage.vue";


const routes = [
    {
        path: '/home',
        name: "home",
        component: HomePage
    },
    {
        path: '/companies',
        name: "companies",
        component: CompaniesPage,
    },
    {
        path: '/grocery',
        name: "grocery",
        component: GroceryPage,
    },
    {
        path: '/empty',
        name: "empty",
        component: EmptyPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
