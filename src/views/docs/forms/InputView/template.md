# Inputs

Allow your users to input data directly from the keyboard. { .lead }

## Basic input

<i-input v-model="inputValue" placeholder="Type something.." />

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

## Disabled input

<i-input v-model="disabledInputValue" placeholder="Type something.." disabled />

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

## Clearable input

<i-input v-model="clearableInputValue" placeholder="Type something.." clearable />

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
    <i slot="prefix" class="form-input-icon">@</i>
</i-input>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</i-input>
~~~

<i-input v-model="suffixInputValue" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</i-input>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</i-input>
~~~

<i-input v-model="prefixSuffixInputValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</i-input>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
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
    <template slot="prepend" class="form-input-prepend">http://</template>
</i-input>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
</i-input>
~~~

<i-input v-model="appendInputValue" placeholder="Type something..">
    <template slot="append" class="form-input-append">http://</template>
</i-input>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <template slot="append" class="form-input-append">.com</template>
</i-input>
~~~

<i-input v-model="prependAppendInputValue" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
    <template slot="append" class="form-input-append">.com</template>
</i-input>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
    <template slot="append" class="form-input-append">.com</template>
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

<i-input size="sm" v-model="smInputValue" placeholder="Type something small.." />
<i-input size="md" v-model="mdInputValue" placeholder="Type something medium.." />
<i-input size="lg" v-model="lgInputValue" placeholder="Type something large.." />

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

## Input Labels
You can add labels to either side of your input using the `label` slot, together with the optional `label-position` property.

<i-input v-model="labelDefaultInputValue" placeholder="Type something..">
    <template slot="label">Input Label Default</template>
</i-input>
<i-input v-model="labelLeftInputValue" label-position="left" placeholder="Type something..">
    <template slot="label">Input Label Left</template>
</i-input>
<i-input v-model="labelRightInputValue" label-position="right" placeholder="Type something..">
    <template slot="label">Input Label Right</template>
</i-input>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <template slot="label">Input Label Default</template>
</i-input>

<i-input v-model="value" label-position="left" placeholder="Type something..">
    <template slot="label">Input Label Left</template>
</i-input>

<i-input v-model="value" label-position="right" placeholder="Type something..">
    <template slot="label">Input Label Right</template>
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


