import View from '@/components/View';
import { ICheckbox, ICheckboxButton, ICheckboxGroup } from 'inkline';

export default {
    extends: View,
    name: 'RadioView',
    components: {
        ICheckbox,
        ICheckboxButton,
        ICheckboxGroup
    },
    data () {
        return {
            checked: true,
            checkedGroup: ['Football', 'Basketball', 'Tennis'],
            checkedButton: ['Earth']
        };
    }
};
