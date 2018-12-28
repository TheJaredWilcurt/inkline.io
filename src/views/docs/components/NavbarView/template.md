# Navbar
A responsive navigation header that includes support for branding, navigation, forms and more.{.lead}

## Example
Here’s an example of the basic components included in a  `<i-navbar>` that automatically collapses responsively.

<i-navbar>
    <i-navbar-brand :to="{ name: 'docs.components.navbar' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Contact</i-nav-item>
        </i-nav>
        <i-nav>
            <i-input placeholder="Type something.." class="_margin-right-1" />
            <i-button variant="primary">Search</i-button>
        </i-nav>
    </i-navbar-items>
</i-navbar>

~~~html
<i-navbar>
    <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
        <i-nav>
            <i-input placeholder="Type something.." class="_margin-right-1" />
            <i-button variant="primary">Search</i-button>
        </i-nav>
    </i-navbar-items>
</i-navbar>
~~~

## Navbar Sizes
You're able to use the `size` modifier to control the size of your navbar, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.


<i-navbar size="sm" class="_margin-bottom-1">
    <i-navbar-brand :to="{ name: 'docs.components.navbar' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

<i-navbar size="md" class="_margin-bottom-1">
    <i-navbar-brand :to="{ name: 'docs.components.navbar' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

<i-navbar size="lg">
    <i-navbar-brand :to="{ name: 'docs.components.navbar' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>


~~~html
<i-navbar size="sm">
    <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

<i-navbar size="md">
    <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

<i-navbar size="lg">
    <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>
~~~

## Navbar Variants
Inkline includes two predefined navbar styles. You can set the style of a `<i-navbar>` using the `variant` property, which can have a value of `light` or `dark`. By default, modals use the `light` variant.

<i-navbar variant="light" class="_margin-bottom-1">
    <i-navbar-brand :to="{ name: 'docs.components.navbar' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

<i-navbar variant="dark">
    <i-navbar-brand :to="{ name: 'docs.components.navbar' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

~~~html
<i-navbar variant="light">
    <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

<i-navbar variant="dark">
    <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>
~~~

## Navbar Dropdown
You can use an `<i-dropdown>` component inside the `<i-navbar-items>` or `<i-nav>` component to create a contextual navbar menu. 

<i-navbar>
    <i-navbar-brand :to="{ name: 'docs.components.navbar' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Contact</i-nav-item>
        </i-nav>
        <i-nav>
            <i-dropdown placement="bottom-end">
                <i-button variant="primary">Dropdown</i-button>
                <i-dropdown-menu>
                    <i-dropdown-item href>Action</i-dropdown-item>
                    <i-dropdown-item href>Another action</i-dropdown-item>
                    <i-dropdown-item href disabled>Something disabled here</i-dropdown-item>
                    <i-dropdown-divider />
                    <i-dropdown-item>Separated item</i-dropdown-item>
                </i-dropdown-menu>
            </i-dropdown>
        </i-nav>
    </i-navbar-items>
</i-navbar>

~~~html
<i-navbar>
    <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
    <i-navbar-items>
        <i-nav>
            <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
        <i-nav>
            <i-dropdown placement="bottom-end">
                <i-button variant="primary">Dropdown</i-button>
                <i-dropdown-menu>
                    <i-dropdown-item href>Action</i-dropdown-item>
                    <i-dropdown-item href>Another action</i-dropdown-item>
                    <i-dropdown-item href disabled>Something disabled here</i-dropdown-item>
                    <i-dropdown-divider />
                    <i-dropdown-item>Separated item</i-dropdown-item>
                </i-dropdown-menu>
            </i-dropdown>
        </i-nav>
    </i-navbar-items>
</i-navbar>
~~~

## Navbar Nav Placement
You can position the `<i-nav>` component to the `start`, `end`, or `center` of the `<i-navbar-items>` component using flexbox utilities.


<i-navbar class="_margin-bottom-1">
    <i-navbar-brand :to="{ name: 'docs.components.navbar' }">Navbar</i-navbar-brand>
    <i-navbar-items class="_justify-content-start">
        <i-nav>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>


<i-navbar class="_margin-bottom-1">
    <i-navbar-brand :to="{ name: 'docs.components.navbar' }">Navbar</i-navbar-brand>
    <i-navbar-items class="_justify-content-center">
        <i-nav>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

<i-navbar>
    <i-navbar-brand :to="{ name: 'docs.components.navbar' }">Navbar</i-navbar-brand>
    <i-navbar-items class="_justify-content-end">
        <i-nav>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'docs.components.navbar' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

~~~html

<i-navbar>
    <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
    <i-navbar-items class="_justify-content-start">
        <i-nav>
            <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

<i-navbar>
    <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
    <i-navbar-items class="_justify-content-center">
        <i-nav>
            <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>

<i-navbar>
    <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
    <i-navbar-items class="_justify-content-end">
        <i-nav>
            <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
            <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
            <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
    </i-navbar-items>
</i-navbar>
~~~