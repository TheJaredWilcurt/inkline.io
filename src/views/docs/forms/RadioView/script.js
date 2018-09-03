import View from '@components/View';
import { IRadio, IRadioButton, IRadioGroup } from '@inkline';

export default {
    extends: View,
    name: 'RadioView',
    components: {
        IRadio,
        IRadioButton,
        IRadioGroup
    },
    data () {
        return {
            selected: 'Apple',
            selectedGroup: 'Football',
            selectedSize: 'Basketball',
            selectedSizeGroupSm: 'Basketball',
            selectedSizeGroupMd: 'Basketball',
            selectedSizeGroupLg: 'Basketball',
            selectedCustomTrue: 'Basketball',
            selectedCustomFalse: 'Basketball',
            selectedButton: 'Earth'
        };
    }
};
