import View from '@components/View';
import { IForm, IFormGroup, IFormLabel, IInput, ITextarea, ICheckbox, ICheckboxGroup, IRadio, IRadioGroup } from 'inkline';

export default {
    extends: View,
    name: 'FormValidationView',
    components: {
        IForm,
        IFormGroup,
        IFormLabel,
        IInput,
        ITextarea,
        ICheckbox,
        ICheckboxGroup,
        IRadio,
        IRadioGroup
    },
    data () {
        return {
            form: this.$form({
                requiredInput: {
                    value: '',
                    validators: [
                        { rule: 'required', message: 'Input is required.' }
                    ]
                },
                formGroup: this.$form({
                    requiredInput: {
                        value: 'Default Value',
                        validators: [
                            { rule: 'required', message: 'Input is required.' }
                        ]
                    }
                })
            }),

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
            inputSizeSm: '',
            textareaSizeSm: '',
            selectSizeSm: '',
            checkboxSizeSm: ['Football'],
            radioSizeSm: 'Decline',
            inputSizeMd: '',
            textareaSizeMd: '',
            selectSizeMd: '',
            checkboxSizeMd: ['Football'],
            radioSizeMd: 'Decline',
            inputSizeLg: '',
            textareaSizeLg: '',
            selectSizeLg: '',
            checkboxSizeLg: ['Football'],
            radioSizeLg: 'Decline',
            inputNested: '',
            passwordNested: '',
            textareaNested: '',
            selectNested: '',
            checkboxNested: ['Football'],
            radioNested: 'Decline',
        };
    }
};
