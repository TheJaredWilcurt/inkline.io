import View from '@/components/View';
import { Textarea, InputGroup } from 'inkline';

export default {
    extends: View,
    name: 'TextareaView',
    components: {
        Textarea,
        InputGroup
    },
    data () {
        return {
            TextareaValue: '',
            disabledTextareaValue: '',
            clearableTextareaValue: '',
            prefixTextareaValue: '',
            suffixTextareaValue: '',
            prefixSuffixTextareaValue: '',
            prependTextareaValue: '',
            appendTextareaValue: '',
            prependAppendTextareaValue: ''
        };
    }
};
