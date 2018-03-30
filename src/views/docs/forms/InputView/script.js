import View from '@/components/View';
import { IInput, IInputGroup } from 'inkline';

export default {
    extends: View,
    name: 'InputView',
    components: {
        IInput,
        IInputGroup
    },
    data () {
        return {
            inputValue: '',
            disabledInputValue: '',
            clearableInputValue: '',
            prefixInputValue: '',
            suffixInputValue: '',
            prefixSuffixInputValue: '',
            prependInputValue: '',
            appendInputValue: '',
            prependAppendInputValue: ''
        };
    }
};
