# Select

Allow your users to input data directly from the keyboard. { .lead }

## Basic Select

<i-code-preview title="Basic Select" link="https://github.com/inkline/inkline/tree/master/src/components/Select">

<i-select v-model="selectValue" placeholder="Choose an option">
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>

<template slot="html">

~~~html
<i-select v-model="value" placeholder="Choose an option">
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
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

Selected value: <code>{{selectValue}}</code>

</template>
</i-code-preview>

## Disabled Select

<i-code-preview title="Disabled Select" link="https://github.com/inkline/inkline/tree/master/src/components/Select">

<i-select v-model="disabledSelectValue" placeholder="Choose an option" disabled>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>

<template slot="html">

~~~html
<i-select v-model="value" placeholder="Choose an option">
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
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

## Select Prefix and Suffix
Inkline allows you to easily add a prefix or suffix to your inputs. Using prefixes and suffixes you can, indicate 
your input type using an icon or text. 

<i-code-preview title="Select Prefix and Suffix" link="https://github.com/inkline/inkline/tree/master/src/components/Select">

<i-select v-model="prefixSelectValue" placeholder="Choose an option" class="_margin-bottom-1">
    <i slot="prefix">@</i>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>

<i-select v-model="suffixSelectValue" placeholder="Choose an option" class="_margin-bottom-1">
    <i slot="suffix">@</i>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>

<i-select v-model="prefixSuffixSelectValue" placeholder="Choose an option">
    <i slot="suffix">@</i>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
    <i slot="prefix">@</i>
</i-select>

<template slot="html">

~~~html
<i-select v-model="value" placeholder="Choose an option">
    <i slot="prefix">@</i>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
~~~
~~~html
<i-select v-model="value" placeholder="Choose an option">
    <i slot="suffix">@</i>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
~~~
~~~html
<i-select v-model="value" placeholder="Choose an option">
    <i slot="prefix">@</i>
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
    <i slot="suffix">@</i>
</i-select>
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

## Select Sizes
You're able to use the `size` modifier to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`.

<i-code-preview title="Select Sizes" link="https://github.com/inkline/inkline/tree/master/src/components/Select">

<i-form-group class="_margin-bottom-1">
    <i-select v-model="smSelectValue" size="sm" placeholder="Choose an option">
        <i-select-option value="a" label="Option A" />
        <i-select-option value="b" label="Option B" />
        <i-select-option value="c" label="Option C" />
        <i-select-option value="d" label="Option D" disabled />
    </i-select>
</i-form-group>

<i-form-group class="_margin-bottom-1">
    <i-select v-model="mdSelectValue" size="md" placeholder="Choose an option">
        <i-select-option value="a" label="Option A" />
        <i-select-option value="b" label="Option B" />
        <i-select-option value="c" label="Option C" />
        <i-select-option value="d" label="Option D" disabled />
    </i-select>
</i-form-group>

<i-form-group>
    <i-select v-model="lgSelectValue" size="lg" placeholder="Choose an option">
        <i-select-option value="a" label="Option A" />
        <i-select-option value="b" label="Option B" />
        <i-select-option value="c" label="Option C" />
        <i-select-option value="d" label="Option D" disabled />
    </i-select>
</i-form-group>

<template slot="html">

~~~html
<i-select v-model="value" size="sm" placeholder="Choose an option">
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
~~~
~~~html
<i-select v-model="value" size="md" placeholder="Choose an option">
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
~~~
~~~html
<i-select v-model="value" size="lg" placeholder="Choose an option">
    <i-select-option value="a" label="Option A" />
    <i-select-option value="b" label="Option B" />
    <i-select-option value="c" label="Option C" />
    <i-select-option value="d" label="Option D" disabled />
</i-select>
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
