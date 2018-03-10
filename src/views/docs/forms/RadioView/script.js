import View from '@/components/View';
import { Radio } from 'inkline';

export default {
    extends: View,
    name: 'RadioView',
    components: {
        Radio
    },
    data () {
        return {
            selectedValue: 'Apple',
            selectedValueDisabled: 'Apple'
        };
    }
};
