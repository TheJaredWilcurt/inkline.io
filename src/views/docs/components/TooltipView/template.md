# Tooltip
Tooltips are useful for conveying information when an user hovers over an element.{.lead}

## Example
Wrap both the tooltip's trigger element (such as an `<i-button>`) and the `<template slot="tooltip">` inside a `<i-tooltip>` component.


<i-tooltip>
    <i-button>Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>


~~~html
<i-tooltip>
    <i-button>Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>
~~~

## Placement
Trigger tooltips at the `top`, `bottom`, `left` or `right` of elements by adding the `placement` property to the `<i-tooltip>` element. 

Each of the positions also has a `-start` or `-end` variant (`top-start`, `top-end`, `bottom-start`, `bottom-end`, etc.) that sets the tooltip to the start or end of the placement instead of centering it. 

<div>
<i-tooltip placement="top">
    <i-button>Top Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>&nbsp;

<i-tooltip placement="bottom">
    <i-button>Bottom Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>&nbsp;

<i-tooltip placement="left">
    <i-button>Left Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>&nbsp;

<i-tooltip placement="right">
    <i-button>Right Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>
</div>

~~~html
<i-tooltip placement="top">
    <i-button>Top Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>

<i-tooltip placement="bottom">
    <i-button>Bottom Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>

<i-tooltip placement="left">
    <i-button>Left Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>

<i-tooltip placement="right">
    <i-button>Right Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>
~~~

## Freeform Tooltip
Tooltips can contain text of virtually any size. You can control the wrapping and the maximum width of the tooltip by setting `white-space: normal` and a fixed `width` property on the tooltip content.

<div>
<i-tooltip>
    <i-button>Normal Tooltip</i-button>
    <template slot="tooltip">
        This is a <strong>freeform tooltip</strong> with a <u>long text</u>. Its width is not controlled.
    </template>
</i-tooltip>&nbsp;

<i-tooltip>
    <i-button>Fixed Width Tooltip</i-button>
    <div style="white-space: normal; width: 240px" slot="tooltip">
        This is a <strong>freeform tooltip</strong> with a <u>long text</u>. Its width is controlled.
    </div>
</i-tooltip>
</div>

~~~html
<i-tooltip>
    <i-button>Normal Tooltip</i-button>
    <template slot="tooltip">
        This is a <strong>freeform tooltip</strong> with a <u>long text</u>. Its width is not controlled.
    </template>
</i-tooltip>

<i-tooltip>
    <i-button>Fixed Width Tooltip</i-button>
    <div style="white-space: normal; width: 240px" slot="tooltip">
        This is a <strong>freeform tooltip</strong> with a <u>long text</u>. Its width is controlled.
    </div>
</i-tooltip>
~~~

## Trigger type
You can use the `trigger` property to trigger the tooltip on `hover` or `click`. By default, tooltips are triggered on `hover`, a design decision made to improve user experience.

<i-tooltip trigger="click">
    <i-button>Click Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>&nbsp;

<i-tooltip trigger="hover">
    <i-button>Hover Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>&nbsp;

~~~html
<i-tooltip trigger="click">
    <i-button>Click Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>

<i-tooltip trigger="hover">
    <i-button>Hover Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>
~~~

## Tooltip Sizes
You're able to use the `size` modifier to control the size of your tooltips, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<div>
<i-tooltip size="sm">
    <i-button>Small Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>&nbsp;

<i-tooltip size="md">
    <i-button>Medium Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>&nbsp;

<i-tooltip size="lg">
    <i-button>Large Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>
</div>

~~~html
<i-tooltip size="sm">
    <i-button>Small Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>

<i-tooltip size="md">
    <i-button>Medium Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>

<i-tooltip size="lg">
    <i-button>Large Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>
~~~


## Tooltip Variants
Inkline includes two predefined tooltip styles, each serving its own semantic purpose. You can set the style of a `<i-tooltip>` using the `variant` property, which can have a value of `light` or `dark`. By default, tooltips use the `light` variant.

<div>
<i-tooltip variant="light">
    <i-button variant="light">Light Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>&nbsp;

<i-tooltip variant="dark">
    <i-button variant="dark">Dark Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>
</div>

~~~html
<i-tooltip variant="light">
    <i-button variant="light">Light Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>

<i-tooltip variant="dark">
    <i-button variant="dark">Dark Tooltip</i-button>
    <template slot="tooltip">Tooltip</template>
</i-tooltip>
~~~