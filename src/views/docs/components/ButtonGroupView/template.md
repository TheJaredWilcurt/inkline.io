# Button Groups
Group multiple buttons together on a single line using a button group. {.lead}

## Basic Example
You can group a series of `<i-button>` components inside a `<i-button-group>` to display them inline, conveying additional meaning.

<i-button-group>
    <i-button>Left</i-button>
    <i-button>Middle</i-button>
    <i-button>Right</i-button>
</i-button-group>

~~~html
<i-button-group>
    <i-button">Left</i-button>
    <i-button">Middle</i-button>
    <i-button">Right</i-button>
</i-button-group>
~~~

## Button Group Sizes
You're able to use the `size` modifier to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<div class="_margin-bottom-1">
    <i-button-group size="sm">
        <i-button>Left</i-button>
        <i-button>Middle</i-button>
        <i-button>Right</i-button>
    </i-button-group>
</div>

<div class="_margin-bottom-1">
    <i-button-group size="md">
        <i-button>Left</i-button>
        <i-button>Middle</i-button>
        <i-button>Right</i-button>
    </i-button-group>
</div>

<div class="_margin-bottom-1">
    <i-button-group size="lg">
        <i-button>Left</i-button>
        <i-button>Middle</i-button>
        <i-button>Right</i-button>
    </i-button-group>
</div>

~~~html
<i-button-group size="sm">
    <i-button>Left</i-button>
    <i-button>Middle</i-button>
    <i-button>Right</i-button>
</i-button-group>

<i-button-group size="md">
    <i-button>Left</i-button>
    <i-button>Middle</i-button>
    <i-button>Right</i-button>
</i-button-group>

<i-button-group size="lg">
    <i-button>Left</i-button>
    <i-button>Middle</i-button>
    <i-button>Right</i-button>
</i-button-group>
~~~

## Block Button
You can create block level buttons that span the full width of a parent by adding the `block` property.

<i-button block>Block Button</i-button>

~~~html
<i-button block>Block Button</i-button>
~~~

## Active State
Buttons will appear pressed when active. You can force a button to have an active appearance with the `active` property (this will also include the aria-pressed="true" attribute).

<i-button active>Active Default Button</i-button>
<i-button active theme="primary">Active Primary Button</i-button>

~~~html
<i-button active>Active Default Button</i-button>
<i-button active theme="primary">Active Primary Button</i-button>
~~~

## Disabled State
You can make buttons look inactive or disabled by adding the `disabled` boolean property to an `<i-button>` element.

<i-button disabled>Disabled Default Button</i-button>
<i-button disabled theme="primary">Disabled Primary Button</i-button>

~~~html
<i-button active>Active Default Button</i-button>
<i-button active theme="primary">Active Primary Button</i-button>
~~~

## Button Linking and Routing
Buttons can be used as link anchors using the `href` property, just like you'd use it on the `<a>` tag. You can also
specify a `target` property.

The `<i-button>` component is well integrated with the [Vue Router](https://router.vuejs.org) plugin.
Using `$router.push` behind the scenes, you can easily pass route objects to the component, the same way you would do 
to a `<router-link>`.

<i-button href="http://inkline.io" rel="nofollow">Button Link</i-button>
<i-button :href="{ name: 'docs.components.button' }">Button Route</i-button>

~~~html
<i-button href="http://inkline.io" rel="nofollow">Button Link</i-button>
<i-button :href="{ name: 'docs.components.button' }">Button Route</i-button>
~~~
