# Badges
Documentation and examples for badges, a small component used for counting and labeling.{.lead}

## Examples
Badges always match the size of the immediate parent element by using relative font sizing and `em` units.

<div class="_margin-bottom-1">
    <h1 class="_margin-top-0">Heading 1 <i-badge variant="primary">New</i-badge></h1>
    <h2 class="_margin-top-0">Heading 2 <i-badge variant="primary">New</i-badge></h2>
    <h3 class="_margin-top-0">Heading 3 <i-badge variant="primary">New</i-badge></h3>
    <h4 class="_margin-top-0">Heading 4 <i-badge variant="primary">New</i-badge></h4>
    <h5 class="_margin-top-0">Heading 5 <i-badge variant="primary">New</i-badge></h5>
    <h6 class="_margin-top-0">Heading 6 <i-badge variant="primary">New</i-badge></h6>
</div>

~~~html
<h1>Heading 1 <i-badge variant="primary">New</i-badge></h1>
<h2>Heading 2 <i-badge variant="primary">New</i-badge></h2>
<h3>Heading 3 <i-badge variant="primary">New</i-badge></h3>
<h4>Heading 4 <i-badge variant="primary">New</i-badge></h4>
<h5>Heading 5 <i-badge variant="primary">New</i-badge></h5>
<h6>Heading 6 <i-badge variant="primary">New</i-badge></h6>
~~~

## Badge Sizes
You're able to use the `size` modifier to control the text and spacing size of your badges, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<div class="_margin-bottom-1">
    <i-badge size="sm">
        Small
    </i-badge>&nbsp; 
    <i-badge size="md">
        Medium
    </i-badge>&nbsp; 
    <i-badge size="lg">
        Large
    </i-badge>
</div>

~~~html
<i-badge size="sm">Small</i-badge>
<i-badge size="md">Medium</i-badge>
<i-badge size="lg">Large</i-badge>
~~~

## Badge Variants
Inkline includes several predefined badge styles, each serving its own semantic purpose, which you can control using the `variant` property.

<div class="_margin-bottom-1">
    <i-badge variant="primary">
        Primary
    </i-badge>&nbsp; 
    <i-badge variant="secondary">
        Secondary
    </i-badge>&nbsp; 
    <i-badge variant="light">
        Light
    </i-badge>&nbsp; 
    <i-badge variant="dark">
        Dark
    </i-badge>&nbsp; 
    <i-badge variant="info">
        Info
    </i-badge>&nbsp; 
    <i-badge variant="sucess">
        Sucess
    </i-badge>&nbsp; 
    <i-badge variant="warning">
        Warning
    </i-badge>&nbsp; 
    <i-badge variant="danger">
        Danger
    </i-badge>
</div>

~~~html
<i-badge variant="primary">Primary</i-badge>
<i-badge variant="secondary">Secondary</i-badge>
<i-badge variant="light">Light</i-badge>
<i-badge variant="dark">Dark</i-badge>
<i-badge variant="info">Info</i-badge>
<i-badge variant="sucess">Success</i-badge>
<i-badge variant="warning">Warning</i-badge>
<i-badge variant="danger">Danger</i-badge>
~~~