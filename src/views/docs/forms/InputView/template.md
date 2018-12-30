# Inputs

Allow your users to input data directly from the keyboard. { .lead }

## Basic Input

<i-input v-model="inputValue" placeholder="Type something.." />

Value: <code>{{inputValue}}</code>

~~~html
<i-input v-model="value" placeholder="Type something.." />
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

<i-input v-model="disabledInputValue" placeholder="Type something.." disabled />

Value: <code>{{disabledInputValue}}</code>

~~~html
<i-input v-model="value" placeholder="Type something.." disabled />
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

## Clearable Input

<i-input v-model="clearableInputValue" placeholder="Type something.." clearable />

Value: <code>{{clearableInputValue}}</code>

~~~html
<i-input v-model="value" placeholder="Type something.." clearable />
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

<i-input v-model="prefixInputValue" placeholder="Type something..">
    <i slot="prefix">@</i>
</i-input>

Value: <code>{{prefixInputValue}}</code>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <i slot="prefix">@</i>
</i-input>
~~~

<i-input v-model="suffixInputValue" placeholder="Type something..">
    <i slot="suffix">@</i>
</i-input>

Value: <code>{{suffixInputValue}}</code>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <i slot="suffix">@</i>
</i-input>
~~~

<i-input v-model="prefixSuffixInputValue" placeholder="Type something..">
    <i slot="prefix">@</i>
    <i slot="suffix">@</i>
</i-input>

Value: <code>{{prefixSuffixInputValue}}</code>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <i slot="prefix">@</i>
    <i slot="suffix">@</i>
</i-input>
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

<i-input v-model="prependInputValue" placeholder="Type something..">
    <span slot="prepend">http://</span>
</i-input>

Value: <code>{{prependInputValue}}</code>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <span slot="prepend">http://</span>
</i-input>
~~~

<i-input v-model="appendInputValue" placeholder="Type something..">
    <span slot="append">http://</span>
</i-input>

Value: <code>{{appendInputValue}}</code>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <span slot="append">.com</span>
</i-input>
~~~

<i-input v-model="prependAppendInputValue" placeholder="Type something..">
    <span slot="prepend">http://</span>
    <span slot="append">.com</span>
</i-input>

Value: <code>{{prependAppendInputValue}}</code>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <span slot="prepend">http://</span>
    <span slot="append">.com</span>
</i-input>
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

<div class="_margin-bottom-1">
    <i-input size="sm" v-model="smInputValue" placeholder="Type something small.." />
</div>

Value: <code>{{smInputValue}}</code>

<div class="_margin-bottom-1">
    <i-input size="md" v-model="mdInputValue" placeholder="Type something medium.." />
</div>

Value: <code>{{mdInputValue}}</code>

<div class="_margin-bottom-1">
    <i-input size="lg" v-model="lgInputValue" placeholder="Type something large.." />
</div>

Value: <code>{{lgInputValue}}</code>

~~~html
<i-input size="sm" v-model="value" placeholder="Type something small.." />
<i-input size="md" v-model="value" placeholder="Type something medium.." />
<i-input size="lg" v-model="value" placeholder="Type something large.." />
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


