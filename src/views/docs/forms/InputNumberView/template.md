# Number Inputs

Allow your users to input data directly from the keyboard. { .lead }

## Basic Input


<i-code-preview title="Number Input" link="https://github.com/inkline/inkline/tree/master/src/components/InputNumber">

<i-input-number v-model="inputValue" placeholder="Type something.." />

<template slot="html">

~~~html
<i-input-number v-model="value" placeholder="Type something.." />
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      value: ''
    };
  }
}
~~~

</template>
<template slot="output">

Value: <code>{{inputValue}}</code>

</template>
</i-code-preview>

## Disabled Input


<i-code-preview title="Disabled Number Input" link="https://github.com/inkline/inkline/tree/master/src/components/InputNumber">

<i-input-number v-model="disabledInputValue" placeholder="Type something.." disabled />

<template slot="html">

~~~html
<i-input-number v-model="value" placeholder="Type something.." disabled />
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      value: ''
    };
  }
}
~~~

</template>
</i-code-preview>


## Minimum and Maximum Value


<i-code-preview title="Number Input Minimum and Maximum Value" link="https://github.com/inkline/inkline/tree/master/src/components/InputNumber">

<i-input-number v-model="minMaxInputValue" :min="1" :max="10" placeholder="Type something.." />

<template slot="html">

~~~html
<i-input-number v-model="value" :min="1" :max="10" placeholder="Type something.." />
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      value: 1
    };
  }
}
~~~

</template>
<template slot="output">

Value: <code>{{minMaxInputValue}}</code>

</template>
</i-code-preview>

## Step Size

You can set the increment / decrement step by using the `step` property. The step is `1` by default.


<i-code-preview title="Number Input Step Size" link="https://github.com/inkline/inkline/tree/master/src/components/InputNumber">

<i-input-number v-model="stepInputValue" :step="10" placeholder="Type something.." />

<template slot="html">

~~~html
<i-input-number v-model="value" :step="10" placeholder="Type something.." />
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      value: ''
    };
  }
}
~~~

</template>
<template slot="output">

Value: <code>{{stepInputValue}}</code>

</template>
</i-code-preview>

## Precision

You can set the decimal precision using the `precision` property, allowing you to enter floating point numbers into the input.


<i-code-preview title="Number Input Precision" link="https://github.com/inkline/inkline/tree/master/src/components/InputNumber">

<i-input-number v-model="precisionInputValue" :precision="2" placeholder="Type something.." />

<template slot="html">

~~~html
<i-input-number v-model="value" :precision="2" placeholder="Type something.." />
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      value: ''
    };
  }
}
~~~

</template>
<template slot="output">

Value: <code>{{precisionInputValue}}</code>

</template>
</i-code-preview>

## Input Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your inputs. Using prefixes and suffixes you can, indicate 
your input type using an icon or text. 


<i-code-preview title="Number Input Prefix and Suffix" link="https://github.com/inkline/inkline/tree/master/src/components/InputNumber">

<i-input-number v-model="prefixInputValue" placeholder="Type something.." class="_margin-bottom-1">
    <i slot="prefix" class="form-input-icon">@</i>
</i-input-number>

<i-input-number v-model="suffixInputValue" placeholder="Type something.." class="_margin-bottom-1">
    <i slot="suffix" class="form-input-icon">@</i>
</i-input-number>

<i-input-number v-model="prefixSuffixInputValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</i-input-number>


<template slot="html">

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</i-input-number>
~~~

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</i-input-number>
~~~

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</i-input-number>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      value: ''
    };
  }
}
~~~

</template>
</i-code-preview>

## Input Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the input by using the prepend and append slots.


<i-code-preview title="Number Input Prepend" link="https://github.com/inkline/inkline/tree/master/src/components/InputNumber">

<i-input-number v-model="prependInputValue" placeholder="Type something.." class="_margin-bottom-1">
    <span slot="prepend" class="form-input-prepend">http://</span>
</i-input-number>

<i-input-number v-model="appendInputValue" placeholder="Type something.." class="_margin-bottom-1">
    <span slot="append" class="form-input-append">http://</span>
</i-input-number>

<i-input-number v-model="prependAppendInputValue" placeholder="Type something..">
    <span slot="prepend" class="form-input-prepend">http://</span>
    <span slot="append" class="form-input-append">.com</span>
</i-input-number>

<template slot="html">

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <span slot="prepend" class="form-input-prepend">http://</span>
</i-input-number>
~~~

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <span slot="append" class="form-input-append">.com</span>
</i-input-number>
~~~

~~~html
<i-input-number v-model="value" placeholder="Type something..">
    <span slot="prepend" class="form-input-prepend">http://</span>
    <span slot="append" class="form-input-append">.com</span>
</i-input-number>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      value: ''
    };
  }
}
~~~

</template>
</i-code-preview>

## Input Sizes
You're able to use the `size` modifier to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<i-code-preview title="Number Input Sizes" link="https://github.com/inkline/inkline/tree/master/src/components/InputNumber">

<i-form-group>
    <i-input-number size="sm" v-model="smInputValue" placeholder="Type something small.." />
</i-form-group>

<i-form-group>
    <i-input-number size="md" v-model="mdInputValue" placeholder="Type something medium.." />
</i-form-group>

<i-form-group>
    <i-input-number size="lg" v-model="lgInputValue" placeholder="Type something large.." />
</i-form-group>

<template slot="html">

~~~html
<i-input-number size="sm" v-model="value" placeholder="Type something small.." />
~~~
~~~html
<i-input-number size="md" v-model="value" placeholder="Type something medium.." />
~~~
~~~html
<i-input-number size="lg" v-model="value" placeholder="Type something large.." />
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      value: ''
    };
  }
}
~~~

</template>
</i-code-preview>

