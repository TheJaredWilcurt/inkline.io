# Dropdown
Dropdowns are contextual overlays toggled through clicking or hovering, used for displaying a predefined list of links.{.lead}

## Example
Wrap both the dropdown's trigger element (such as an `<i-button>`) and the `<i-dropdown-menu>` inside a `<i-dropdown>` component. The dropdown component will always choose the first child element as a trigger and the last child element as the defined dropdown menu.


<i-dropdown>
    <i-button>Dropdown</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item href disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>


~~~html
<i-dropdown>
    <i-button>Dropdown</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href="">Action</i-dropdown-item>
        <i-dropdown-item :to="{ name: 'home' }">Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>
~~~

## Placement
Trigger dropdown menus at the `top`, `bottom`, `left` or `right` of elements by adding the `placement` property to the parent `<i-dropdown>` element. 

Each of the positions also has a `-start` or `-end` variant (`top-start`, `top-end`, `bottom-start`, etc.) that sets the dropdown to the start or end of the placement instead of centering it. 

<div>
<i-dropdown placement="top">
    <i-button>Dropdown Top</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>&nbsp;

<i-dropdown placement="bottom">
    <i-button>Dropdown Bottom</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>&nbsp;

<i-dropdown placement="left">
    <i-button>Dropdown Left</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>&nbsp;

<i-dropdown placement="right">
    <i-button>Dropdown Right</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>
</div>

~~~html
<i-dropdown placement="top">
    <i-button>Dropdown</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href="">Action</i-dropdown-item>
        <i-dropdown-item :to="{ name: 'home' }">Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>

<i-dropdown placement="bottom">
    <i-button>Dropdown</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href="">Action</i-dropdown-item>
        <i-dropdown-item :to="{ name: 'home' }">Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>

<i-dropdown placement="left">
    <i-button>Dropdown</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href="">Action</i-dropdown-item>
        <i-dropdown-item :to="{ name: 'home' }">Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>

<i-dropdown placement="right">
    <i-button>Dropdown</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href="">Action</i-dropdown-item>
        <i-dropdown-item :to="{ name: 'home' }">Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>
~~~

## Freeform Dropdown
You're not required to use any dropdown-specific components inside of `<i-dropdown-menu>`. You can add your own HTML markup without any issues. You might need additional size styles to constrain the content width

<i-dropdown>
    <i-button>Dropdown</i-button>
    <i-dropdown-menu>
        <span class="_padding-1">This is a freeform content example</span>
    </i-dropdown-menu>
</i-dropdown>&nbsp;

~~~html
<i-dropdown>
    <i-button>Dropdown</i-button>
    <i-dropdown-menu>
        <span class="_padding-1">This is a freeform content example</span>
    </i-dropdown-menu>
</i-dropdown>
~~~

## Trigger type
You can use the `trigger` property to trigger the dropdown on `hover` or `click`. By default, dropdowns are triggered on `click`, a design decision made to improve user experience.

<i-dropdown trigger="click">
    <i-button>Dropdown Click</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>&nbsp;

<i-dropdown trigger="hover">
    <i-button>Dropdown Hover</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>&nbsp;

~~~html
<i-dropdown trigger="click">
    <i-button>Dropdown Click</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href="">Action</i-dropdown-item>
        <i-dropdown-item :to="{ name: 'home' }">Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>

<i-dropdown trigger="hover">
    <i-button>Dropdown Hover</i-button>
    <i-dropdown-menu>
        <i-dropdown-item href="">Action</i-dropdown-item>
        <i-dropdown-item :to="{ name: 'home' }">Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>
~~~

## Dropdown Sizes
You're able to use the `size` modifier to control the size of your dropdown menus, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<div>
<i-dropdown>
    <i-button>Dropdown Small</i-button>
    <i-dropdown-menu size="sm">
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>&nbsp;

<i-dropdown>
    <i-button>Dropdown Medium</i-button>
    <i-dropdown-menu size="md">
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>&nbsp;

<i-dropdown>
    <i-button>Dropdown Large</i-button>
    <i-dropdown-menu size="lg">
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>
</div>

~~~html
<i-dropdown>
    <i-button>Dropdown Small</i-button>
    <i-dropdown-menu size="sm">
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>

<i-dropdown>
    <i-button>Dropdown Medium</i-button>
    <i-dropdown-menu size="md">
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>

<i-dropdown>
    <i-button>Dropdown Large</i-button>
    <i-dropdown-menu size="lg">
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>
~~~


## Dropdown Variants
Inkline includes two predefined dropdown styles, each serving its own semantic purpose. You can set the style of a `<i-dropdown-menu>` using the `variant` property, which can have a value of `light` or `dark`. By default, dropdown menus use the `light` variant.

<div>
<i-dropdown>
    <i-button variant="light">Dropdown Light</i-button>
    <i-dropdown-menu variant="light">
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>&nbsp;

<i-dropdown>
    <i-button variant="dark">Dropdown Dark</i-button>
    <i-dropdown-menu variant="dark">
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>
</div>

~~~html
<i-dropdown>
    <i-button variant="light">Dropdown Light</i-button>
    <i-dropdown-menu variant="light">
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>

<i-dropdown>
    <i-button variant="dark">Dropdown Dark</i-button>
    <i-dropdown-menu variant="dark">
        <i-dropdown-item href>Action</i-dropdown-item>
        <i-dropdown-item href>Another action</i-dropdown-item>
        <i-dropdown-item disabled>Something disabled here</i-dropdown-item>
        <i-dropdown-divider />
        <i-dropdown-item>Separated item</i-dropdown-item>
    </i-dropdown-menu>
</i-dropdown>
~~~