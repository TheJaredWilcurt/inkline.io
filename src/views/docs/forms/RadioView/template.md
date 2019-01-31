# Radio
Radio inputs allow the user to select one option from a set of options. Typically, there should not be too many options. 
Make sure you use a select input if you think the user doesn't need to see all the available options side-by-side. { .lead }

You will need to use the `i-radio` component together with a `i-radio-group`.

### Basic Usage

<i-code-preview title="Basic Radio Input" link="https://github.com/inkline/inkline/tree/master/src/components/Radio">

<i-radio v-model="selected" value="Apple">Apple</i-radio>
<i-radio v-model="selected" value="Orange">Orange</i-radio>
<i-radio v-model="selected" value="Banana">Banana</i-radio>
<i-radio v-model="selected" value="Strawberry" disabled>Strawberry</i-radio>

<template slot="html">

~~~html
<i-radio v-model="selected" value="Apple">Apple</i-radio>
<i-radio v-model="selected" value="Orange">Orange</i-radio>
<i-radio v-model="selected" value="Banana">Banana</i-radio>
<i-radio v-model="selected" value="Strawberry" disabled>Strawberry</i-radio>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      selected: 'Apple'
    };
  }
}
~~~

</template>
<template slot="output">

Selected value: <code>{{selected}}</code>

</template>
</i-code-preview>


### Radio Group

<i-code-preview title="Radio Group" link="https://github.com/inkline/inkline/tree/master/src/components/Radio">

<i-radio-group v-model="selectedGroup">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Voleyball">Voleyball</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>

<template slot="html">

~~~html
<i-radio-group v-model="selected">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Voleyball">Voleyball</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      selected: 'Football'
    };
  }
}
~~~

</template>
<template slot="output">

Selected value: <code>{{selectedGroup}}</code>

</template>
</i-code-preview>


### Sizes
You're able to use the `size` property to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 


<i-code-preview title="Radio Sizes" link="https://github.com/inkline/inkline/tree/master/src/components/Radio">

<i-radio-group v-model="selectedSize">
    <i-radio size="sm" value="Football">Football</i-radio>
    <i-radio size="md" value="Volleyball">Tennis</i-radio>
    <i-radio size="lg" value="Basketball">Basketball</i-radio>
</i-radio-group>

<template slot="html">

~~~html
<i-radio-group v-model="selected">
    <i-radio size="sm" value="Football">Football</i-radio>
    <i-radio size="md" value="Volleyball">Tennis</i-radio>
    <i-radio size="lg" value="Basketball">Basketball</i-radio>
</i-radio-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      selected: ['Basketball']
    };
  }
}
~~~

</template>
</i-code-preview>

Applying the size `size` property to a `i-radio-group` will set the chosen size to all of its child inputs.


<i-code-preview title="Radio Group Sizes" link="https://github.com/inkline/inkline/tree/master/src/components/Radio">

<i-radio-group size="sm" v-model="selectedSizeGroupSm" class="_margin-bottom-1">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Volleyball">Tennis</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>

<i-radio-group size="md" v-model="selectedSizeGroupMd" class="_margin-bottom-1">
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


<template slot="html">

~~~html
<i-radio-group size="sm" v-model="selected">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Volleyball">Tennis</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>
~~~
~~~html
<i-radio-group size="md" v-model="selected">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Volleyball">Tennis</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>
~~~
~~~html
<i-radio-group size="lg" v-model="selected">
    <i-radio value="Football">Football</i-radio>
    <i-radio value="Volleyball">Tennis</i-radio>
    <i-radio value="Basketball">Basketball</i-radio>
    <i-radio value="Tennis" disabled>Tennis</i-radio>
</i-radio-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      selected: ['Basketball']
    };
  }
}
~~~

</template>
</i-code-preview>


### Custom vs. Native
Inkline uses custom radio designs by setting the `custom` property to `true` by default. 

<i-code-preview title="Custon Radio Input" link="https://github.com/inkline/inkline/tree/master/src/components/Radio">

<i-radio-group v-model="selectedCustomTrue">
    <i-radio :custom="true" value="Football">Football</i-radio>
    <i-radio :custom="true" value="Volleyball">Tennis</i-radio>
    <i-radio :custom="true" value="Basketball">Basketball</i-radio>    
</i-radio-group>

<template slot="html">

~~~html
<i-radio-group v-model="selectedCustomTrue">
    <i-radio :custom="true" value="Football">Football</i-radio>
    <i-radio :custom="true" value="Volleyball">Tennis</i-radio>
    <i-radio :custom="true" value="Basketball">Basketball</i-radio>    
</i-radio-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      selected: ['Basketball']
    };
  }
}
~~~

</template>
</i-code-preview>

By setting the `custom` property to `false`, the radios use the browser's default design. 


<i-code-preview title="Native Radio Input" link="https://github.com/inkline/inkline/tree/master/src/components/Radio">

<i-radio-group v-model="selectedCustomFalse">
    <i-radio :custom="false" value="Football">Football</i-radio>
    <i-radio :custom="false" value="Volleyball">Tennis</i-radio>
    <i-radio :custom="false" value="Basketball">Basketball</i-radio>
</i-radio-group>

<template slot="html">

~~~html
<i-radio-group v-model="selected">
    <i-radio :custom="false" value="Football">Football</i-radio>
    <i-radio :custom="false" value="Volleyball">Tennis</i-radio>
    <i-radio :custom="false" value="Basketball">Basketball</i-radio>
</i-radio-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      selected: ['Basketball']
    };
  }
}
~~~

</template>
</i-code-preview>

### Radio Buttons

You can display your radio inputs as toggleable buttons using the provided `<i-radio-button>` and `<i-radio-button-group>` components.

<i-code-preview title="Radio Button Group" link="https://github.com/inkline/inkline/tree/master/src/components/RadioButton">

<i-radio-button-group v-model="selectedButton">
    <i-radio-button value="Earth">Earth</i-radio-button>
    <i-radio-button value="Mars">Mars</i-radio-button>
    <i-radio-button value="Jupiter">Jupiter</i-radio-button>
    <i-radio-button value="Venus" disabled>Venus</i-radio-button>
</i-radio-button-group>

<template slot="html">

~~~html
<i-radio-button-group v-model="selected">
    <i-radio-button value="Earth">Earth</i-radio-button>
    <i-radio-button value="Mars">Mars</i-radio-button>
    <i-radio-button value="Jupiter">Jupiter</i-radio-button>
    <i-radio-button value="Venus" disabled>Venus</i-radio-button>
</i-radio-button-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      selected: 'Earth'
    };
  }
}
~~~

</template>
</i-code-preview>

