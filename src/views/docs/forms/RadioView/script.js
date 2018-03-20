import View from '@/components/View';
import { Radio, RadioButton, RadioGroup } from 'inkline';

export default {
    extends: View,
    name: 'RadioView',
    components: {
        Radio,
        RadioButton,
        RadioGroup
    },
    data () {
        return {
            selected: 'Apple',
            selectedGroup: 'Football',
            selectedButton: 'Earth'
        };
    }
};
