import View from '@components/View';
import { ISelect, ISelectOption } from '@inkline/inkline';

export default {
    extends: View,
    name: 'SelectView',
    components: {
        ISelect,
        ISelectOption
    },
    data () {
        return {
            selectValue: '',
            disabledSelectValue: '',
            clearableSelectValue: '',
            prefixSelectValue: '',
            suffixSelectValue: '',
            prefixSuffixSelectValue: '',
            prependSelectValue: '',
            appendSelectValue: '',
            prependAppendSelectValue: '',
            smSelectValue: '',
            mdSelectValue: '',
            lgSelectValue: '',
            labelDefaultSelectValue: '',
            labelLeftSelectValue: '',
            labelRightSelectValue: ''
        };
    }
};