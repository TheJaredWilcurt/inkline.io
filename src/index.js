import '@/index.styl';
import '@inkline/inkline/index.styl';
// import '@inkline/inkline/theme/index.styl';
import Inkline from '@inkline/inkline';

import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from '@/App';
import router from '@routes';

fontAwesomeLibrary.add(faInfoCircle);
fontAwesomeLibrary.add(faGithub);

Vue.use(Inkline);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<app/>'
});
