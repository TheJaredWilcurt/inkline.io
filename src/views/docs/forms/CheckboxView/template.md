# Checkbox

Checkbox inputs allow the user to select multiple options from a set. 

If you have multiple options appearing in a list, 
you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using 
a checkbox and use an on/off switch instead.

You will need to use the `Checkbox` component together with a `CheckboxGroup`.

### Basic usage

<checkbox v-model="checked">Apple</checkbox>

Checked: {{checked}}

~~~html
<radio v-model="checked">Apple</radio>
~~~

~~~js
export default {
  data () {
    return {
      checked: 'true'
    };
  }
}
~~~

### Checkbox group

<checkbox-group v-model="checkList">
    <checkbox value="Football">Football</checkbox>
    <checkbox value="Voleyball">Voleyball</checkbox>
    <checkbox value="Basketball">Basketball</checkbox>
    <checkbox value="Snowboarding">Snowboarding</checkbox>
    <checkbox value="Tennis" disabled>Tennis</checkbox>
</checkbox-group>

Checked values: {{checkList}}

~~~html
<checkbox-group v-model="checkList">
    <checkbox value="Football">Football</checkbox>
    <checkbox value="Voleyball">Voleyball</checkbox>
    <checkbox value="Basketball">Basketball</checkbox>
    <checkbox value="Snowboarding">Snowboarding</checkbox>
    <checkbox value="Tennis" disabled>Tennis</checkbox>
</checkbox-group>
~~~

~~~js
export default {
  data () {
    return {
      checkList: ['Football', 'Basketball', 'Tennis']
    };
  }
}
~~~

### Checkbox buttons
<checkbox-group v-model="checkButtonList">
    <checkbox-button value="Earth">Earth</checkbox-button>
    <checkbox-button value="Mars">Mars</checkbox-button>
    <checkbox-button value="Jupiter">Jupiter</checkbox-button>
    <checkbox-button value="Venus" disabled>Venus</checkbox-button>
</checkbox-group>

Checked values: {{checkButtonList}}

~~~html
<checkbox-group v-model="checkButtonList">
    <checkbox-button value="Earth">Earth</checkbox-button>
    <checkbox-button value="Mars">Mars</checkbox-button>
    <checkbox-button value="Jupiter">Jupiter</checkbox-button>
    <checkbox-button value="Venus" disabled>Venus</checkbox-button>
</checkbox-group>
~~~

~~~js
export default {
  data () {
    return {
      checkButtonList: ['Earth']
    };
  }
}
~~~

