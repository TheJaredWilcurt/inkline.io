# Modal
Modals are useful for conveying information when an user hovers over an element.{.lead}

## Example
Wrap both the modal's trigger element (such as an `<i-button>`) and the `<template slot="body">` inside a `<i-modal>` component. Optionally, you can provide a modal header and footer using `slot="header"` and `slot="footer"`.

<i-modal>
    <i-button>Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

~~~html
<i-modal>
    <i-button>Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

~~~

## Modal Sizes
You're able to use the `size` modifier to control the size of your modals, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<div>
<i-modal size="sm">
    <i-button>Small Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal size="md">
    <i-button>Medium Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal size="lg">
    <i-button>Large Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>
</div>

~~~html
<i-modal size="sm">
    <i-button>Small Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-modal size="md">
    <i-button>Medium Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-modal size="lg">
    <i-button>Large Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>
~~~


## Modal Variants
Inkline includes two predefined modal styles, each serving its own semantic purpose. You can set the style of a `<i-modal>` using the `variant` property, which can have a value of `light` or `dark`. By default, modals use the `light` variant.

<div>
<i-modal variant="primary">
    <i-button variant="primary">Primary Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal variant="secondary">
    <i-button variant="secondary">Secondary Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal variant="light">
    <i-button variant="light">Light Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal variant="dark">
    <i-button variant="dark">Dark Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal variant="info">
    <i-button variant="dark">Dark Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal variant="success">
    <i-button variant="success">Success Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal variant="warning">
    <i-button variant="warning">Warning Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal variant="danger">
    <i-button variant="danger">Danger Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;
</div>

~~~html
<i-modal variant="light">
    <i-button variant="light">Light Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-modal variant="dark">
    <i-button variant="dark">Dark Modal</i-button>
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>
~~~