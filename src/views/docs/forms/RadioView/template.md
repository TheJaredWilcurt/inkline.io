# Radio

Radio allow the user to select one option from a set.

They should not have too many options, use a dropdown if you think the user doesn't need to see all the available options side-by-side.

We recommend using the `Radio` along with `RadioGroup`, although it is supported to use them without it.

### Basic usage

<radio v-model="selectedValue" label="Apple">Apple</radio>
<radio v-model="selectedValue" label="Orange">Orange</radio>
<radio v-model="selectedValue" label="Banana">Banana</radio>
<radio v-model="selectedValue" label="Strawberry" disabled>Strawberry</radio>

~~~html
<radio v-model="selectedValue" label="Apple">Apple</radio>
<radio v-model="selectedValue" label="Orange">Orange</radio>
<radio v-model="selectedValue" label="Banana">Banana</radio>
<radio v-model="selectedValue" label="Strawberry" disabled>Strawberry</radio>
~~~

~~~js
export default {
  data () {
    return {
      selectedValue: 'Apple'
    };
  }
}
~~~

### Radio group

<radio-group v-model="selectedValueGroup">
    <radio label="Football">Football</radio>
    <radio label="Voleyball">Voleyball</radio>
    <radio label="Basketball">Basketball</radio>
</radio-group>

~~~html
<radio-group v-model="selectedValueGroup">
    <radio label="Football">Football</radio>
    <radio label="Voleyball">Voleyball</radio>
    <radio label="Basketball">Basketball</radio>
</radio-group>
~~~

~~~js
export default {
  data () {
    return {
      selectedValueGroup: 'Football'
    };
  }
}
~~~

### Radio buttons
<radio-group v-model="selectedValueButtonGroup">
    <radio-button label="Terra">Terra</radio-button>
    <radio-button label="Mars">Mars</radio-button>
    <radio-button label="Jupiter">Jupiter</radio-button>
</radio-group>

~~~html
<radio-group v-model="selectedValueButtonGroup">
    <radio-button label="Terra">Terra</radio-button>
    <radio-button label="Mars">Mars</radio-button>
    <radio-button label="Jupiter">Jupiter</radio-button>
</radio-group>
~~~

~~~js
export default {
  data () {
    return {
      selectedValueButtonGroup: 'Terra'
    };
  }
}
~~~

