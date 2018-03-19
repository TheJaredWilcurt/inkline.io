import View from '@/components/View';
import { Checkbox, CheckboxButton, FormGroup } from 'inkline';

export default {
    extends: View,
    name: 'RadioView',
    components: {
        Checkbox,
        CheckboxButton,
        FormGroup
    },
    data () {
        return {
            checked: true,
            checkedGroup: ['Football', 'Basketball', 'Tennis'],
            checkedButton: ['Earth']
        };
    }
};
