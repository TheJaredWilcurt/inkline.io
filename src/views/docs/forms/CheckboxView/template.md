# Checkbox

Checkbox inputs allow the user to select multiple options from a set. If you have multiple options appearing in a list, 
you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using 
a checkbox and use an on/off switch instead. { .lead }

You will need to use the `Checkbox` component together with a `FormGroup`.

### Basic usage

<Checkbox v-model="checked">Apple</Checkbox>

Checked: <span>{{checked}}</span>

~~~html
<Radio v-model="checked">Apple</Radio>
~~~

~~~js
export default {
  data () {
    return {
      checked: true
    };
  }
}
~~~

### Checkbox group

<FormGroup v-model="checkedGroup">
    <Checkbox value="Football">Football</Checkbox>
    <Checkbox value="Voleyball">Voleyball</Checkbox>
    <Checkbox value="Basketball">Basketball</Checkbox>
    <Checkbox value="Snowboarding">Snowboarding</Checkbox>
    <Checkbox value="Tennis" disabled>Tennis</Checkbox>
</FormGroup>

Checked values: <span>{{checkedGroup}}</span>

~~~html
<FormGroup v-model="checked">
    <Checkbox value="Football">Football</Checkbox>
    <Checkbox value="Voleyball">Voleyball</Checkbox>
    <Checkbox value="Basketball">Basketball</Checkbox>
    <Checkbox value="Snowboarding">Snowboarding</Checkbox>
    <Checkbox value="Tennis" disabled>Tennis</Checkbox>
</FormGroup>
~~~

~~~js
export default {
  data () {
    return {
      checked: ['Football', 'Basketball', 'Tennis']
    };
  }
}
~~~

### Checkbox buttons
<FormGroup v-model="checkedButton">
    <CheckboxButton value="Earth">Earth</CheckboxButton>
    <CheckboxButton value="Mars">Mars</CheckboxButton>
    <CheckboxButton value="Jupiter">Jupiter</CheckboxButton>
    <CheckboxButton value="Venus" disabled>Venus</CheckboxButton>
</FormGroup>

Checked values: <span>{{checkedButton}}</span>

~~~html
<FormGroup v-model="checked">
    <CheckboxButton value="Earth">Earth</CheckboxButton>
    <CheckboxButton value="Mars">Mars</CheckboxButton>
    <CheckboxButton value="Jupiter">Jupiter</CheckboxButton>
    <CheckboxButton value="Venus" disabled>Venus</CheckboxButton>
</FormGroup>
~~~

~~~js
export default {
  data () {
    return {
      checked: ['Earth']
    };
  }
}
~~~

