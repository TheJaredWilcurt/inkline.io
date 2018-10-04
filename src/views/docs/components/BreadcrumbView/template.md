# Breadcrumbs
Indicate the current page’s location depth using a navigation list that automatically adds separators using CSS.{.lead}

## Examples
Separators are automatically added in CSS through `::before` and `content`. You can change the separator by changing the `--breadcrumb-separator` stylus variable.

<breadcrumb>
    <breadcrumb-item active>Home</breadcrumb-item>
</breadcrumb>

<breadcrumb>
    <breadcrumb-item href="/">Home</breadcrumb-item>
    <breadcrumb-item :to="{ name: 'docs' }">Library</breadcrumb-item>
    <breadcrumb-item active>Data</breadcrumb-item>
</breadcrumb>

~~~html
<breadcrumb>
    <breadcrumb-item active>Home</breadcrumb-item>
</breadcrumb>

<breadcrumb>
    <breadcrumb-item href="/">Home</breadcrumb-item>
    <breadcrumb-item :to="{ name: 'docs' }">Library</breadcrumb-item>
    <breadcrumb-item active>Data</breadcrumb-item>
</breadcrumb>
~~~

#### Dynamically Generated
You can generate and bind breadcrumbs from your JS data using a combination of `v-for` and `v-bind` as follows:

<breadcrumb>
    <breadcrumb-item v-bind="item" v-for="item in items" :key="item.title">{{item.title}}</breadcrumb-item>
</breadcrumb>

<div v-pre>

~~~html
<breadcrumb>
    <breadcrumb-item v-bind="item" v-for="item in items" :key="item.title">{{item.title}}</breadcrumb-item>
</breadcrumb>
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
    <breadcrumb-item href="/">Sizes</breadcrumb-item>
    <breadcrumb-item active>Small</breadcrumb-item>
</i-breadcrumb>
<i-breadcrumb size="md">
    <breadcrumb-item href="/">Sizes</breadcrumb-item>
    <breadcrumb-item active>Medium</breadcrumb-item>
</i-breadcrumb>
<i-breadcrumb size="lg">
    <breadcrumb-item href="/">Sizes</breadcrumb-item>
    <breadcrumb-item active>Large</breadcrumb-item>
</i-breadcrumb>

~~~html
<i-breadcrumb size="sm">
    <breadcrumb-item href="/">Sizes</breadcrumb-item>
    <breadcrumb-item active>Small</breadcrumb-item>
</i-breadcrumb>

<i-breadcrumb size="md">
    <breadcrumb-item href="/">Sizes</breadcrumb-item>
    <breadcrumb-item active>Medium</breadcrumb-item>
</i-breadcrumb>

<i-breadcrumb size="lg">
    <breadcrumb-item href="/">Sizes</breadcrumb-item>
    <breadcrumb-item active>Large</breadcrumb-item>
</i-breadcrumb>
~~~

## Breadcrumb Variants
Inkline includes basic predefined breadcrumb styles to allow for some breadcrumb styling flexibility depending on their background.

<i-breadcrumb variant="light">
    <breadcrumb-item href="/">Variants</breadcrumb-item>
    <breadcrumb-item active>Light</breadcrumb-item>
</i-breadcrumb>
<i-breadcrumb variant="dark">
    <breadcrumb-item href="/">Variants</breadcrumb-item>
    <breadcrumb-item active>Dark</breadcrumb-item>
</i-breadcrumb>
<i-breadcrumb variant="primary">
    <breadcrumb-item href="/">Variants</breadcrumb-item>
    <breadcrumb-item active>Primary</breadcrumb-item>
</i-breadcrumb>
<i-breadcrumb variant="secondary">
    <breadcrumb-item href="/">Variants</breadcrumb-item>
    <breadcrumb-item active>Secondary</breadcrumb-item>
</i-breadcrumb>

~~~html
<i-breadcrumb size="sm">
    <breadcrumb-item href="/">Sizes</breadcrumb-item>
    <breadcrumb-item active>Small</breadcrumb-item>
</i-breadcrumb>

<i-breadcrumb size="md">
    <breadcrumb-item href="/">Sizes</breadcrumb-item>
    <breadcrumb-item active>Medium</breadcrumb-item>
</i-breadcrumb>

<i-breadcrumb size="lg">
    <breadcrumb-item href="/">Sizes</breadcrumb-item>
    <breadcrumb-item active>Large</breadcrumb-item>
</i-breadcrumb>
~~~