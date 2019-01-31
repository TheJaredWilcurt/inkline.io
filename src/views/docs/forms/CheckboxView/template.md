# Checkbox

Checkbox inputs allow the user to select multiple options from a set. If you have multiple options appearing in a list, 
you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using 
a checkbox and use an on/off switch instead. { .lead }

You will need to use the `i-checkbox` component together with a `i-checkbox-group`.

### Basic Usage

<i-code-preview title="Basic Checkbox" link="https://github.com/inkline/inkline/tree/master/src/components/Checkbox">

<i-checkbox v-model="checked">Apple</i-checkbox>

<template slot="html">

~~~html
<i-checkbox v-model="checked">Apple</i-checkbox>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      checked: true
    };
  }
}
~~~

</template>
<template slot="output">

Checked: <code>{{checked}}</code>

</template>
</i-code-preview>

### Checkbox Group

<i-code-preview title="Checkbox Group" link="https://github.com/inkline/inkline/tree/master/src/components/Checkbox">

<i-checkbox-group v-model="checkedGroup">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Snowboarding">Snowboarding</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

<template slot="html">

~~~html
<i-checkbox-group v-model="checked">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Snowboarding">Snowboarding</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      checked: ['Football', 'Basketball', 'Tennis']
    };
  }
}
~~~

</template>
<template slot="output">

Checked values: <code>{{checkedGroup}}</code>

</template>
</i-code-preview>


### Sizes
You're able to use the `size` property to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

<i-code-preview title="Checkbox Sizes" link="https://github.com/inkline/inkline/tree/master/src/components/Checkbox">

<i-checkbox-group v-model="checkedSize">
    <i-checkbox size="sm" value="Football">Football</i-checkbox>
    <i-checkbox size="md" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox size="lg" value="Basketball">Basketball</i-checkbox>
</i-checkbox-group>

<template slot="html">

~~~html
<i-checkbox-group v-model="checked">
    <i-checkbox size="sm" value="Football">Football</i-checkbox>
    <i-checkbox size="md" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox size="lg" value="Basketball">Basketball</i-checkbox>
</i-checkbox-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      checked: ['Basketball']
    };
  }
}
~~~

</template>
</i-code-preview>

Applying the size `size` property to a `i-checkbox-group` will set the chosen size to all of its child inputs.

<i-code-preview title="Checkbox Group Size" link="https://github.com/inkline/inkline/tree/master/src/components/Checkbox">

<i-checkbox-group size="sm" v-model="checkedSizeGroupSm" class="_margin-bottom-1">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

<i-checkbox-group size="md" v-model="checkedSizeGroupMd" class="_margin-bottom-1">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

<i-checkbox-group size="lg" v-model="checkedSizeGroupLg">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

<template slot="html">

~~~html
<i-checkbox-group size="sm" v-model="checked">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>
~~~
~~~html
<i-checkbox-group size="md" v-model="checked">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>
~~~
~~~html
<i-checkbox-group size="lg" v-model="checked">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      checked: ['Basketball', 'Tennis']
    };
  }
}
~~~

</template>
</i-code-preview>


### Custom vs. Native
Inkline uses custom checkbox designs by setting the `custom` property to `true` by default. 

<i-code-preview title="Custom Checkbox" link="https://github.com/inkline/inkline/tree/master/src/components/Checkbox">

<i-checkbox-group v-model="checkedCustomTrue">
    <i-checkbox :custom="true" value="Football">Football</i-checkbox>
    <i-checkbox :custom="true" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox :custom="true" value="Basketball">Basketball</i-checkbox>    
</i-checkbox-group>

<template slot="html">

~~~html
<i-checkbox-group v-model="checkedCustomTrue">
    <i-checkbox :custom="true" value="Football">Football</i-checkbox>
    <i-checkbox :custom="true" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox :custom="true" value="Basketball">Basketball</i-checkbox>    
</i-checkbox-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      checked: ['Basketball']
    };
  }
}
~~~

</template>
</i-code-preview>

By setting the `custom` property to `false`, the checkboxes use the browser's default design. 

<i-code-preview title="Native Checkbox" link="https://github.com/inkline/inkline/tree/master/src/components/Checkbox">

<i-checkbox-group v-model="checkedCustomFalse">
    <i-checkbox :custom="false" value="Football">Football</i-checkbox>
    <i-checkbox :custom="false" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox :custom="false" value="Basketball">Basketball</i-checkbox>
</i-checkbox-group>

<template slot="html">

~~~html
<i-checkbox-group v-model="checked">
    <i-checkbox :custom="false" value="Football">Football</i-checkbox>
    <i-checkbox :custom="false" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox :custom="false" value="Basketball">Basketball</i-checkbox>
</i-checkbox-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      checked: ['Basketball']
    };
  }
}
~~~

</template>
</i-code-preview>

### Checkbox Buttons

You can display your checkbox inputs as toggleable buttons using the provided `<i-checkbox-button>` and `<i-checkbox-button-group>` components.

<i-code-preview title="Checkbox Buttons" link="https://github.com/inkline/inkline/tree/master/src/components/CheckboxButton">

<i-checkbox-button-group v-model="checkedButton">
    <i-checkbox-button value="Earth">Earth</i-checkbox-button>
    <i-checkbox-button value="Mars">Mars</i-checkbox-button>
    <i-checkbox-button value="Jupiter">Jupiter</i-checkbox-button>
    <i-checkbox-button value="Venus" disabled>Venus</i-checkbox-button>
</i-checkbox-button-group>

<template slot="html">

~~~html
<i-checkbox-button-group v-model="checked">
    <i-checkbox-button value="Earth">Earth</i-checkbox-button>
    <i-checkbox-button value="Mars">Mars</i-checkbox-button>
    <i-checkbox-button value="Jupiter">Jupiter</i-checkbox-button>
    <i-checkbox-button value="Venus" disabled>Venus</i-checkbox-button>
</i-checkbox-button-group>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      checked: ['Earth']
    };
  }
}
~~~

</template>
</i-code-preview>

