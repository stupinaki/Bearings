import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "../pages/homePage/HomePage.vue";
import CompaniesPage from "../pages/companiesPage/CompaniesPage.vue";
import ProductsPage from "../pages/productsPage/ProductsPage.vue";
import EmptyPage from "../pages/emptyPage/EmptyPage.vue";
import ContractOfferPage from "../pages/contractOfferPage/СontractOfferPage.vue";
import PrivacyPolicyPage from "../pages/privacyPolicyPage/PrivacyPolicyPage.vue";


export const routerNames = {
    home: "home",
    companies: "companies",
    products: "products",
    empty: "empty",
    contractOffer: "contractOffer",
    privacyPolicy: "privacyPolicy",
}

const routes = [
    {
        path: '/',
        name: routerNames.home,
        component: HomePage
    },
    {
        path: '/companies',
        name: routerNames.companies,
        component: CompaniesPage,
    },
    {
        path: '/products',
        name: routerNames.products,
        component: ProductsPage,
    },
    {
        path: '/empty',
        name: routerNames.empty,
        component: EmptyPage,
    },
    {
        path: '/contract-offer',
        name: routerNames.contractOffer,
        component: ContractOfferPage,
    },
    {
        path: '/privacy-policy',
        name: routerNames.privacyPolicy,
        component: PrivacyPolicyPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
