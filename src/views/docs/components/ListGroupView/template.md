# List Group
List groups are flexible components used for displaying a list of related content.{.lead}

## Example
List groups support any content inside of them. Take advantage of their flexibility to display list of items properly, as well as vertical navigation.

<i-list-group>
    <i-list-group-item active>Active</i-list-group-item>
    <i-list-group-item href="http://inkline.io">Link</i-list-group-item>
    <i-list-group-item :to="{ name: 'home.index' }">Router Link</i-list-group-item>
    <i-list-group-item>Item</i-list-group-item>
    <i-list-group-item disabled>Disabled</i-list-group-item>
</i-list-group>

~~~html
<i-list-group>
    <i-list-group-item active>Active</i-list-group-item>
    <i-list-group-item href="http://inkline.io">Link</i-list-group-item>
    <i-list-group-item :to="{ name: 'home.index' }">Router Link</i-list-group-item>
    <i-list-group-item>Item</i-list-group-item>
    <i-list-group-item disabled>Disabled</i-list-group-item>
</i-list-group>
~~~

Behind the scenes, the `<i-list-group-item>` is converted into a `<router-link>` if it has the `:to` property, or a plain `<a>` tag if it has a `href` property. Otherwise, it uses a simple `<div>` tag.

## Nav Sizes
You're able to use the `size` modifier to control the padding of your list groups, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<div>
<i-list-group size="sm">
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
</i-list-group>&nbsp;

<i-list-group size="md">
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
</i-list-group>&nbsp;

<i-list-group size="lg">
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
</i-list-group>
</div>

~~~html
<i-list-group size="sm">
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
</i-list-group>&nbsp;

<i-list-group size="md">
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
</i-list-group>&nbsp;

<i-list-group size="lg">
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
</i-list-group>
~~~

## Active State
You can control the active state of your `<i-list-group-item>` using the `active` property. If you're providing a `:to` property, converting it into a `router-link`, you can use the `active-class` and `exact-active-class` properties and set them to `-active`.

<div>
<i-list-group>
    <i-list-group-item :to="{ name: 'docs.components.list-group' }" exact-active-class="-active">Active Router Link</i-list-group-item>
    <i-list-group-item :to="{ name: 'home.index' }" active>Active Link</i-list-group-item>
</i-list-group>
</div>

~~~html
<i-list-group>
    <i-list-group-item :to="{ name: 'docs.components.list-group' }" exact-active-class="-active">Active Router Link</i-list-group-item>
    <i-list-group-item :to="{ name: 'home.index' }" active>Active Link</i-list-group-item>
</i-list-group>
~~~


## Disabled State
You can control the disabled state of your `<i-list-group-item>` using the `disabled` property. 

<div>
<i-list-group>
    <i-list-group-item disabled>Disabled List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
</i-list-group>
</div>

~~~html
<i-list-group>
    <i-list-group-item disabled>Disabled List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
</i-list-group>
~~~

## List Group Border
You can disable the border of your list group by setting the `bordered` property to false. 

<div>
<i-list-group :bordered="false">
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
</i-list-group>
</div>

~~~html
<i-list-group :bordered="false">
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
    <i-list-group-item>List Group Item</i-list-group-item>
</i-list-group>
~~~

## Item Content
The `<i-list-group-item>` accepts any type of content, allowing you to create large sized list group items.

<div>
<i-list-group>
    <i-list-group-item>
        <h4>List Group Heading</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </i-list-group-item>
    <i-list-group-item>
        <h4>List Group Heading</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </i-list-group-item>
    <i-list-group-item>
        <h4>List Group Heading</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </i-list-group-item>
</i-list-group>
</div>

~~~html
<i-list-group>
    <i-list-group-item>
        <h4>List Group Heading</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </i-list-group-item>
    <i-list-group-item>
        <h4>List Group Heading</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </i-list-group-item>
    <i-list-group-item>
        <h4>List Group Heading</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </i-list-group-item>
</i-list-group>
~~~
