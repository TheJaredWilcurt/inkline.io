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
            selected: 'Apple',
            selectedGroup: 'Football',
            selectedButton: 'Earth'
        };
    }
};
