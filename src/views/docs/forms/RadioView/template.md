# Radio
Radio inputs allow the user to select one option from a set of options. Typically, there should not be too many options. 
Make sure you use a select input if you think the user doesn't need to see all the available options side-by-side. { .lead }

You will need to use the `Radio` component together with a `FormGroup`.

### Basic usage

<Radio v-model="selected" value="Apple">Apple</Radio>
<Radio v-model="selected" value="Orange">Orange</Radio>
<Radio v-model="selected" value="Banana">Banana</Radio>
<Radio v-model="selected" value="Strawberry" disabled>Strawberry</Radio>

~~~html
<Radio v-model="selected" value="Apple">Apple</Radio>
<Radio v-model="selected" value="Orange">Orange</Radio>
<Radio v-model="selected" value="Banana">Banana</Radio>
<Radio v-model="selected" value="Strawberry" disabled>Strawberry</Radio>
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

<FormGroup v-model="selectedGroup">
    <Radio value="Football">Football</Radio>
    <Radio value="Voleyball">Voleyball</Radio>
    <Radio value="Basketball">Basketball</Radio>
    <Radio value="Tennis" disabled>Tennis</Radio>
</FormGroup>

~~~html
<FormGroup v-model="selected">
    <Radio value="Football">Football</Radio>
    <Radio value="Voleyball">Voleyball</Radio>
    <Radio value="Basketball">Basketball</Radio>
    <Radio value="Tennis" disabled>Tennis</Radio>
</FormGroup>
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
<FormGroup v-model="selectedButton">
    <RadioButton value="Earth">Earth</RadioButton>
    <RadioButton value="Mars">Mars</RadioButton>
    <RadioButton value="Jupiter">Jupiter</RadioButton>
    <RadioButton value="Venus" disabled>Venus</RadioButton>
</FormGroup>

~~~html
<FormGroup v-model="selected">
    <RadioButton value="Earth">Earth</RadioButton>
    <RadioButton value="Mars">Mars</RadioButton>
    <RadioButton value="Jupiter">Jupiter</RadioButton>
    <RadioButton value="Venus" disabled>Venus</RadioButton>
</FormGroup>
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

