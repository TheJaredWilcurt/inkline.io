# Progress
A custom component for displaying progress with support for stacked progress bars.{.lead}

## Example
Progress components are built with two components: a wrapper `<i-progress>` and at least one `<i-progress-bar>`. You can set the width of a progress bar by setting its `value` property.

<i-progress>
    <i-progress-bar value="65" />
</i-progress>

~~~html
<i-progress>
    <i-progress-bar value="65" />
</i-progress>
~~~

## Progress Sizes
You're able to use the `size` modifier to control the size of your progress, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<div class="_margin-bottom-1">
    <i-progress size="sm">
        <i-progress-bar value="65" />
    </i-progress>
</div>

<div class="_margin-bottom-1">
    <i-progress size="md" class="_margin-bottom-1">
        <i-progress-bar value="65" />
    </i-progress>
</div>

<div class="_margin-bottom-1">
    <i-progress size="lg">
        <i-progress-bar value="65" />
    </i-progress>
</div>

~~~html
<i-progress size="sm">
    <i-progress-bar value="65" />
</i-progress>

<i-progress size="md">
    <i-progress-bar value="65" />
</i-progress>

<i-progress size="lg">
    <i-progress-bar value="65" />
</i-progress>
~~~


## Progress Variants
Inkline includes multiple progress styles. You can change the style of a`<i-progress>` to set the background using the `variant` property.

<div class="_margin-bottom-1">
    <i-progress variant="light">
        <i-progress-bar value="65" />
    </i-progress>
</div>

<div class="_margin-bottom-1">
    <i-progress variant="dark">
        <i-progress-bar value="65" />
    </i-progress>
</div>


~~~html
<i-progress variant="light">
    <i-progress-bar value="65" />
</i-progress>

<i-progress variant="dark">
    <i-progress-bar value="65" />
</i-progress>
~~~

## Progress Bar Variants
Inkline includes multiple progress styles. You can change the style of a `<i-progress-bar>` to set the bar color using the `variant` property.

<div class="_margin-bottom-1">
    <i-progress>
        <i-progress-bar variant="primary" value="65" />
    </i-progress>
</div>

<div class="_margin-bottom-1">
    <i-progress>
        <i-progress-bar variant="secondary" value="65" />
    </i-progress>
</div>

<div class="_margin-bottom-1">
    <i-progress>
        <i-progress-bar variant="info" value="65" />
    </i-progress>
</div>

<div class="_margin-bottom-1">
    <i-progress>
        <i-progress-bar variant="success" value="65" />
    </i-progress>
</div>

<div class="_margin-bottom-1">
    <i-progress>
        <i-progress-bar variant="warning" value="65" />
    </i-progress>
</div>

<div class="_margin-bottom-1">
    <i-progress>
        <i-progress-bar variant="danger" value="65" />
    </i-progress>
</div>

~~~html
<i-progress>
    <i-progress-bar variant="primary" value="65" />
</i-progress>

<i-progress>
    <i-progress-bar variant="secondary" value="65" />
</i-progress>

<i-progress>
    <i-progress-bar variant="info" value="65" />
</i-progress>

<i-progress>
    <i-progress-bar variant="success" value="65" />
</i-progress>

<i-progress>
    <i-progress-bar variant="warning" value="65" />
</i-progress>

<i-progress>
    <i-progress-bar variant="danger" value="65" />
</i-progress>
~~~


## Progress Value
Inkline allows you to set a `min` and `max` modifier to calculate the progress based on a meaningful value. The new `min` will represent `0%` and the `max` will represent `100%`.

<div class="_margin-bottom-1">
    <i-progress>
        <i-progress-bar min="100" max="200" value="150" />
    </i-progress>
</div>

~~~html
<i-progress>
    <i-progress-bar min="100" max="200" value="150" />
</i-progress>
~~~

## Stacked Progress Bars
You can add multiple `<i-progress-bar>` inside the `<i-progress>` component to stack them, adding them up to a `100%` percentage.

<div class="_margin-bottom-1">
    <i-progress>
        <i-progress-bar variant="success" value="40" />
        <i-progress-bar variant="warning" value="20" />
        <i-progress-bar variant="danger" value="10" />
    </i-progress>
</div>

~~~html
<i-progress>
    <i-progress-bar variant="success" value="40" />
    <i-progress-bar variant="warning" value="20" />
    <i-progress-bar variant="danger" value="10" />
</i-progress>
~~~
