<template lang="md" src="./definition.md" />
<script>
import View from '@components/View';
import {title} from '@helpers/title';
import { IForm, IFormGroup, IFormLabel, IInput, ITextarea, ICheckbox, ICheckboxGroup, IRadio, IRadioGroup } from '@inkline/inkline';

export default {
    extends: View,
    name: 'FormValidationSchemaView',
    layout: 'documentation',
    head: {
        title: title('Schema - Form Validation')
    },
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
            columns: [
                { title: 'Name', key: 'name' },
                { title: 'Email', key: 'email' },
                { title: 'Age', key: 'age', type: 'number' },
            ],
            rows: [
                { id: '1', name: 'Alice Spring', email: 'alice.spring@email.com',  age: 26 },
                { id: '2', name: 'Connie Tenamn', email: 'connie.tenman@email.com',  age: 30 },
                { id: '3', name: 'John Reid', email: 'john.reid@email.com', age: 28 },
                { id: '4', name: 'Robert Smith', email: 'john.reid@email.com', age: 34 }
            ]
        };
    },
    methods: {
        submitForm() {
            alert('Form submitted!')
        }
    },
    filters: {
        prettify (value) {
            return JSON.stringify(value, null, 2);
        }
    }
};
</script>
