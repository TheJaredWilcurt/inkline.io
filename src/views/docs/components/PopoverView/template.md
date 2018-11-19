# Popover
Popovers are useful for conveying information when an user hovers over an element.{.lead}

## Example
Wrap both the popover's trigger element (such as an `<i-button>`) and the `<template slot="body">` inside a `<i-popover>` component. Optionally, you can provide a popover header and footer using `slot="header"` and `slot="footer"`.

<i-popover>
    <i-button>Popover</i-button>
    <template slot="header">Popover Header</template>
    <template slot="body">This is the popover body. Useful information goes here.</template>
    <template slot="footer">Popover Footer</template>
</i-popover>

~~~html
<i-popover>
    <i-button>Popover</i-button>
    <template slot="header">Popover Header</template>
    <template slot="body">This is the popover body. Useful information goes here.</template>
    <template slot="footer">Popover Footer</template>
</i-popover>

~~~

## Placement
Trigger popovers at the `top`, `bottom`, `left` or `right` of elements by adding the `placement` property to the `<i-popover>` element. 

Each of the positions also has a `-start` or `-end` variant (`top-start`, `top-end`, `bottom-start`, `bottom-end`, etc.) that sets the popover to the start or end of the placement instead of centering it. 

<div>
<i-popover placement="top">
    <i-button>Top Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>&nbsp;

<i-popover placement="bottom">
    <i-button>Bottom Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>&nbsp;

<i-popover placement="left">
    <i-button>Left Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>&nbsp;

<i-popover placement="right">
    <i-button>Right Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>
</div>

~~~html
<i-popover placement="top">
    <i-button>Top Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>

<i-popover placement="bottom">
    <i-button>Bottom Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>

<i-popover placement="left">
    <i-button>Left Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>

<i-popover placement="right">
    <i-button>Right Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>
~~~

## Trigger type
You can use the `trigger` property to trigger the popover on `focus`, `hover` or `click`. By default, popovers are triggered on `click`, a design decision made to improve user experience.

<i-popover trigger="click">
    <i-button>Click Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>&nbsp;

<i-popover trigger="focus">
    <i-button>Hover Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>&nbsp;

<i-popover trigger="hover">
    <i-button>Hover Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>&nbsp;

~~~html
<i-popover trigger="click">
    <i-button>Click Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>

<i-popover trigger="focus">
    <i-button>Focus Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>&nbsp;

<i-popover trigger="hover">
    <i-button>Hover Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>
~~~

## Popover Sizes
You're able to use the `size` modifier to control the size of your popovers, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<div>
<i-popover size="sm">
    <i-button>Small Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>&nbsp;

<i-popover size="md">
    <i-button>Medium Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>&nbsp;

<i-popover size="lg">
    <i-button>Large Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>
</div>

~~~html
<i-popover size="sm">
    <i-button>Small Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>

<i-popover size="md">
    <i-button>Medium Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>

<i-popover size="lg">
    <i-button>Large Popover</i-button>
    <template slot="body">This is the popover body. Useful information goes here.</template>
</i-popover>
~~~


## Popover Variants
Inkline includes two predefined popover styles, each serving its own semantic purpose. You can set the style of a `<i-popover>` using the `variant` property, which can have a value of `light` or `dark`. By default, popovers use the `light` variant.

<div>
<i-popover variant="light">
    <i-button variant="light">Light Popover</i-button>
    <template slot="header">Popover Header</template>
    <template slot="body">This is the popover body. Useful information goes here.</template>
    <template slot="footer">Popover Footer</template>
</i-popover>&nbsp;

<i-popover variant="dark">
    <i-button variant="dark">Dark Popover</i-button>
    <template slot="header">Popover Header</template>
    <template slot="body">This is the popover body. Useful information goes here.</template>
    <template slot="footer">Popover Footer</template>
</i-popover>
</div>

~~~html
<i-popover variant="light">
    <i-button variant="light">Light Popover</i-button>
    <template slot="header">Popover Header</template>
    <template slot="body">This is the popover body. Useful information goes here.</template>
    <template slot="footer">Popover Footer</template>
</i-popover>

<i-popover variant="dark">
    <i-button variant="dark">Dark Popover</i-button>
    <template slot="header">Popover Header</template>
    <template slot="body">This is the popover body. Useful information goes here.</template>
    <template slot="footer">Popover Footer</template>
</i-popover>
~~~