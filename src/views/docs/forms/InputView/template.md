# Checkbox

Checkbox inputs allow the user to select multiple options from a set. If you have multiple options appearing in a list, 
you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using 
a checkbox and use an on/off switch instead. { .lead }

You will need to use the `Checkbox` component together with a `FormGroup`.

### Basic usage

<Input v-model="inputValue" type="password" />

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
