# Checkbox

Allow your users to input data directly from the keyboard . { .lead }

You will need to use the `Checkbox` component together with a `FormGroup`.

### Basic usage

<Input v-model="inputValue" />

Input: <span>{{inputValue}}</span>

~~~html
<Input v-model="value" />
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
