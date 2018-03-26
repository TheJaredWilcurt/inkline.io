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

## Icon input
Add an icon to indicate input type.

<Input v-model="iconLeftInputValue" placeholder="Type something.." clearable>
    <i slot="prefix" class="form-input-icon">@</i>
</Input>

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

