import View from '@components/View';
import { IInputNumber } from '@inkline';

export default {
    extends: View,
    name: 'InputView',
    components: {
        IInputNumber
    },
    data () {
        return {
            inputValue: '',
            disabledInputValue: '',
            minMaxInputValue: '1',
            precisionInputValue: '',
            clearableInputValue: '',
            prefixInputValue: '',
            suffixInputValue: '',
            prefixSuffixInputValue: '',
            prependInputValue: '',
            appendInputValue: '',
            prependAppendInputValue: '',
            smInputValue: '',
            mdInputValue: '',
            lgInputValue: '',
            labelDefaultInputValue: '',
            labelLeftInputValue: '',
            labelRightInputValue: ''
        };
    }
};
