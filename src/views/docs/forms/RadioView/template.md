# Radio
Radio inputs allow the user to select one option from a set of options. Typically, there should not be too many options. 
Make sure you use a select input if you think the user doesn't need to see all the available options side-by-side. { .lead }

You will need to use the `i-radio` component together with a `i-radio-group`.

### Basic Usage

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

### Radio Group

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


## Radio Sizes
You're able to use the `size` property to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

<i-radio-group v-model="selectedSize">
    <i-radio size="sm" value="Football">Football</i-radio>
    <i-radio size="md" value="Volleyball">Tennis</i-radio>
    <i-radio size="lg" value="Basketball">Basketball</i-radio>
</i-radio-group>

Selected value: <span>{{selectedSize}}</span>

~~~html
<i-radio-group v-model="selected">
    <i-radio size="sm" value="Football">Football</i-radio>
    <i-radio size="md" value="Volleyball">Tennis</i-radio>
    <i-radio size="lg" value="Basketball">Basketball</i-radio>
</i-radio-group>
~~~

~~~js
export default {
  data () {
    return {
      selected: ['Basketball']
    };
  }
}
~~~

Applying the size `size` property to a `i-radio-group` will set the chosen size to all of its child inputs.

<i-radio-group size="sm" v-model="selectedSizeGroupSm">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Volleyball">Tennis</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>

<i-radio-group size="md" v-model="selectedSizeGroupMd">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Volleyball">Tennis</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>

<i-radio-group size="lg" v-model="selectedSizeGroupLg">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Volleyball">Tennis</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>

~~~html
<i-radio-group size="sm" v-model="selected">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Volleyball">Tennis</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>

<i-radio-group size="md" v-model="selected">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Volleyball">Tennis</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>

<i-radio-group size="lg" v-model="selected">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Volleyball">Tennis</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>
~~~

~~~js
export default {
  data () {
    return {
      selected: ['Basketball']
    };
  }
}
~~~


## Custom Radio
Inkline uses custom radio designs by setting the `custom` property to `true` by default. 

<i-radio-group v-model="selectedCustomTrue">
    <i-radio :custom="true" value="Football">Football</i-radio>
    <i-radio :custom="true" value="Volleyball">Tennis</i-radio>
    <i-radio :custom="true" value="Basketball">Basketball</i-radio>    
</i-radio-group>

Selected value: <span>{{selectedCustomTrue}}</span>

~~~html
<i-radio-group v-model="selectedCustomTrue">
    <i-radio :custom="true" value="Football">Football</i-radio>
    <i-radio :custom="true" value="Volleyball">Tennis</i-radio>
    <i-radio :custom="true" value="Basketball">Basketball</i-radio>    
</i-radio-group>
~~~

~~~js
export default {
  data () {
    return {
      selected: ['Basketball']
    };
  }
}
~~~

By setting the `custom` property to `false`, the radios use the browser's default design. 

<i-radio-group v-model="selectedCustomFalse">
    <i-radio :custom="false" value="Football">Football</i-radio>
    <i-radio :custom="false" value="Volleyball">Tennis</i-radio>
    <i-radio :custom="false" value="Basketball">Basketball</i-radio>
</i-radio-group>

Selected value: <span>{{selectedCustomFalse}}</span>

~~~html
<i-radio-group v-model="selected">
    <i-radio :custom="false" value="Football">Football</i-radio>
    <i-radio :custom="false" value="Volleyball">Tennis</i-radio>
    <i-radio :custom="false" value="Basketball">Basketball</i-radio>
</i-radio-group>
~~~

~~~js
export default {
  data () {
    return {
      selected: ['Basketball']
    };
  }
}
~~~

### Radio Buttons
<i-radio-button-group v-model="selectedButton">
    <i-radio-button value="Earth">Earth</i-radio-button>
    <i-radio-button value="Mars">Mars</i-radio-button>
    <i-radio-button value="Jupiter">Jupiter</i-radio-button>
    <i-radio-button value="Venus" disabled>Venus</i-radio-button>
</i-radio-button-group>

~~~html
<i-radio-button-group v-model="selected">
    <i-radio-button value="Earth">Earth</i-radio-button>
    <i-radio-button value="Mars">Mars</i-radio-button>
    <i-radio-button value="Jupiter">Jupiter</i-radio-button>
    <i-radio-button value="Venus" disabled>Venus</i-radio-button>
</i-radio-button-group>
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

