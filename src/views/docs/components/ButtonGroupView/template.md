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
You're able to use the `size` modifier to control the size of your buttons, using one of the available sizes: `sm`, `md`, and `lg`. 
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

## Nesting
When placing a `<i-button-group>` inside another `<i-button-group>`, you'll get a mixed series of buttons.

<i-button-group>
    <i-button>Button 1</i-button>
    <i-button>Button 2</i-button>
    <i-button-group>
        <i-button>Button 3</i-button>
        <i-button>Button 4</i-button>
    </i-button-group>
</i-button-group>

~~~html
<i-button-group>
    <i-button>Button 1</i-button>
    <i-button>Button 2</i-button>
    <i-button-group>
        <i-button>Button 3</i-button>
        <i-button>Button 4</i-button>
    </i-button-group>
</i-button-group>
~~~

## Vertical Button Group
Using the `vertical` property, you can stack a set of buttons vertically rather than horizontally.

<i-button-group vertical>
    <i-button>Button 1</i-button>
    <i-button>Button 2</i-button>
    <i-button>Button 3</i-button>
</i-button-group>

~~~html
<i-button-group vertical>
    <i-button>Button 1</i-button>
    <i-button>Button 2</i-button>
    <i-button>Button 3</i-button>
</i-button-group>
~~~

## Vertical Button Group Sizes
Just like horizontal button groups, the size of vertical button groups can also be controlled using the `size` modifier. 
The default size is set to `md`.

<div class="_clearfix">
    <div class="_float-left _margin-right-1">
        <i-button-group vertical size="sm">
            <i-button>Left</i-button>
            <i-button>Middle</i-button>
            <i-button>Right</i-button>
        </i-button-group>
    </div>
    <div class="_float-left _margin-right-1">
        <i-button-group vertical size="md">
            <i-button>Left</i-button>
            <i-button>Middle</i-button>
            <i-button>Right</i-button>
        </i-button-group>
    </div>
    <div class="_float-left _margin-right-1">
        <i-button-group vertical size="lg">
            <i-button>Left</i-button>
            <i-button>Middle</i-button>
            <i-button>Right</i-button>
        </i-button-group>
    </div>

</div>

~~~html
<i-button-group vertical size="sm">
    <i-button>Left</i-button>
    <i-button>Middle</i-button>
    <i-button>Right</i-button>
</i-button-group>

<i-button-group vertical size="md">
    <i-button>Left</i-button>
    <i-button>Middle</i-button>
    <i-button>Right</i-button>
</i-button-group>

<i-button-group vertical size="lg">
    <i-button>Left</i-button>
    <i-button>Middle</i-button>
    <i-button>Right</i-button>
</i-button-group>
~~~
