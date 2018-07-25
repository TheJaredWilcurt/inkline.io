import '@inkline/resources/css/index.styl';
import '@resources/css/index.styl';

import Vue from 'vue';
import App from '@/App';
import router from '@routes';

import * as Inkline from '@inkline';

Vue.config.productionTip = false;
Vue.use(Inkline);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<app/>'
});
