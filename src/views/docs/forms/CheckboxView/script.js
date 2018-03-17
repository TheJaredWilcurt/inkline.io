import View from '@/components/View';
import { Checkbox, CheckboxGroup, CheckboxButton } from 'inkline';

export default {
    extends: View,
    name: 'RadioView',
    components: {
        Checkbox,
        CheckboxGroup,
        CheckboxButton
    },
    data () {
        return {
            checked: true,
            checkList: ['Football', 'Basketball', 'Tennis'],
            checkButtonList: ['Earth']
        };
    }
};
