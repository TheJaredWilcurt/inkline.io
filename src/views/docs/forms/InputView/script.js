import View from '@/components/View';
import { Input, InputGroup } from 'inkline';

export default {
    extends: View,
    name: 'InputView',
    components: {
        Input,
        InputGroup
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
