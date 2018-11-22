# Navs
Navs are basic navigation components that provide alignment and spacing between items.{.lead}

## Example
Navigation components make use of the base `<i-nav>` component for building all types of navigation styles. 

<i-nav>
    <i-nav-item href="http://inkline.io">Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }">Router Link</i-nav-item>
    <i-nav-item>Item</i-nav-item>
    <i-nav-item disabled>Disabled</i-nav-item>
</i-nav>

~~~html
<i-nav>
    <i-nav-item href="http://inkline.io">Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }">Router Link</i-nav-item>
    <i-nav-item>Item</i-nav-item>
    <i-nav-item disabled>Disabled</i-nav-item>
</i-nav>
~~~

Behind the scenes, the `<i-nav-item>` is converted into a `<router-link>` if it has the `:to` property, or a plain `<a>` tag if it has a `href` property. Otherwise, it uses a simple `<div>` tag.

## Vertical Nav
You can stack nav items into a vertical navigation component by setting the `vertical` property on your `<i-nav>`.

<i-nav vertical>
    <i-nav-item href="http://inkline.io">Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }">Router Link</i-nav-item>
    <i-nav-item>Item</i-nav-item>
    <i-nav-item disabled>Disabled</i-nav-item>
</i-nav>

~~~html
<i-nav vertical>
    <i-nav-item href="http://inkline.io">Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }">Router Link</i-nav-item>
    <i-nav-item>Item</i-nav-item>
    <i-nav-item disabled>Disabled</i-nav-item>
</i-nav>
~~~

## Nav Sizes
You're able to use the `size` modifier to control the size of your navs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<div>
<i-nav size="sm">
    <i-nav-item href="http://inkline.io">Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }">Router Link</i-nav-item>
    <i-nav-item>Item</i-nav-item>
    <i-nav-item disabled>Disabled</i-nav-item>
</i-nav>&nbsp;

<i-nav size="md">
    <i-nav-item href="http://inkline.io">Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }">Router Link</i-nav-item>
    <i-nav-item>Item</i-nav-item>
    <i-nav-item disabled>Disabled</i-nav-item>
</i-nav>&nbsp;

<i-nav size="lg">
    <i-nav-item href="http://inkline.io">Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }">Router Link</i-nav-item>
    <i-nav-item>Item</i-nav-item>
    <i-nav-item disabled>Disabled</i-nav-item>
</i-nav>
</div>

~~~html
<i-nav size="sm">
    <i-nav-item href="http://inkline.io">Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }">Router Link</i-nav-item>
    <i-nav-item>Item</i-nav-item>
    <i-nav-item disabled>Disabled</i-nav-item>
</i-nav>

<i-nav size="md">
    <i-nav-item href="http://inkline.io">Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }">Router Link</i-nav-item>
    <i-nav-item>Item</i-nav-item>
    <i-nav-item disabled>Disabled</i-nav-item>
</i-nav>

<i-nav size="lg">
    <i-nav-item href="http://inkline.io">Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }">Router Link</i-nav-item>
    <i-nav-item>Item</i-nav-item>
    <i-nav-item disabled>Disabled</i-nav-item>
</i-nav>
~~~


## Active State
You can control the active state of your `<i-nav-item>` using the `active` property. If you're providing a `:to` property, converting it into a `router-link`, you can use the `active-class` and `exact-active-class` properties and set them to `-active`.

<div>
<i-nav>
    <i-nav-item :to="{ name: 'docs.components.nav' }" exact-active-class="-active">Active Router Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }" active>Active Link</i-nav-item>
</i-nav>
</div>

~~~html
<i-nav>
    <i-nav-item :to="{ name: 'docs.components.nav' }" exact-active-class="-active">Active Router Link</i-nav-item>
    <i-nav-item :to="{ name: 'home.index' }" active>Active Link</i-nav-item>
</i-nav>
~~~
