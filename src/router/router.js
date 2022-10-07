import {createRouter, createWebHistory} from 'vue-router';
import FAQPage from "../pages/FAQPage/FAQPage.vue";
import HomePage from "../pages/homePage/HomePage.vue";
import EmptyPage from "../pages/emptyPage/EmptyPage.vue";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage.vue";
import ProductsPage from "../pages/productsPage/ProductsPage.vue";
import OneCompanyPage from "../pages/oneCompanyPage/OneCompanyPage.vue";
import CompaniesPage from "../pages/companiesPage/CompaniesPage.vue";
import PrivacyPolicyPage from "../pages/privacyPolicyPage/PrivacyPolicyPage.vue";
import ContractOfferPage from "../pages/contractOfferPage/СontractOfferPage.vue";
import BecomePartnerPage from "../pages/becomePartnerPage/BecomePartnerPage.vue";


export const routerNames = {
    FAQ: "FAQ",
    home: "home",
    empty: "empty",
    products: "products",
    notFound: "notFound",
    companies: "companies",
    oneCompany: "oneCompany",
    privacyPolicy: "privacyPolicy",
    contractOffer: "contractOffer",
    becomePartner: "becomePartner"
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
    {
        path: '/company/:companyId',
        name: routerNames.oneCompany,
        component: OneCompanyPage,
    },
    {
        path: '/become-partner',
        name: routerNames.becomePartner,
        component: BecomePartnerPage,
    },
    {
        path: '/FAQ',
        name: routerNames.FAQ,
        component: FAQPage,
    },
    {
        path: '/:catchAll(.*)',
        // redirect: {name: routerNames.home},
        name: routerNames.notFound,
        component: NotFoundPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
