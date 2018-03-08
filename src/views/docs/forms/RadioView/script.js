import View from '@/components/View';
import { Radio } from 'inkline';

export default {
    name: 'RadioView',
    components: {
        Radio
    },
    data () {
        return {
            radio: '1'
        }
    },
    extends: View
}
