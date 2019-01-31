# Textareas

Allow your users to input data directly from the keyboard, on multiple lines. { .lead }

## Basic Textarea

<i-code-preview title="Basic Textarea" link="https://github.com/inkline/inkline/tree/master/src/components/Textarea">

<i-textarea v-model="textareaValue" placeholder="Type something.." />

<template slot="html">

~~~html
<i-textarea v-model="value" placeholder="Type something.." />
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

## Disabled Textarea

<i-code-preview title="Disabled Textarea" link="https://github.com/inkline/inkline/tree/master/src/components/Textarea">

<i-textarea v-model="disabledTextareaValue" placeholder="Type something.." disabled />

<template slot="html">

~~~html
<i-textarea v-model="value" placeholder="Type something.." disabled />
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

## Clearable Textarea

<i-code-preview title="Clearable Textarea" link="https://github.com/inkline/inkline/tree/master/src/components/Textarea">

<i-textarea v-model="clearableTextareaValue" placeholder="Type something.." clearable />

<template slot="html">

~~~html
<i-textarea v-model="value" placeholder="Type something.." clearable />
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

## Textarea Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your Textareas. Using prefixes and suffixes you can, indicate 
your Textarea type using an icon or text. 

<i-code-preview title="Textarea Prefix and Suffix" link="https://github.com/inkline/inkline/tree/master/src/components/Textarea">

<i-textarea v-model="prefixTextareaValue" placeholder="Type something.." class="_margin-bottom-1">
    <i slot="prefix" class="form-input-icon">@</i>
</i-textarea>

<i-textarea v-model="suffixTextareaValue" placeholder="Type something.." class="_margin-bottom-1">
    <i slot="suffix" class="form-input-icon">@</i>
</i-textarea>

<i-textarea v-model="prefixSuffixTextareaValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</i-textarea>

<template slot="html">

~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</i-textarea>
~~~
~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</i-textarea>
~~~
~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</i-textarea>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing..'
    };
  }
}
~~~

</template>
</i-code-preview>

## Textarea Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the Textarea by using the prepend and append slots.

<i-code-preview title="Textarea Prepend and Append" link="https://github.com/inkline/inkline/tree/master/src/components/Textarea">

<i-textarea v-model="prependTextareaValue" placeholder="Type something.." class="_margin-bottom-1">
    <span slot="prepend" class="form-input-prepend">http://</span>
</i-textarea>

<i-textarea v-model="appendTextareaValue" placeholder="Type something.." class="_margin-bottom-1">
    <span slot="append" class="form-input-append">http://</span>
</i-textarea>

<i-textarea v-model="prependAppendTextareaValue" placeholder="Type something..">
    <span slot="prepend" class="form-input-prepend">http://</span>
    <span slot="append" class="form-input-append">.com</span>
</i-textarea>

<template slot="html">

~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <span slot="prepend" class="form-input-prepend">http://</span>
</i-textarea>
~~~
~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <span slot="append" class="form-input-append">.com</span>
</i-textarea>
~~~
~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <span slot="prepend" class="form-input-prepend">http://</span>
    <span slot="append" class="form-input-append">.com</span>
</i-textarea>
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


## Textarea Sizes
You're able to use the `size` modifier to control the size of your textareas, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<i-code-preview title="Textarea Sizes" link="https://github.com/inkline/inkline/tree/master/src/components/Textarea">

<i-textarea size="sm" v-model="smTextareaValue" placeholder="Type something small.." class="_margin-bottom-1" />
<i-textarea size="md" v-model="mdTextareaValue" placeholder="Type something medium.." class="_margin-bottom-1" />
<i-textarea size="lg" v-model="lgTextareaValue" placeholder="Type something large.." />

<template slot="html">

~~~html
<i-textarea size="sm" v-model="value" placeholder="Type something small.." />
~~~
~~~html
<i-textarea size="md" v-model="value" placeholder="Type something medium.." />
~~~
~~~html
<i-textarea size="lg" v-model="value" placeholder="Type something large.." />
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