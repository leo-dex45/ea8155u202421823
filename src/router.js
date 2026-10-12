import {createRouter} from "vue-router";
import Home from "./shared/presentation/views/home.vue";

const pageNotFound = () => import('./shared/presentation/views/page-not-found.vue');

const routes = [
    {path: '/home', name: 'home', component: Home, meta: {title: 'Home'}},
    {path: '/:pathMatch(.*)*', name: 'page-not-found', component: pageNotFound, meta: {title: 'Page Not Found'}}
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;