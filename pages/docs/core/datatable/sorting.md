# Data Table Sorting
Inkline's Data Table columns are easily sortable (orderable), in both ascending and descending order. {.lead}

### Sortable Columns
By setting the `sortable` column property to `true`, you can easily add sorting support to a data table column.

~~~js
export default {
    data() {
        return {
            columns: [
                { title: 'Name', key: 'name', sortable: true },
                { title: 'Email', key: 'email', type: 'string', sortable: true },
                { title: 'Date', key: 'date', type: 'date', sortable: true },
                { title: 'Age', key: 'age', type: 'number', sortable: true }
            ],
            rows: [ ... ]
        }
    }
}
~~~

By default, sorting for the `string`, `number` and `Date` value types is supported natively. 

<i-code-preview title="Data Table Sorting" link="https://github.com/inkline/inkline/tree/master/src/components/Datatable/index.vue">

<i-datatable :columns="columns" :rows="rows" />

<template slot="html">

~~~html
<i-datatable :columns="columns" :rows="rows" />
~~~

</template>
<template slot="js">

~~~js
export default {
    data() {
        return {
            columns: [
                { title: 'Name', key: 'name', sortable: true },
                { title: 'Email', key: 'email', sortable: true },
                { title: 'Date', key: 'date', sortable: true },
                { title: 'Age', key: 'age', sortable: true }
            ],
            rows: [
                { id: '1', name: 'Alice Spring', email: 'alice.spring@email.com', date: '2016/04/25', age: 26 },
                { id: '2', name: 'Connie Tenamn', email: 'connie.tenman@email.com', date: '2019/07/07', age: 30 },
                { id: '3', name: 'John Reid', email: 'john.reid@email.com', date: '2018/05/12', age: 28 },
                { id: '4', name: 'Robert Smith', email: 'robert.smith@email.com', date: '2017/08/16', age: 34 }
            ]
        }
    }
}
~~~

</template>
</i-code-preview>
