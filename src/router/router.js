import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "../pages/homePage/HomePage.vue";
import CompaniesPage from "../pages/companiesPage/CompaniesPage.vue";
import GroceryPage from "../pages/productsPage/ProductsPage.vue";
import EmptyPage from "../pages/emptyPage/EmptyPage.vue";
import ContractOfferPage from "../pages/contractOfferPage/СontractOfferPage.vue";
import PrivacyPolicyPage from "../pages/privacyPolicyPage/PrivacyPolicyPage.vue";


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
        path: '/products',
        name: "products",
        component: GroceryPage,
    },
    {
        path: '/empty',
        name: "empty",
        component: EmptyPage,
    },
    {
        path: '/contract-offer',
        name: "contractOffer",
        component: ContractOfferPage,
    },
    {
        path: '/privacy-policy',
        name: "privacyPolicy",
        component: PrivacyPolicyPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
