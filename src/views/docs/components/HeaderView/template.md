# Header
A responsive navigation header that includes support for branding, navigation, forms and more.{.lead}

## Example
Here’s an example of the basic components included in a  `<i-navbar>` that automatically collapses responsively.

<i-header class="_text-center">
    <p class="h1">Inkline Header</p>
    <p>This is a header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>

~~~html
<i-header class="_text-center">
    <h1>Inkline Header</h1>
    <p>This is a header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>
~~~

## Header Sizes
You're able to use the `size` modifier to control the size of your header, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<i-header size="sm" class="_text-center">
    <p class="h1">Small Inkline Header</p>
    <p>This is a small header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>

~~~html
<i-header size="sm" class="_text-center">
    <h1>Small Inkline Header</h1>
    <p>This is a small header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>
~~~

<i-header size="md" class="_text-center">
    <p class="h1">Medium Inkline Header</p>
    <p>This is a medium header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>

~~~html
<i-header size="md" class="_text-center">
    <h1>Medium Inkline Header</h1>
    <p>This is a medium header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>
~~~

<i-header size="lg" class="_text-center">
    <p class="h1">Large Inkline Header</p>
    <p>This is a large header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>

~~~html
<i-header size="lg" class="_text-center">
    <h1>Large Inkline Header</h1>
    <p>This is a large header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>
~~~


## Fullscreen Header
You can make headers cover the whole screen width and height (using `vw` and `vh`) by adding the `fullscreen` property. The width and height do not overflow the size of the parent container.

<i-header fullscreen class="_text-center">
    <p class="h1">Fullscreen Inkline Header</p>
    <p>This is a fullscreen header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>

~~~html
<i-header fullscreen class="_text-center">
    <h1>Fullscreen Inkline Header</h1>
    <p>This is a fullscreen header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>
~~~

## Cover Background Header
The goal of cover background images on a website is to cover the entire browser window at all times. Simply set a background for the header

<i-header id="header" class="_text-center _text-white">
    <p class="h1">Cover Inkline Header</p>
    <p>This is a fullscreen header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>

~~~html
<i-header id="header" class="_text-center _text-white">
    <h1>Cover Inkline Header</h1>
    <p>This is a cover background header paragraph lorem ipsum dolor sit amet.</p>
    <i-button variant="primary">Button</i-button>
</i-header>
~~~

~~~css
#header {
    background-image: url(images/background.jpg);
}
~~~
