// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as Inkline from 'inkline';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Inkline);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<app/>'
});
