# Number Inputs

Allow your users to input data directly from the keyboard. { .lead }

## Basic Input

<i-input-number v-model="inputValue" placeholder="Type something.." />

Value: <code>{{inputValue}}</code>

~~~html
<i-input-number v-model="value" placeholder="Type something.." />
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

## Disabled Input

<i-input-number v-model="disabledInputValue" placeholder="Type something.." disabled />

Value: <code>{{disabledInputValue}}</code>

~~~html
<i-input-number v-model="value" placeholder="Type something.." disabled />
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


## Minimum and Maximum Value

<i-input-number v-model="minMaxInputValue" :min="1" :max="10" placeholder="Type something.." />

Value: <code>{{minMaxInputValue}}</code>

~~~html
<i-input-number v-model="value" :min="1" :max="10" placeholder="Type something.." />
~~~

~~~js
export default {
  data () {
    return {
      value: 1
    };
  }
}
~~~

## Step Size

You can set the increment / decrement step by using the `step` property. The step is `1` by default.

<i-input-number v-model="stepInputValue" :step="10" placeholder="Type something.." />

Value: <code>{{stepInputValue}}</code>

~~~html
<i-input-number v-model="value" :step="10" placeholder="Type something.." />
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

## Precision

You can set the decimal precision using the `precision` property, allowing you to enter floating point numbers into the input.

<i-input-number v-model="precisionInputValue" :precision="2" placeholder="Type something.." />

Value: <code>{{precisionInputValue}}</code>

~~~html
<i-input-number v-model="value" :precision="2" placeholder="Type something.." />
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

## Input Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your inputs. Using prefixes and suffixes you can, indicate 
your input type using an icon or text. 

<i-input-number v-model="prefixInputValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</i-input-number>

Value: <code>{{prefixInputValue}}</code>

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</i-input-number>
~~~

<i-input-number v-model="suffixInputValue" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</i-input-number>

Value: <code>{{suffixInputValue}}</code>

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</i-input-number>
~~~

<i-input-number v-model="prefixSuffixInputValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</i-input-number>

Value: <code>{{prefixSuffixInputValue}}</code>

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</i-input-number>
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

## Input Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the input by using the prepend and append slots.

<i-input-number v-model="prependInputValue" placeholder="Type something..">
    <span slot="prepend" class="form-input-prepend">http://</span>
</i-input-number>

Value: <code>{{prependInputValue}}</code>

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <span slot="prepend" class="form-input-prepend">http://</span>
</i-input-number>
~~~

<i-input-number v-model="appendInputValue" placeholder="Type something..">
    <span slot="append" class="form-input-append">http://</span>
</i-input-number>

Value: <code>{{appendInputValue}}</code>

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <span slot="append" class="form-input-append">.com</span>
</i-input-number>
~~~

<i-input-number v-model="prependAppendInputValue" placeholder="Type something..">
    <span slot="prepend" class="form-input-prepend">http://</span>
    <span slot="append" class="form-input-append">.com</span>
</i-input-number>

Value: <code>{{prependAppendInputValue}}</code>

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <span slot="prepend" class="form-input-prepend">http://</span>
    <span slot="append" class="form-input-append">.com</span>
</i-input-number>
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

## Input Sizes
You're able to use the `size` modifier to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<i-input-number size="sm" v-model="smInputValue" placeholder="Type something small.." />

Value: <code>{{smInputValue}}</code>

<i-input-number size="md" v-model="mdInputValue" placeholder="Type something medium.." />

Value: <code>{{mdInputValue}}</code>

<i-input-number size="lg" v-model="lgInputValue" placeholder="Type something large.." />

Value: <code>{{lgInputValue}}</code>

~~~html
<i-input-number size="sm" v-model="value" placeholder="Type something small.." />
<i-input-number size="md" v-model="value" placeholder="Type something medium.." />
<i-input-number size="lg" v-model="value" placeholder="Type something large.." />
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

