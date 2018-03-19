import View from '@/components/View';
import { Radio, RadioButton, FormGroup } from 'inkline';

export default {
    extends: View,
    name: 'RadioView',
    components: {
        Radio,
        RadioButton,
        FormGroup
    },
    data () {
        return {
            selected: 'Apple',
            selectedGroup: 'Football',
            selectedButton: 'Earth'
        };
    }
};
