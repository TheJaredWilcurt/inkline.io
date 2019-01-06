# Modal
Modals are useful for conveying information when an user hovers over an element.{.lead}

## Example
To create a modal, create an element (such as an `<i-button>`) as a trigger and the `v-model` on an `<i-modal>` component to control its visibility. Everything inside the `<i-modal>` is rendered as the modal body. Optionally, you can provide a modal header and footer using `slot="header"` and `slot="footer"`.

<div>
    <i-button @click="showModal=true">Modal</i-button>
    <i-modal v-model="showModal">
        <template slot="header">Modal Header</template>
        This is the modal body. Useful information goes here.
        <template slot="footer">Modal Footer</template>
    </i-modal>
</div>

~~~html
<i-button @click="visible = true">Modal</i-button>
<i-modal v-model="visible">
    <template slot="header">Modal Header</template>
    This is the modal body. Useful information goes here.
    <template slot="footer">Modal Footer</template>
</i-modal>
~~~

~~~js
export default {
  data () {
    return {
      visible: false
    };
  }
}
~~~

## Modal Sizes
You're able to use the `size` modifier to control the size of your modals, using one of the available sizes: `sm`, `md`, and `lg`. 
The default size is set to `md`.

<div>
    <i-button @click="showModalSm = true">Small Modal</i-button>&nbsp;
    <i-button @click="showModalMd = true">Medium Modal</i-button>&nbsp;
    <i-button @click="showModalLg = true">Large Modal</i-button>
</div>

<i-modal v-model="showModalSm" size="sm">
    <template slot="header">Modal Header</template>
    This is the modal body. Useful information goes here.
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-modal v-model="showModalMd" size="md">
    <template slot="header">Modal Header</template>
    This is the modal body. Useful information goes here.
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-modal v-model="showModalLg" size="lg">
    <template slot="header">Modal Header</template>
    This is the modal body. Useful information goes here.
    <template slot="footer">Modal Footer</template>
</i-modal>

~~~html
<i-button @click="visible = true">Small Modal</i-button>
<i-modal v-model="visible" size="sm">
    <template slot="header">Modal Header</template>
    This is the modal body. Useful information goes here.
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-button @click="visible = true">Medium Modal</i-button>
<i-modal v-model="visible" size="md">
    <template slot="header">Modal Header</template>
    This is the modal body. Useful information goes here.
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-button @click="visible = true">Large Modal</i-button>
<i-modal v-model="visible" size="lg">
    <template slot="header">Modal Header</template>
    This is the modal body. Useful information goes here.
    <template slot="footer">Modal Footer</template>
</i-modal>
~~~

~~~js
export default {
  data () {
    return {
      visible: false
    };
  }
}
~~~

## Modal Variants
Inkline includes two predefined modal styles, each serving its own semantic purpose. You can set the style of a `<i-modal>` using the `variant` property. By default, modals use the `light` variant.

<div>
    <i-button variant="primary" @click="showModalPrimary = true">Primary Modal</i-button>&nbsp;
    <i-button variant="secondary" @click="showModalSecondary = true">Secondary Modal</i-button>&nbsp;
    <i-button variant="light" @click="showModalLight = true">Light Modal</i-button>&nbsp;
    <i-button variant="dark" @click="showModalDark = true">Dark Modal</i-button>&nbsp;
    <i-button variant="info" @click="showModalInfo = true">Info Modal</i-button>&nbsp;
    <i-button variant="success" @click="showModalSuccess = true">Success Modal</i-button>&nbsp;
    <i-button variant="warning" @click="showModalWarning = true">Warning Modal</i-button>&nbsp;
    <i-button variant="danger" @click="showModalDanger = true">Danger Modal</i-button>
</div>

<i-modal variant="primary" v-model="showModalPrimary">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal variant="secondary" v-model="showModalSecondary">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal variant="light" v-model="showModalLight">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>&nbsp;

<i-modal variant="dark" v-model="showModalDark">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-modal variant="info" v-model="showModalInfo">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-modal variant="success" v-model="showModalSuccess">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-modal variant="warning" v-model="showModalWarning">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-modal variant="danger" v-model="showModalDanger">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

~~~html
<i-button variant="primary" @click="visible = true">Primary Modal</i-button>
<i-modal variant="primary" v-model="visible">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-button variant="secondary" @click="visible = true">Secondary Modal</i-button>
<i-modal variant="secondary" v-model="visible">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-button variant="light" @click="visible = true">Light Modal</i-button>
<i-modal variant="light" v-model="visible">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-button variant="dark" @click="visible = true">Dark Modal</i-button>
<i-modal variant="dark" v-model="visible">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-button variant="info" @click="visible = true">Info Modal</i-button>
<i-modal variant="info" v-model="visible">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-button variant="success" @click="visible = true">Success Modal</i-button>
<i-modal variant="success" v-model="visible">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-button variant="warning" @click="visible = true">Warning Modal</i-button>
<i-modal variant="warning" v-model="visible">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>

<i-button variant="danger" @click="visible = true">Danger Modal</i-button>
<i-modal variant="danger" v-model="visible">
    <template slot="header">Modal Header</template>
    <template slot="body">This is the modal body. Useful information goes here.</template>
    <template slot="footer">Modal Footer</template>
</i-modal>
~~~

~~~js
export default {
  data () {
    return {
      visible: false
    };
  }
}
~~~