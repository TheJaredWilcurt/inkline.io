# Radio
Radio inputs allow the user to select one option from a set of options. { .lead }

Radio inputs allow the user to select one option from a set of options. Typically, there should not be too many options. 
Make sure you use a select input if you think the user doesn't need to see all the available options side-by-side. { .lead }

You will need to use the `Radio` component together with a `RadioGroup`.
>>>>>>> Changed variable naming.

### Basic usage

<radio v-model="selected" value="Apple">Apple</radio>
<radio v-model="selected" value="Orange">Orange</radio>
<radio v-model="selected" value="Banana">Banana</radio>
<radio v-model="selected" value="Strawberry" disabled>Strawberry</radio>

~~~html
<radio v-model="selected" value="Apple">Apple</radio>
<radio v-model="selected" value="Orange">Orange</radio>
<radio v-model="selected" value="Banana">Banana</radio>
<radio v-model="selected" value="Strawberry" disabled>Strawberry</radio>
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

<radio-group v-model="selectedGroup">
    <radio value="Football">Football</radio>
    <radio value="Voleyball">Voleyball</radio>
    <radio value="Basketball">Basketball</radio>
    <radio value="Tennis" disabled>Tennis</radio>
</radio-group>

~~~html
<radio-group v-model="selected">
    <radio value="Football">Football</radio>
    <radio value="Voleyball">Voleyball</radio>
    <radio value="Basketball">Basketball</radio>
    <radio value="Tennis" disabled>Tennis</radio>
</radio-group>
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
<radio-group v-model="selectedButton">
    <radio-button value="Earth">Earth</radio-button>
    <radio-button value="Mars">Mars</radio-button>
    <radio-button value="Jupiter">Jupiter</radio-button>
    <radio-button value="Venus" disabled>Venus</radio-button>
</radio-group>

~~~html
<radio-group v-model="selected">
    <radio-button value="Earth">Earth</radio-button>
    <radio-button value="Mars">Mars</radio-button>
    <radio-button value="Jupiter">Jupiter</radio-button>
    <radio-button value="Venus" disabled>Venus</radio-button>
</radio-group>
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

