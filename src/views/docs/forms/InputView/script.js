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
            usernameInputValue: '',
            passwordInputValue: '',
            disabledInputValue: ''
        };
    }
};
