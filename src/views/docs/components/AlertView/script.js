import View from '@components/View';
import { IAlert } from 'inkline';

export default {
    name: 'AlertView',
    extends: View,
    components: {
        IAlert
    },
    data() {
        return {
            visible: true
        };
    }
};