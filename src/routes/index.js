import Vue from 'vue';
import Router from 'vue-router';
import HomeRoutes from '@routes/home';
import DocumentationRoutes from '@routes/docs';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        ...HomeRoutes,
        ...DocumentationRoutes
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});
