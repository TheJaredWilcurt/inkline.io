# Inputs

Allow your users to input data directly from the keyboard. { .lead }

## Basic input

<Input v-model="inputValue" placeholder="Type something.." />

~~~html
<Input v-model="value" placeholder="Type something.." />
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

<Input v-model="disabledInputValue" placeholder="Type something.." disabled />

~~~html
<Input v-model="value" placeholder="Type something.." disabled />
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

<Input v-model="clearableInputValue" placeholder="Type something.." clearable />

~~~html
<Input v-model="value" placeholder="Type something.." clearable />
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

<Input v-model="prefixInputValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</Input>

~~~html
<Input v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
</Input>
~~~

<Input v-model="suffixInputValue" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</Input>

~~~html
<Input v-model="value" placeholder="Type something..">
    <i slot="suffix" class="form-input-icon">@</i>
</Input>
~~~

<Input v-model="prefixSuffixInputValue" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</Input>

~~~html
<Input v-model="value" placeholder="Type something..">
    <i slot="prefix" class="form-input-icon">@</i>
    <i slot="suffix" class="form-input-icon">@</i>
</Input>
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

<Input v-model="prependInputValue" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
</Input>

~~~html
<Input v-model="value" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
</Input>
~~~

<Input v-model="appendInputValue" placeholder="Type something..">
    <template slot="append" class="form-input-append">http://</template>
</Input>

~~~html
<Input v-model="value" placeholder="Type something..">
    <template slot="append" class="form-input-append">.com</template>
</Input>
~~~

<Input v-model="prependAppendInputValue" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
    <template slot="append" class="form-input-append">.com</template>
</Input>

~~~html
<Input v-model="value" placeholder="Type something..">
    <template slot="prepend" class="form-input-prepend">http://</template>
    <template slot="append" class="form-input-append">.com</template>
</Input>
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

