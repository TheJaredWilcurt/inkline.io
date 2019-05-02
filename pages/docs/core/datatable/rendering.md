# Data Table Rendering
Inkline's Data Table columns and rows can be rendered using custom render helpers. {.lead}

Inkline provides three ways to render data table fields:
- Render function
- Custom component
- Scoped slot

### Render Function
By adding a function in the `render` property of the column definition, you can easily provide a way to manipulate data or display it differently. This is the simplest option, the perfect choice when working with simple strings.

~~~js
export default {
    data() {
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
        }
    }
}
~~~

Keep in mind that, by providing a custom `render` function, you will need to provide a custom `sort` function as well.

<i-code-preview title="Data Table Render Function" link="https://github.com/inkline/inkline/tree/master/src/components/Datatable/index.vue">

<i-datatable :columns="columns" :rows="rows" />

<template v-slot:html>

~~~html
<i-datatable :columns="columns" :rows="rows" />
~~~

</template>
<template v-slot:js>

~~~js
export default {
    data() {
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
        }
    }
}
~~~

</template>
</i-code-preview>


### Scoped Slot
By providing a scoped `row` slot, you can render rows as you see fit.

<div v-pre>

~~~html
<i-datatable :columns="columns" :rows="rows">
    <template v-slot:row="row">
        <td>{{row.name}}</td>
        <td>{{row.address.city}}, {{row.address.country}}</td>
    </template>
</i-datatable>
~~~

</div>

Keep in mind that, by providing a custom `render` function, you will need to provide a custom `sort` function as well.

<i-code-preview title="Data Table Render Function" link="https://github.com/inkline/inkline/tree/master/src/components/Datatable/index.vue">

<i-datatable :columns="columns" :rows="rows" />

<template v-slot:html>

~~~html
<i-datatable :columns="columns" :rows="rows" />
~~~

</template>
<template v-slot:js>

~~~js
export default {
    data() {
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
        }
    }
}
~~~

</template>
</i-code-preview>

