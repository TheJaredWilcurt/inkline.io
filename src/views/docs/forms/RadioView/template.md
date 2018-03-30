# Radio
Radio inputs allow the user to select one option from a set of options. Typically, there should not be too many options. 
Make sure you use a select input if you think the user doesn't need to see all the available options side-by-side. { .lead }

You will need to use the `Radio` component together with a `RadioGroup`.

### Basic usage

<i-radio v-model="selected" value="Apple">Apple</i-radio>
<i-radio v-model="selected" value="Orange">Orange</i-radio>
<i-radio v-model="selected" value="Banana">Banana</i-radio>
<i-radio v-model="selected" value="Strawberry" disabled>Strawberry</i-radio>

~~~html
<i-radio v-model="selected" value="Apple">Apple</i-radio>
<i-radio v-model="selected" value="Orange">Orange</i-radio>
<i-radio v-model="selected" value="Banana">Banana</i-radio>
<i-radio v-model="selected" value="Strawberry" disabled>Strawberry</i-radio>
~~~

~~~js
export default {
  data () {
    return {
      selected: 'Apple'
    };
  }
}
~~~

### Radio group

<i-radio-group v-model="selectedGroup">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Voleyball">Voleyball</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>

~~~html
<i-radio-group v-model="selected">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Voleyball">Voleyball</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>
~~~

~~~js
export default {
  data () {
    return {
      selected: 'Football'
    };
  }
}
~~~

### Radio buttons
<i-radio-group v-model="selectedButton">
    <i-radio-button value="Earth">Earth</i-radio-button>
    <i-radio-button value="Mars">Mars</i-radio-button>
    <i-radio-button value="Jupiter">Jupiter</i-radio-button>
    <i-radio-button value="Venus" disabled>Venus</i-radio-button>
</i-radio-group>

~~~html
<i-radio-group v-model="selected">
    <i-radio-button value="Earth">Earth</i-radio-button>
    <i-radio-button value="Mars">Mars</i-radio-button>
    <i-radio-button value="Jupiter">Jupiter</i-radio-button>
    <i-radio-button value="Venus" disabled>Venus</i-radio-button>
</i-radio-group>
~~~

~~~js
export default {
  data () {
    return {
      selected: 'Earth'
    };
  }
}
~~~

