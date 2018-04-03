# Checkbox

Checkbox inputs allow the user to select multiple options from a set. If you have multiple options appearing in a list, 
you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using 
a checkbox and use an on/off switch instead. { .lead }

You will need to use the `i-checkbox` component together with a `i-checkbox-group`.

### Basic usage

<i-checkbox v-model="checked">Apple</i-checkbox>

Checked: <span>{{checked}}</span>

~~~html
<i-checkbox v-model="checked">Apple</i-checkbox>
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

<i-checkbox-group v-model="checkedGroup">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Voleyball">Voleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Snowboarding">Snowboarding</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

Checked values: <span>{{checkedGroup}}</span>

~~~html
<i-checkbox-group v-model="checked">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Voleyball">Voleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Snowboarding">Snowboarding</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>
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
<i-checkbox-group v-model="checkedButton">
    <i-checkbox-button value="Earth">Earth</i-checkbox-button>
    <i-checkbox-button value="Mars">Mars</i-checkbox-button>
    <i-checkbox-button value="Jupiter">Jupiter</i-checkbox-button>
    <i-checkbox-button value="Venus" disabled>Venus</i-checkbox-button>
</i-checkbox-group>

Checked values: <span>{{checkedButton}}</span>

~~~html
<i-checkbox-group v-model="checked">
    <i-checkbox-button value="Earth">Earth</i-checkbox-button>
    <i-checkbox-button value="Mars">Mars</i-checkbox-button>
    <i-checkbox-button value="Jupiter">Jupiter</i-checkbox-button>
    <i-checkbox-button value="Venus" disabled>Venus</i-checkbox-button>
</i-checkbox-group>
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

