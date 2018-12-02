# Select

Allow your users to input data directly from the keyboard. { .lead }

## Basic Input

<i-select v-model="selectValue" placeholder="Choose an option">
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>

~~~html
<i-select v-model="value" placeholder="Choose an option">
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
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

<i-select v-model="disabledSelectValue" placeholder="Choose an option" disabled>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>

~~~html
<i-select v-model="value" placeholder="Choose an option">
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
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

<i-select v-model="prefixSelectValue" placeholder="Choose an option">
    <i slot="prefix">@</i>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>

~~~html
<i-select v-model="value" placeholder="Choose an option">
    <i slot="prefix">@</i>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
~~~

<i-select v-model="suffixSelectValue" placeholder="Choose an option">
    <i slot="suffix">@</i>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>

~~~html
<i-select v-model="value" placeholder="Choose an option">
    <i slot="suffix">@</i>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
~~~

<i-input v-model="prefixSuffixSelectValue" placeholder="Type something..">
    <i slot="prefix">@</i>
    <i slot="suffix">@</i>
</i-input>

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

<i-input v-model="prependSelectValue" placeholder="Type something..">
    <span slot="prepend">http://</span>
</i-input>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <span slot="prepend">http://</span>
</i-input>
~~~

<i-input v-model="appendSelectValue" placeholder="Type something..">
    <span slot="append">http://</span>
</i-input>

~~~html
<i-input v-model="value" placeholder="Type something..">
    <span slot="append">.com</span>
</i-input>
~~~

<i-input v-model="prependAppendSelectValue" placeholder="Type something..">
    <span slot="prepend">http://</span>
    <span slot="append">.com</span>
</i-input>

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

<i-input size="sm" v-model="smSelectValue" placeholder="Type something small.." />
<i-input size="md" v-model="mdSelectValue" placeholder="Type something medium.." />
<i-input size="lg" v-model="lgSelectValue" placeholder="Type something large.." />

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

<i-input v-model="labelDefaultSelectValue" placeholder="Type something..">
    <template slot="label">Input Label Default</template>
</i-input>
<i-input v-model="labelLeftSelectValue" label-position="left" placeholder="Type something..">
    <template slot="label">Input Label Left</template>
</i-input>
<i-input v-model="labelRightSelectValue" label-position="right" placeholder="Type something..">
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


