import View from '@components/View';
import { IFormGroup, IInput, ITextarea, ICheckbox, ICheckboxGroup, IRadio, IRadioGroup } from 'inkline';

export default {
    extends: View,
    name: 'FormGroupView',
    components: {
        IFormGroup,
        IInput,
        ITextarea,
        ICheckbox,
        ICheckboxGroup,
        IRadio,
        IRadioGroup
    },
    data () {
        return {
            input: '',
            textarea: '',
            select: '',
            checkbox: ['Football'],
            radio: 'Decline',
            inputDisabled: '',
            textareaDisabled: '',
            selectDisabled: '',
            checkboxDisabled: ['Football'],
            radioDisabled: 'Decline',
        };
    }
};
