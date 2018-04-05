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
            checkedSize: ['Basketball'],
            checkedSizeGroupSm: ['Basketball', 'Tennis'],
            checkedSizeGroupMd: ['Basketball', 'Tennis'],
            checkedSizeGroupLg: ['Basketball', 'Tennis'],
            checkedCustomTrue: ['Basketball'],
            checkedCustomFalse: ['Basketball'],
            checkedButton: ['Earth']
        };
    }
};
