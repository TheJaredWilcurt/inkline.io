import View from '@/components/View';
import { Input, FormGroup } from 'inkline';

export default {
    extends: View,
    name: 'InputView',
    components: {
        Input,
        FormGroup
    },
    data () {
        return {
            inputValue: 'Hello world!'
        };
    }
};
