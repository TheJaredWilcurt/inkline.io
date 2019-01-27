# Form Label
Form component used to add text labels to inputs. { .lead }

## Basic Label
You can add a label to your input by grouping an `<i-form-label>` and any input component inside an `<i-form-group>`. 

<i-form-group>
    <i-form-label>Input Label Default</i-form-label>
    <i-input v-model="labelInputValue" placeholder="Type something.." />
</i-form-group>

~~~html
<i-form-group>
    <i-form-label>Input Label Default</i-form-label>
    <i-input v-model="value" placeholder="Type something.." />
</i-form-group>
~~~

~~~js
export default {
  data () {
    return {
      value: ''
    };
  }
}
~~~

## Label Position
You can add labels to either side of your input using the `label` slot, together with the optional `label-position` property.

<i-form-group>
    <i-form-label>Input Label Default</i-form-label>
    <i-input v-model="labelDefaultInputValue" placeholder="Type something.." />
</i-form-group>

<i-form-group inline>
    <i-form-label placement="left">Input Label Left</i-form-label>
    <i-input v-model="labelLeftInputValue" placeholder="Type something.." />
</i-form-group>

<i-form-group inline>
    <i-form-label placement="right">Input Label Right</i-form-label>
    <i-input v-model="labelRightInputValue" placeholder="Type something.." />
</i-form-group>

~~~html
<i-form-group>
    <i-form-label>Input Label Default</i-form-label>
    <i-input v-model="value" placeholder="Type something.." />
</i-form-group>

<i-form-group inline>
    <i-form-label placement="left">Input Label Left</i-form-label>
    <i-input v-model="value" placeholder="Type something.." />
</i-form-group>

<i-form-group inline>
    <i-form-label placement="right">Input Label Right</i-form-label>
    <i-input v-model="value" placeholder="Type something.." />
</i-form-group>
~~~

~~~js
export default {
  data () {
    return {
      value: ''
    };
  }
}
~~~

## Label Size
You're able to use the `size` property to control the size of your form labels, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. Setting the size on a `<i-form-group>` will also affect form labels.

<i-form-group>
    <i-form-label size="sm">Input Label Small</i-form-label>
    <i-input v-model="labelSmInputValue" placeholder="Type something.." />
</i-form-group>

<i-form-group>
    <i-form-label size="md">Input Label Medium</i-form-label>
    <i-input v-model="labelMdInputValue" placeholder="Type something.." />
</i-form-group>

<i-form-group>
    <i-form-label size="lg">Input Label Large</i-form-label>
    <i-input v-model="labelLgInputValue" placeholder="Type something.." />
</i-form-group>

~~~html
<i-form-group>
    <i-form-label size="sm">Input Label Small</i-form-label>
    <i-input v-model="value" placeholder="Type something.." />
</i-form-group>

<i-form-group>
    <i-form-label size="md">Input Label Medium</i-form-label>
    <i-input v-model="value" placeholder="Type something.." />
</i-form-group>

<i-form-group>
    <i-form-label size="lg">Input Label Large</i-form-label>
    <i-input v-model="value" placeholder="Type something.." />
</i-form-group>
~~~

~~~js
export default {
  data () {
    return {
      value: ''
    };
  }
}
~~~