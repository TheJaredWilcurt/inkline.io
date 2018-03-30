# Textareas

Allow your users to Textarea data directly from the keyboard. { .lead }

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

