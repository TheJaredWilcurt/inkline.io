<template lang="md" src="./rendering.md" />
<script>
import View from '@components/View';
import {title} from '@helpers/title';
import { IForm, IFormGroup, IFormLabel, IInput, ITextarea, ICheckbox, ICheckboxGroup, IRadio, IRadioGroup } from '@inkline/inkline';

export default {
    extends: View,
    name: 'DataTableRenderingView',
    layout: 'documentation',
    head: {
        title: title('Rendering - Data Table')
    },
    data () {
        return {
            columns: [
                { title: 'Name', key: 'name' },
                { title: 'Address', key: 'address', render: (row) => `${row.address.city}, ${row.address.country}` },
            ],
            rows: [
                { id: '1', name: 'Alice Spring', address: { city: 'Los Angeles', country: 'United States' } },
                { id: '2', name: 'Connie Tenamn', address: { city: 'Munich', country: 'Germany' } },
                { id: '3', name: 'John Reid', address: { city: 'Timisoara', country: 'Romania' } },
                { id: '4', name: 'Robert Smith', address: { city: 'London', country: 'England' } },
                { id: '5', name: 'Lisa Hendricks', address: { city: 'Melbourne', country: 'Australia' } },
            ]
        };
    }
};
</script>
