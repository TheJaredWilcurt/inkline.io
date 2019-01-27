import View from '@components/View';
import { IForm, IFormGroup, IFormLabel, IInput, ITextarea, ICheckbox, ICheckboxGroup, IRadio, IRadioGroup } from '@inkline/inkline';

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
            basicForm: this.$form({
                input: {}
            }),
            defaultValueForm: this.$form({
                input: {
                    value: 'Default Value'
                }
            }),
            validateValueForm: this.$form({
                input: {
                    validators: [
                        { rule: 'required', message: 'Input is required' }
                    ]
                }
            }),
            groupedValueForm: this.$form({
                input: {},
                group: {
                    input: {}
                }
            }),
            arrayValueForm: this.$form({
                group: [
                    { value: 'First Field' },
                    { value: 'Second Field' }
                ]
            }),
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
                    { value: 'Existing Field' },
                    { value: 'Existing Field' }
                ]
            }),

            objectForm: this.$form({
                name: {}
            }),
        };
    },
    methods: {
        addField() {
            this.listForm.items.$push({
                value: 'Added Field'
            });
        },
        removeField() {
            this.listForm.items.$splice(0, 1);
        },
        replaceField() {
            this.listForm.items.$splice(0, 1, {
                value: 'Spliced Field'
            });
        },
        setEmail() {
            this.objectForm.$set('email', {
                validators: [
                    { rule: 'email' }
                ]
            }, { instance: this });
        },
        setAddress() {
            this.objectForm.$set('address', {
                value: '32 Inkline St.'
            }, { instance: this });
        }
    },
    filters: {
        prettify (value) {
            return JSON.stringify(value, null, 2);
        }
    }
};
