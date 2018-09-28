import View from '@components/View';
import { IRadio, IRadioButton, IRadioGroup, IRadioButtonGroup } from '@inkline';

export default {
    extends: View,
    name: 'RadioView',
    components: {
        IRadio,
        IRadioButton,
        IRadioGroup,
        IRadioButtonGroup
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
