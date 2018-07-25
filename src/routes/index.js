import Vue from 'vue';
import Router from 'vue-router';
import HomeRoutes from '@routes/home';
import DocumentationRoutes from '@routes/documentation';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        ...HomeRoutes,
        ...DocumentationRoutes
    ]
});
