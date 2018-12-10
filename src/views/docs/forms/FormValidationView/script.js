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
                input: {
                    validators: [
                        { rule: 'required', message: 'Input is required.' }
                    ]
                },
                textarea: {
                    validators: [
                        { rule: 'required', message: 'Textarea is required.', enabled: false }
                    ]
                },
                group: {
                    select: {
                        value: 'a',
                        validators: [
                            { rule: 'required', message: 'Select is required.' }
                        ]
                    },
                    checked: {
                        value: true,
                        validators: [
                            { rule: 'required', message: 'Checkbox is required.' }
                        ]
                    },
                    checkbox: {
                        value: ['Football'],
                        validators: [
                            { rule: 'required', message: 'Checkbox is required.' }
                        ]
                    },
                    radio: {
                        value: 'Accept',
                        validators: [
                            { rule: 'required', message: 'Radio is required.' }
                        ]
                    }
                }
            }),

            listForm: this.$form({
                items: [
                    {
                        validators: [
                            { rule: 'required', message: 'Input is required.' }
                        ]
                    },
                    {},
                    {},
                ]
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
    },
    methods: {
        addField() {
            this.listForm.items.$push({
                validators: [
                    { rule: 'required', message: 'Input is required.' }
                ]
            });
        },
        spliceField() {
            this.listForm.items.$splice(1, 2, {
                validators: [
                    { rule: 'required', message: 'Input is required.' }
                ]
            });
        }
    }
};
