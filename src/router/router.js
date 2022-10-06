import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "../pages/homePage/HomePage.vue";
import CompaniesPage from "../pages/companiesPage/CompaniesPage.vue";
import ProductsPage from "../pages/productsPage/ProductsPage.vue";
import EmptyPage from "../pages/emptyPage/EmptyPage.vue";
import ContractOfferPage from "../pages/contractOfferPage/СontractOfferPage.vue";
import PrivacyPolicyPage from "../pages/privacyPolicyPage/PrivacyPolicyPage.vue";
import OneCompanyPage from "../pages/oneCompanyPage/OneCompanyPage.vue";
import BecomePartnerPage from "../pages/becomePartnerPage/BecomePartnerPage.vue";
import FAQPage from "../pages/FAQPage/FAQPage.vue";
// import notFoundPage from "../pages/notFoundPage/notFoundPage.vue";


export const routerNames = {
    home: "home",
    companies: "companies",
    products: "products",
    empty: "empty",
    contractOffer: "contractOffer",
    privacyPolicy: "privacyPolicy",
    oneCompany: "oneCompany",
    notFound: "notFound",
    becomePartner: "becomePartner",
    FAQ: "FAQ"
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
        path: '/*/*',
        redirect: {name: routerNames.home}
        // name: routerNames.notFound,
        // component: notFoundPage,
    },
    // {
    //     path: '*/*',
    //     name: routerNames.notFound,
    //     component: notFoundPage,
    // },
]

//todo страница при неправильном url, redirect

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
