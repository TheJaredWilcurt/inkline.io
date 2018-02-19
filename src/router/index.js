import Vue from 'vue';
import Router from 'vue-router';
import HomeRoutes from '@/router/home';
import LayoutRoutes from '@/router/layout';

Vue.use(Router);

export default new Router({
    routes: [
        ...HomeRoutes,
        ...LayoutRoutes
    ]
});
