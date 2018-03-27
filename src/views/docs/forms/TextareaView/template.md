# Textareas

Allow your users to Textarea data directly from the keyboard. { .lead }

## Basic Textarea

<Textarea v-model="TextareaValue" placeholder="Type something.." />

~~~html
<Textarea v-model="value" placeholder="Type something.." />
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

<Textarea v-model="disabledTextareaValue" placeholder="Type something.." disabled />

~~~html
<Textarea v-model="value" placeholder="Type something.." disabled />
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

<Textarea v-model="clearableTextareaValue" placeholder="Type something.." clearable />

~~~html
<Textarea v-model="value" placeholder="Type something.." clearable />
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

<Textarea v-model="prefixTextareaValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</Textarea>

~~~html
<Textarea v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</Textarea>
~~~

<Textarea v-model="suffixTextareaValue" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</Textarea>

~~~html
<Textarea v-model="value" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</Textarea>
~~~

<Textarea v-model="prefixSuffixTextareaValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</Textarea>

~~~html
<Textarea v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</Textarea>
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

## Textarea Prepend and Append
You can add additional content such as select fields, buttons or plain text, to either side of the Textarea by using the prepend and append slots.

<Textarea v-model="prependTextareaValue" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
</Textarea>

~~~html
<Textarea v-model="value" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
</Textarea>
~~~

<Textarea v-model="appendTextareaValue" placeholder="Type something..">
    <template slot="append" class="form-input-append">http://</template>
</Textarea>

~~~html
<Textarea v-model="value" placeholder="Type something..">
    <template slot="append" class="form-input-append">.com</template>
</Textarea>
~~~

<Textarea v-model="prependAppendTextareaValue" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
    <template slot="append" class="form-input-append">.com</template>
</Textarea>

~~~html
<Textarea v-model="value" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
    <template slot="append" class="form-input-append">.com</template>
</Textarea>
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

