# Collapsible
Collapsible elements are used to show and hide content. {.lead}

## Example
Collapsing an element will animate the height from zero to its default value. This component is useful for creating clearly separated content sections such as FAQ pages.

<i-collapsible>
    <i-collapsible-item title="Item 1">
        Item 1 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 2">
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 3">
        Item 3 content
    </i-collapsible-item>
</i-collapsible>

~~~html
<i-collapsible>
    <i-collapsible-item title="Item 1">
        Item 1 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 2">
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 3">
        Item 3 content
    </i-collapsible-item>
</i-collapsible>
~~~

## Collapsible Item Title
You can use the `title` slot to provide a custom title for the collapsible panel's heading. 

<i-collapsible>
    <i-collapsible-item>
        <template slot="title">Item 1</template>
        Item 1 content
    </i-collapsible-item>
    <i-collapsible-item>
        <template slot="title">Item 2</template>
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item>
        <template slot="title">Item 3</template>
        Item 3 content
    </i-collapsible-item>
</i-collapsible>

~~~html
<i-collapsible>
    <i-collapsible-item>
        <template slot="title">Item 1</template>
        Item 1 content
    </i-collapsible-item>
    <i-collapsible-item>
        <template slot="title">Item 2</template>
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item>
        <template slot="title">Item 3</template>
        Item 3 content
    </i-collapsible-item>
</i-collapsible>
~~~

## Default Open Panels
Panels can be opened by default, on page load, using the `active` field of the `<i-collapsible>` component. First, you'll need to assign an `id` to the `<i-collapsible-item>` components which will identify the open panels.
 
<i-collapsible :active="active">
    <i-collapsible-item id="panel-1">
        <template slot="title">Item 1</template>
        Item 1 content
    </i-collapsible-item>
    <i-collapsible-item id="panel-2">
        <template slot="title">Item 2</template>
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item id="panel-3">
        <template slot="title">Item 3</template>
        Item 3 content
    </i-collapsible-item>
</i-collapsible>

~~~html
<i-collapsible :active="active">
    <i-collapsible-item id="panel-1">
        <template slot="title">Item 1</template>
        Item 1 content
    </i-collapsible-item>
    <i-collapsible-item id="panel-2">
        <template slot="title">Item 2</template>
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item id="panel-3">
        <template slot="title">Item 3</template>
        Item 3 content
    </i-collapsible-item>
</i-collapsible>
~~~

~~~js
export default {
    data () {
        return {
            active: ['panel-1']
        };
    }
}
~~~

## Accordion
Accordion collapsible groups can have only one content panel open at a single time. This behaviour can be set using the `accordion` property.

<i-collapsible accordion>
    <i-collapsible-item title="Item 1">
        Item 1 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 2">
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 3">
        Item 3 content
    </i-collapsible-item>
</i-collapsible>

~~~html
<i-collapsible accordion>
    <i-collapsible-item title="Item 1">
        Item 1 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 2">
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 3">
        Item 3 content
    </i-collapsible-item>
</i-collapsible>
~~~


## Color Variants
Inkline includes basic predefined collapsible styles that you can use within your application. You can apply a style using the `variant` property.

<i-collapsible variant="light">
    <i-collapsible-item title="Item 1">
        Item 1 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 2">
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 3">
        Item 3 content
    </i-collapsible-item>
</i-collapsible>

<div class="_margin-top-1">
    <i-collapsible variant="dark">
        <i-collapsible-item title="Item 1">
            Item 1 content
        </i-collapsible-item>
        <i-collapsible-item title="Item 2">
            Item 2 content
        </i-collapsible-item>
        <i-collapsible-item title="Item 3">
            Item 3 content
        </i-collapsible-item>
    </i-collapsible>
</div>

~~~html
<i-collapsible accordion>
    <i-collapsible-item title="Item 1">
        Item 1 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 2">
        Item 2 content
    </i-collapsible-item>
    <i-collapsible-item title="Item 3">
        Item 3 content
    </i-collapsible-item>
</i-collapsible>
~~~
