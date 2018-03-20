import View from '@/components/View';
import { Checkbox, CheckboxButton, CheckboxGroup } from 'inkline';

export default {
    extends: View,
    name: 'RadioView',
    components: {
        Checkbox,
        CheckboxButton,
        CheckboxGroup
    },
    data () {
        return {
            checked: true,
            checkedGroup: ['Football', 'Basketball', 'Tennis'],
            checkedButton: ['Earth']
        };
    }
};
