# Buttons
Inkline provides you with custom button styles with support for multiple sizes, states, and more. { .lead }

## Button Variants
Inkline includes several predefined button styles, each serving its own semantic purpose, with a few extra variants available for more control.

<div>
    <i-button variant="primary">Primary</i-button>&nbsp;
    <i-button variant="secondary">Secondary</i-button>&nbsp;
    <i-button variant="success">Success</i-button>&nbsp;
    <i-button variant="danger">Danger</i-button>&nbsp;
    <i-button variant="warning">Warning</i-button>&nbsp;
    <i-button variant="info">Info</i-button>&nbsp;
    <i-button variant="light">Light</i-button>&nbsp;
    <i-button variant="dark">Dark</i-button>
</div>

~~~html
<i-button variant="primary">Primary</i-button>
<i-button variant="secondary">Secondary</i-button>
<i-button variant="success">Success</i-button>
<i-button variant="danger">Danger</i-button>
<i-button variant="warning">Warning</i-button>
<i-button variant="info">Info</i-button>
<i-button variant="light">Light</i-button>
<i-button variant="dark">Dark</i-button>
~~~

## Button Type
The `<i-button>` component makes use of a `<button>` element markup behind the scenes. Therefore, you can assign a type to it,
just like with the `<button>` element.

<div>
    <i-button type="button">Button</i-button>&nbsp;
    <i-button type="submit">Submit</i-button>&nbsp;
    <i-button type="reset">Reset</i-button>
</div>

~~~html
<i-button type="button">Button</i-button>
<i-button type="submit">Submit</i-button>
<i-button type="reset">Reset</i-button>
~~~

If you need to change the `<button>` node used to render the component, you can use the `tag` property to change it.

<div>
    <i-button tag="a">Link Button</i-button>&nbsp;
    <i-button tag="button" type="button">Button</i-button>&nbsp;
    <i-button tag="button" type="submit">Submit Button</i-button>&nbsp;
    <i-button tag="button" type="reset">Reset Button</i-button>&nbsp;
    <i-button tag="input" type="button" value="Input"></i-button>&nbsp;
    <i-button tag="input" type="submit" value="Submit Input"></i-button>&nbsp;
    <i-button tag="input" type="reset" value="Reset Input"></i-button>
</div>

~~~html
<i-button tag="a">Link Button</i-button>

<i-button tag="button" type="button">Button</i-button>
<i-button tag="button" type="submit">Submit Button</i-button>
<i-button tag="button" type="reset">Reset Button</i-button>

<i-button tag="input" type="button" value="Input"></i-button>
<i-button tag="input" type="submit" value="Submit Input"></i-button>
<i-button tag="input" type="reset" value="Reset Input"></i-button>
~~~


## Outline Buttons
Sometimes, buttons should not stand out so much. Replace the default modifier classes with the `outline` property
to remove background images and colors on any button when not interacted with.

<div>
    <i-button outline variant="primary">Primary</i-button>&nbsp;
    <i-button outline variant="secondary">Secondary</i-button>&nbsp;
    <i-button outline variant="success">Success</i-button>&nbsp;
    <i-button outline variant="danger">Danger</i-button>&nbsp;
    <i-button outline variant="warning">Warning</i-button>&nbsp;
    <i-button outline variant="info">Info</i-button>&nbsp;
    <i-button outline variant="light">Light</i-button>&nbsp;
    <i-button outline variant="dark">Dark</i-button>
</div>

~~~html
<i-button outline variant="primary">Primary</i-button>
<i-button outline variant="secondary">Secondary</i-button>
<i-button outline variant="success">Success</i-button>
<i-button outline variant="danger">Danger</i-button>
<i-button outline variant="warning">Warning</i-button>
<i-button outline variant="info">Info</i-button>
<i-button outline variant="light">Light</i-button>
<i-button outline variant="dark">Dark</i-button>
~~~

## Link Button
You can create link buttons that look the same as normal links. Link buttons will use the `variant` property to set the color of the link.

<div>
    <i-button link variant="primary">Primary</i-button>&nbsp;
    <i-button link variant="secondary">Secondary</i-button>&nbsp;
    <i-button link variant="success">Success</i-button>&nbsp;
    <i-button link variant="danger">Danger</i-button>&nbsp;
    <i-button link variant="warning">Warning</i-button>&nbsp;
    <i-button link variant="info">Info</i-button>&nbsp;
    <i-button link variant="light">Light</i-button>&nbsp;
    <i-button link variant="dark">Dark</i-button>
</div>

~~~html
<i-button link variant="primary">Primary</i-button>
<i-button link variant="secondary">Secondary</i-button>
<i-button link variant="success">Success</i-button>
<i-button link variant="danger">Danger</i-button>
<i-button link variant="warning">Warning</i-button>
<i-button link variant="info">Info</i-button>
<i-button link variant="light">Light</i-button>
<i-button link variant="dark">Dark</i-button>
~~~

## Circle Buttons
Circle buttons are very common when working with icon actions. You can transform buttons into circles using the `circle`
modifier. You're also able to use the `size` modifier to control the size of your circle buttons. 

<div>
    <i-button circle size="sm">S</i-button>&nbsp;
    <i-button circle>M</i-button>&nbsp;
    <i-button circle size="lg">L</i-button>
</div>

~~~html
<i-button circle size="sm">S</i-button>
<i-button circle>M</i-button>
<i-button circle size="lg">L</i-button>
~~~

## Button Sizes
You're able to use the `size` modifier to control the size of your buttons, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<div>
    <i-button size="sm">Small Button</i-button>&nbsp;
    <i-button size="md">Medium Button</i-button>&nbsp;
    <i-button size="lg">Large Button</i-button>
</div>

~~~html
<i-button size="sm">Small Button</i-button>
<i-button size="md">Medium Button</i-button>
<i-button size="lg">Large Button</i-button>
~~~

## Block Button
You can create block level buttons that span the full width of a parent by adding the `block` property.

<i-button block>Block Button</i-button>

~~~html
<i-button block>Block Button</i-button>
~~~

## Active State
Buttons will appear pressed when active. You can force a button to have an active appearance with the `active` property (this will also include the aria-pressed="true" attribute).

<div>
    <i-button active>Active Default Button</i-button>&nbsp;
    <i-button active variant="primary">Active Primary Button</i-button>
</div>

~~~html
<i-button active>Active Default Button</i-button>
<i-button active variant="primary">Active Primary Button</i-button>
~~~

## Disabled State
You can make buttons look inactive or disabled by adding the `disabled` boolean property to an `<i-button>` element.

<div>
    <i-button disabled>Disabled Default Button</i-button>&nbsp;
    <i-button disabled variant="primary">Disabled Primary Button</i-button>
</div>

~~~html
<i-button active>Active Default Button</i-button>
<i-button active variant="primary">Active Primary Button</i-button>
~~~

## Button Linking and Routing
Buttons will be automatically converted to link anchors `<a>` when providing a `href` property. You can also specify `target` and `rel` properties.

The `<i-button>` component is well integrated with the [Vue Router](https://router.vuejs.org) plugin and will be converted to a `<router-link>` when using the `to` property.


<div>
    <i-button href="http://inkline.io">Button Link</i-button>&nbsp;
    <i-button :to="{ name: 'docs.components.button' }">Button Route</i-button>
</div>

~~~html
<i-button href="http://inkline.io">Button Link</i-button>
<i-button :to="{ name: 'docs.components.button' }">Button Route</i-button>
~~~
