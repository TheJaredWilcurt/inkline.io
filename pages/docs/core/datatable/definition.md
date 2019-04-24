# Data Table Definition
Data tables (or data grids) are tables that have advanced interaction controls such as custom data types, pagination and sorting. {.lead}

### Columns definition
First, you need to define the column titles, keys, types and how they're ordered.

~~~js
export default {
    data() {
        return {
            columns: [
                { title: 'Name', key: 'name' },
                { title: 'Email', key: 'email' },
                { title: 'Age', key: 'age', type: 'number' },
            ]
        }
    }
}
~~~

### Rows definition
The `rows` array represents your data. The `key` field in `columns` corresponds to a value field name in `rows`. 

Each data row should also have a unique `id` field, which will be used internally for identifying the row during rendering.

~~~js
export default {
    data() {
        return {
            columns: [...],
            rows: [
                { id: '1', name: 'Alice Spring', email: 'alice.spring@email.com',  age: 26 },
                { id: '2', name: 'Connie Tenamn', email: 'connie.tenman@email.com',  age: 30 },
                { id: '3', name: 'John Reid', email: 'john.reid@email.com', age: 28 },
                { id: '4', name: 'Robert Smith', email: 'john.reid@email.com', age: 34 }
            ]
        }
    }
}
~~~

### Usage
Let's put it all together. The `columns` defined above, together with the `rows` data will render the following data table:

<i-code-preview title="Data Table Example" link="https://github.com/inkline/inkline/tree/master/src/components/Datatable/index.vue">

<i-datatable :rows="rows" :columns="columns" />

<template slot="html">

~~~html
<i-datatable :rows="rows" :columns="columns" />
~~~

</template>
</i-code-preview>
