import '@/index.styl';
import 'inkline/index.styl';
import 'inkline/theme/index.styl';

import Vue from 'vue';
import App from '@/App';
import router from '@routes';
import Inkline from 'inkline';

Vue.config.productionTip = false;
Vue.use(Inkline);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<app/>'
});
