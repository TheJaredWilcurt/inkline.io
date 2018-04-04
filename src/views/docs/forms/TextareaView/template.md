# Textareas

Allow your users to input data directly from the keyboard, on multiple lines. { .lead }

## Basic Textarea

<i-textarea v-model="textareaValue" placeholder="Type something.." />

~~~html
<i-textarea v-model="value" placeholder="Type something.." />
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

## Disabled Textarea

<i-textarea v-model="disabledTextareaValue" placeholder="Type something.." disabled />

~~~html
<i-textarea v-model="value" placeholder="Type something.." disabled />
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

## Clearable Textarea

<i-textarea v-model="clearableTextareaValue" placeholder="Type something.." clearable />

~~~html
<i-textarea v-model="value" placeholder="Type something.." clearable />
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

## Textarea Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your Textareas. Using prefixes and suffixes you can, indicate 
your Textarea type using an icon or text. 

<i-textarea v-model="prefixTextareaValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</i-textarea>

~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</i-textarea>
~~~

<i-textarea v-model="suffixTextareaValue" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</i-textarea>

~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</i-textarea>
~~~

<i-textarea v-model="prefixSuffixTextareaValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</i-textarea>

~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</i-textarea>
~~~

~~~js
export default {
  data () {
    return {
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing..'
    };
  }
}
~~~

## Textarea Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the Textarea by using the prepend and append slots.

<i-textarea v-model="prependTextareaValue" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
</i-textarea>

~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
</i-textarea>
~~~

<i-textarea v-model="appendTextareaValue" placeholder="Type something..">
    <template slot="append" class="form-input-append">http://</template>
</i-textarea>

~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <template slot="append" class="form-input-append">.com</template>
</i-textarea>
~~~

<i-textarea v-model="prependAppendTextareaValue" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
    <template slot="append" class="form-input-append">.com</template>
</i-textarea>

~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
    <template slot="append" class="form-input-append">.com</template>
</i-textarea>
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


## Textarea Sizes
You're able to use the `size` modifier to control the size of your textareas, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<i-textarea size="sm" v-model="smTextareaValue" placeholder="Type something small.." />
<i-textarea size="md" v-model="mdTextareaValue" placeholder="Type something medium.." />
<i-textarea size="lg" v-model="lgTextareaValue" placeholder="Type something large.." />

~~~html
<i-textarea size="sm" v-model="value" placeholder="Type something small.." />
<i-textarea size="md" v-model="value" placeholder="Type something medium.." />
<i-textarea size="lg" v-model="value" placeholder="Type something large.." />
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

## Textarea Labels
You can add labels to either side of your textarea using the `label` slot, together with the optional `label-position` property.

<i-textarea v-model="labelDefaultTextareaValue" placeholder="Type something..">
    <template slot="label">Input Label Default</template>
</i-textarea>
<i-textarea v-model="labelLeftTextareaValue" label-position="left" placeholder="Type something..">
    <template slot="label">Input Label Left</template>
</i-textarea>
<i-textarea v-model="labelRightTextareaValue" label-position="right" placeholder="Type something..">
    <template slot="label">Input Label Right</template>
</i-textarea>

~~~html
<i-textarea v-model="value" placeholder="Type something..">
    <template slot="label">Input Label Default</template>
</i-textarea>

<i-textarea v-model="value" label-position="left" placeholder="Type something..">
    <template slot="label">Input Label Left</template>
</i-textarea>

<i-textarea v-model="value" label-position="right" placeholder="Type something..">
    <template slot="label">Input Label Right</template>
</i-textarea>
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
