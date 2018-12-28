# Checkbox

Checkbox inputs allow the user to select multiple options from a set. If you have multiple options appearing in a list, 
you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using 
a checkbox and use an on/off switch instead. { .lead }

You will need to use the `i-checkbox` component together with a `i-checkbox-group`.

## Basic Usage

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

## Checkbox Group

<i-checkbox-group v-model="checkedGroup">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Snowboarding">Snowboarding</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

Checked values: <span>{{checkedGroup}}</span>

~~~html
<i-checkbox-group v-model="checked">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
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


## Checkbox Sizes
You're able to use the `size` property to control the size of your inputs, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

<i-checkbox-group v-model="checkedSize">
    <i-checkbox size="sm" value="Football">Football</i-checkbox>
    <i-checkbox size="md" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox size="lg" value="Basketball">Basketball</i-checkbox>
</i-checkbox-group>

Checked values: <span>{{checkedSize}}</span>

~~~html
<i-checkbox-group v-model="checked">
    <i-checkbox size="sm" value="Football">Football</i-checkbox>
    <i-checkbox size="md" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox size="lg" value="Basketball">Basketball</i-checkbox>
</i-checkbox-group>
~~~

~~~js
export default {
  data () {
    return {
      checked: ['Basketball']
    };
  }
}
~~~

Applying the size `size` property to a `i-checkbox-group` will set the chosen size to all of its child inputs.

<i-checkbox-group size="sm" v-model="checkedSizeGroupSm">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

Checked values: <span>{{checkedSizeGroupSm}}</span>

<i-checkbox-group size="lg" v-model="checkedSizeGroupLg">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

Checked values: <span>{{checkedSizeGroupLg}}</span>


<i-checkbox-group size="md" v-model="checkedSizeGroupMd">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

Checked values: <span>{{checkedSizeGroupMd}}</span>

~~~html
<i-checkbox-group size="sm" v-model="checked">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

<i-checkbox-group size="md" v-model="checked">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>

<i-checkbox-group size="lg" v-model="checked">
    <i-checkbox value="Football">Football</i-checkbox>
    <i-checkbox value="Volleyball">Volleyball</i-checkbox>
    <i-checkbox value="Basketball">Basketball</i-checkbox>
    <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
</i-checkbox-group>
~~~
~~~js
export default {
  data () {
    return {
      checked: ['Basketball']
    };
  }
}
~~~


## Custom Checkbox
Inkline uses custom checkbox designs by setting the `custom` property to `true` by default. 

<i-checkbox-group v-model="checkedCustomTrue">
    <i-checkbox :custom="true" value="Football">Football</i-checkbox>
    <i-checkbox :custom="true" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox :custom="true" value="Basketball">Basketball</i-checkbox>    
</i-checkbox-group>

Checked values: <span>{{checkedCustomTrue}}</span>

~~~html
<i-checkbox-group v-model="checkedCustomTrue">
    <i-checkbox :custom="true" value="Football">Football</i-checkbox>
    <i-checkbox :custom="true" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox :custom="true" value="Basketball">Basketball</i-checkbox>    
</i-checkbox-group>
~~~

~~~js
export default {
  data () {
    return {
      checked: ['Basketball']
    };
  }
}
~~~

By setting the `custom` property to `false`, the checkboxes use the browser's default design. 

<i-checkbox-group v-model="checkedCustomFalse">
    <i-checkbox :custom="false" value="Football">Football</i-checkbox>
    <i-checkbox :custom="false" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox :custom="false" value="Basketball">Basketball</i-checkbox>
</i-checkbox-group>

Checked values: <span>{{checkedCustomFalse}}</span>

~~~html
<i-checkbox-group v-model="checked">
    <i-checkbox :custom="false" value="Football">Football</i-checkbox>
    <i-checkbox :custom="false" value="Volleyball">Tennis</i-checkbox>
    <i-checkbox :custom="false" value="Basketball">Basketball</i-checkbox>
</i-checkbox-group>
~~~

~~~js
export default {
  data () {
    return {
      checked: ['Basketball']
    };
  }
}
~~~

## Checkbox Buttons
<i-checkbox-button-group v-model="checkedButton">
    <i-checkbox-button value="Earth">Earth</i-checkbox-button>
    <i-checkbox-button value="Mars">Mars</i-checkbox-button>
    <i-checkbox-button value="Jupiter">Jupiter</i-checkbox-button>
    <i-checkbox-button value="Venus" disabled>Venus</i-checkbox-button>
</i-checkbox-button-group>

Checked values: <span>{{checkedButton}}</span>

~~~html
<i-checkbox-button-group v-model="checked">
    <i-checkbox-button value="Earth">Earth</i-checkbox-button>
    <i-checkbox-button value="Mars">Mars</i-checkbox-button>
    <i-checkbox-button value="Jupiter">Jupiter</i-checkbox-button>
    <i-checkbox-button value="Venus" disabled>Venus</i-checkbox-button>
</i-checkbox-button-group>
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

