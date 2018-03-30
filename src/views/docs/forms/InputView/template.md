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

