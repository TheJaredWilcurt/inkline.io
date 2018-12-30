# Breadcrumbs
Indicate the current page’s location depth using a navigation list that automatically adds separators using CSS.{.lead}

## Examples
Separators are automatically added in CSS through `::before` and `content`. You can change the separator by changing the `--breadcrumb-separator` stylus variable.

<i-breadcrumb>
    <i-breadcrumb-item active>Home</i-breadcrumb-item>
</i-breadcrumb>

<i-breadcrumb>
    <i-breadcrumb-item href="/">Home</i-breadcrumb-item>
    <i-breadcrumb-item :to="{ name: 'docs' }">Library</i-breadcrumb-item>
    <i-breadcrumb-item active>Data</i-breadcrumb-item>
</i-breadcrumb>

~~~html
<i-breadcrumb>
    <i-breadcrumb-item active>Home</i-breadcrumb-item>
</i-breadcrumb>

<i-breadcrumb>
    <i-breadcrumb-item href="/">Home</i-breadcrumb-item>
    <i-breadcrumb-item :to="{ name: 'docs' }">Library</i-breadcrumb-item>
    <i-breadcrumb-item active>Data</i-breadcrumb-item>
</i-breadcrumb>
~~~

#### Dynamically Generated
You can generate and bind breadcrumbs from your JS data using a combination of `v-for` and `v-bind` as follows:

<i-breadcrumb>
    <i-breadcrumb-item v-bind="item" v-for="item in items" :key="item.title">{{item.title}}</i-breadcrumb-item>
</i-breadcrumb>

<div v-pre>

~~~html
<i-breadcrumb>
    <i-breadcrumb-item v-bind="item" v-for="item in items" :key="item.title">{{item.title}}</i-breadcrumb-item>
</i-breadcrumb>
~~~

~~~js
export default {
    data () {
        return {
            items: [
                { title: 'Home', href: '/' },
                { title: 'Components', to: 'docs.components' },
                { title: 'Breadcrumbs', active: true }
            ]
        };
    }
};
~~~

</div>

## Breadcrumb Sizes
You're able to use the `size` modifier to control the text and spacing size of your breadcrumb, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<i-breadcrumb size="sm">
    <i-breadcrumb-item href="/">Sizes</i-breadcrumb-item>
    <i-breadcrumb-item active>Small</i-breadcrumb-item>
</i-breadcrumb>
<i-breadcrumb size="md">
    <i-breadcrumb-item href="/">Sizes</i-breadcrumb-item>
    <i-breadcrumb-item active>Medium</i-breadcrumb-item>
</i-breadcrumb>
<i-breadcrumb size="lg">
    <i-breadcrumb-item href="/">Sizes</i-breadcrumb-item>
    <i-breadcrumb-item active>Large</i-breadcrumb-item>
</i-breadcrumb>

~~~html
<i-breadcrumb size="sm">
    <i-breadcrumb-item href="/">Sizes</i-breadcrumb-item>
    <i-breadcrumb-item active>Small</i-breadcrumb-item>
</i-breadcrumb>

<i-breadcrumb size="md">
    <i-breadcrumb-item href="/">Sizes</i-breadcrumb-item>
    <i-breadcrumb-item active>Medium</i-breadcrumb-item>
</i-breadcrumb>

<i-breadcrumb size="lg">
    <i-breadcrumb-item href="/">Sizes</i-breadcrumb-item>
    <i-breadcrumb-item active>Large</i-breadcrumb-item>
</i-breadcrumb>
~~~
