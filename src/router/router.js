import {createRouter, createWebHistory} from 'vue-router';
import FAQPage from "../pages/FAQPage/FAQPage.vue";
import HomePage from "../pages/homePage/HomePage.vue";
import EmptyPage from "../pages/emptyPage/EmptyPage.vue";
import ContactPage from "../pages/contactPage/ContactPage.vue";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage.vue";
import ProductsPage from "../pages/productsPage/ProductsPage.vue";
import OneCompanyPage from "../pages/oneCompanyPage/OneCompanyPage.vue";
import CompaniesPage from "../pages/companiesPage/CompaniesPage.vue";
import PrivacyPolicyPage from "../pages/privacyPolicyPage/PrivacyPolicyPage.vue";
import ContractOfferPage from "../pages/contractOfferPage/СontractOfferPage.vue";
import BecomePartnerPage from "../pages/becomePartnerPage/BecomePartnerPage.vue";
import BearingsArticlesPage from "../pages/ArticlesPage/BearingsArticlesPage.vue";
import CompaniesArticlesPage from "../pages/ArticlesPage/CompaniesArticlesPage.vue";


export const routerNames = {
    FAQ: "FAQ",
    home: "home",
    empty: "empty",
    contacts: "contacts",
    products: "products",
    notFound: "notFound",
    companies: "companies",
    oneCompany: "oneCompany",
    privacyPolicy: "privacyPolicy",
    contractOffer: "contractOffer",
    becomePartner: "becomePartner",
    bearingsArticles: "bearingsArticles",
    companiesArticles: "companiesArticles"
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
        path: '/bearings-articles',
        name: routerNames.bearingsArticles,
        component: BearingsArticlesPage,
    },
    {
        path: '/companies-articles',
        name: routerNames.companiesArticles,
        component: CompaniesArticlesPage,
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
        path: '/contacts',
        name: routerNames.contacts,
        component: ContactPage,
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
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if(to.hash) {
            return;
        }
        return {top: 0};
    },
    history: createWebHistory(),
})

export default router;
