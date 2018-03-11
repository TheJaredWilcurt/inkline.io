import View from '@/components/View';
import { Radio, RadioGroup, RadioButton } from 'inkline';

export default {
    extends: View,
    name: 'RadioView',
    components: {
        Radio,
        RadioGroup,
        RadioButton
    },
    data () {
        return {
            selectedValue: 'Apple',
            selectedValueGroup: 'Football',
            selectedValueButtonGroup: 'Terra'
        };
    }
};
