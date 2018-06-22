# Buttons
Inkline provides you with custom button styles for all important actions with support for multiple sizes, states, and more. { .lead }

## Button Themes
Inkline includes several predefined button styles, each serving its own semantic purpose, with a few extras available for more control.

<i-button theme="primary">Primary</i-button>
<i-button theme="secondary">Secondary</i-button>
<i-button theme="success">Success</i-button>
<i-button theme="danger">Danger</i-button>
<i-button theme="warning">Warning</i-button>
<i-button theme="info">Info</i-button>
<i-button theme="light">Light</i-button>
<i-button theme="dark">Dark</i-button>
<i-button theme="link">Link</i-button>

~~~html
<i-button theme="primary">Primary</i-button>
<i-button theme="secondary">Secondary</i-button>
<i-button theme="success">Success</i-button>
<i-button theme="danger">Danger</i-button>
<i-button theme="warning">Warning</i-button>
<i-button theme="info">Info</i-button>
<i-button theme="light">Light</i-button>
<i-button theme="dark">Dark</i-button>
<i-button theme="link">Link</i-button>
~~~

## Button Type
The `<i-button>` component makes use of a `<button>` element markup behind the scenes. Therefore, you can assign a type to it,
just like with the `<button>` element.

<i-button type="button">Button</i-button>
<i-button type="submit">Submit</i-button>
<i-button type="reset">Reset</i-button>

~~~html
<i-button type="button">Button</i-button>
<i-button type="submit">Submit</i-button>
<i-button type="reset">Reset</i-button>
~~~

If you need to change the `<button>` node used to render the component, you can use the `tag` property to change it.

<i-button tag="a">Link Button</i-button>
<i-button tag="button" type="button">Button</i-button>
<i-button tag="button" type="submit">Submit Button</i-button>
<i-button tag="button" type="reset">Reset Button</i-button>
<i-button tag="input" type="button" value="Input"></i-button>
<i-button tag="input" type="submit" value="Submit Input"></i-button>
<i-button tag="input" type="reset" value="Reset Input"></i-button>

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

<i-button outline theme="primary">Primary</i-button>
<i-button outline theme="secondary">Secondary</i-button>
<i-button outline theme="success">Success</i-button>
<i-button outline theme="danger">Danger</i-button>
<i-button outline theme="warning">Warning</i-button>
<i-button outline theme="info">Info</i-button>
<i-button outline theme="light">Light</i-button>
<i-button outline theme="dark">Dark</i-button>

~~~html
<i-button outline theme="primary">Primary</i-button>
<i-button outline theme="secondary">Secondary</i-button>
<i-button outline theme="success">Success</i-button>
<i-button outline theme="danger">Danger</i-button>
<i-button outline theme="warning">Warning</i-button>
<i-button outline theme="info">Info</i-button>
<i-button outline theme="light">Light</i-button>
<i-button outline theme="dark">Dark</i-button>
~~~


## Flat Buttons
If you do not fancy gradients you can always use the `flat` property. This will convert your button design to one with 
a flat color background.

<i-button flat theme="primary">Primary</i-button>
<i-button flat theme="secondary">Secondary</i-button>
<i-button flat theme="success">Success</i-button>
<i-button flat theme="danger">Danger</i-button>
<i-button flat theme="warning">Warning</i-button>
<i-button flat theme="info">Info</i-button>
<i-button flat theme="light">Light</i-button>
<i-button flat theme="dark">Dark</i-button>
<i-button flat theme="link">Link</i-button>

~~~html
<i-button flat theme="primary">Primary</i-button>
<i-button flat theme="secondary">Secondary</i-button>
<i-button flat theme="success">Success</i-button>
<i-button flat theme="danger">Danger</i-button>
<i-button flat theme="warning">Warning</i-button>
<i-button flat theme="info">Info</i-button>
<i-button flat theme="light">Light</i-button>
<i-button flat theme="dark">Dark</i-button>
<i-button flat theme="link">Link</i-button>
~~~

## Circle Buttons
Circle buttons are very common when working with icon actions. You can transform buttons into circles using the `circle`
modifier. You're also able to use the `size` modifier to control the size of your circle buttons. 

<i-button circle size="sm">S</i-button>
<i-button circle>M</i-button>
<i-button circle size="lg">L</i-button>

~~~html
<i-button circle size="sm">S</i-button>
<i-button circle>M</i-button>
<i-button circle size="lg">L</i-button>
~~~

## Button Sizes
You're able to use the `size` modifier to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<i-button size="sm">Small Button</i-button>
<i-button size="md">Medium Button</i-button>
<i-button size="lg">Large Button</i-button>

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
