import Vue from 'vue';
import Router from 'vue-router';
import HomeRoutes from '@/router/home';
import DocumentationRoutes from '@/router/documentation';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        ...HomeRoutes,
        ...DocumentationRoutes
    ]
});
