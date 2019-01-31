# Forms
Forms are the main wrapper components for form elements. { .lead }

## Basic Form

The `<i-form>` component is a wrapper that provides proper handling of form validation and form grouping.


<i-code-preview title="Form" link="https://github.com/inkline/inkline/tree/master/src/components/Form">

<i-form>
    <i-form-group>
        <i-input v-model="input" name="input" placeholder="Type something.." />
    </i-form-group>
    <i-form-group>
        <i-textarea v-model="textarea" name="textarea" placeholder="Write a comment.." />
    </i-form-group>
    <i-form-group>
        <i-select v-model="select" name="select" placeholder="Choose an option">
            <i-select-option value="a" label="Option A" />
            <i-select-option value="b" label="Option B" />
            <i-select-option value="c" label="Option C" disabled />
        </i-select>
    </i-form-group>
    <i-form-group>
        <i-checkbox-group v-model="checkbox" name="checkbox">
            <i-checkbox value="Football">Football</i-checkbox>
            <i-checkbox value="Volleyball">Volleyball</i-checkbox>
            <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
        </i-checkbox-group>
    </i-form-group>
    <i-form-group>
        <i-radio-group v-model="radio" name="radio">
            <i-radio value="Accept">Accept</i-radio>
            <i-radio value="Decline">Decline</i-radio>
        </i-radio-group>
    </i-form-group>
    <i-form-group>
        <i-button type="submit">Submit</i-button>
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form>
    <i-form-group>
        <i-input v-model="input" placeholder="Type something.." />
    </i-form-group>
    
    <i-form-group>
        <i-textarea v-model="textarea" placeholder="Write a comment.." />
    </i-form-group>
    
    <i-form-group>
        <i-select v-model="select" placeholder="Choose an option">
            <i-select-option value="a" label="Option A" />
            <i-select-option value="b" label="Option B" />
            <i-select-option value="c" label="Option C" disabled />
        </i-select>
    </i-form-group>
    
    <i-form-group>
        <i-checkbox-group v-model="checkbox">
            <i-checkbox value="Football">Football</i-checkbox>
            <i-checkbox value="Volleyball">Volleyball</i-checkbox>
            <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
        </i-checkbox-group>
    </i-form-group>
    
    <i-form-group>
        <i-radio-group v-model="radio">
            <i-radio value="Accept">Accept</i-radio>
            <i-radio value="Decline">Decline</i-radio>
        </i-radio-group>
    </i-form-group>
    
    <i-form-group>
        <i-button type="submit">Submit</i-button>
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      input: '',
      textarea: '',
      select: '',
      checkbox: ['Football'],
      radio: 'Decline',
    };
  }
}
~~~

</template>
</i-code-preview>

## Disabled Form
Setting a form as `disabled` will cause all of its child inputs to be disabled.


<i-code-preview title="Disabled Form" link="https://github.com/inkline/inkline/tree/master/src/components/Form">

<i-form disabled>
    <i-form-group>
        <i-input v-model="inputDisabled" placeholder="Type something.." />
    </i-form-group>
    <i-form-group>
        <i-textarea v-model="textareaDisabled" placeholder="Write a comment.." />
    </i-form-group>
    <i-form-group>
        <i-select v-model="selectDisabled" placeholder="Choose an option">
            <i-select-option value="a" label="Option A" />
            <i-select-option value="b" label="Option B" />
            <i-select-option value="c" label="Option C" disabled/>
        </i-select>
    </i-form-group>
    <i-form-group>
        <i-checkbox-group v-model="checkboxDisabled">
            <i-checkbox value="Football">Football</i-checkbox>
            <i-checkbox value="Volleyball">Volleyball</i-checkbox>
            <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
        </i-checkbox-group>
    </i-form-group>
    <i-form-group>
        <i-radio-group v-model="radioDisabled">
            <i-radio value="Accept">Accept</i-radio>
            <i-radio value="Decline">Decline</i-radio>
        </i-radio-group>
    </i-form-group>
    <i-form-group>
        <i-button type="submit">Submit</i-button>
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form disabled>
    <i-form-group>
        <i-input v-model="input" placeholder="Type something.." />
    </i-form-group>
    
    <i-form-group>
        <i-textarea v-model="textarea" placeholder="Write a comment.." />
    </i-form-group>
    
    <i-form-group>
        <i-select v-model="select" placeholder="Choose an option">
            <i-select-option value="a" label="Option A" />
            <i-select-option value="b" label="Option B" />
            <i-select-option value="c" label="Option C" disabled />
        </i-select>
    </i-form-group>
    
    <i-form-group>
        <i-checkbox-group v-model="checkbox">
            <i-checkbox value="Football">Football</i-checkbox>
            <i-checkbox value="Volleyball">Volleyball</i-checkbox>
            <i-checkbox value="Tennis">Tennis</i-checkbox>
        </i-checkbox-group>
    </i-form-group>
    
    <i-form-group>
        <i-radio-group v-model="radio">
            <i-radio value="Accept">Accept</i-radio>
            <i-radio value="Decline">Decline</i-radio>
        </i-radio-group>
    </i-form-group>
    
    <i-form-group>
        <i-button type="submit">Submit</i-button>
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      input: '',
      textarea: '',
      select: '',
      checkbox: ['Football'],
      radio: 'Decline'
    };
  }
}
~~~

</template>
</i-code-preview>

## Form Sizes
You're able to use the `size` modifier to control the size of the components inside your `<i-form>`, using one of the available sizes: `sm`, `md`, and `lg`. The default size is set to `md`. 

All of the components inside the `<i-form>` will inherit the parent form group's size.


<i-code-preview title="Small Form Size" link="https://github.com/inkline/inkline/tree/master/src/components/Form">

<i-form size="sm">
    <i-form-group>
        <i-input v-model="inputSizeSm" placeholder="Type something.." />
    </i-form-group>
    <i-form-group>
        <i-textarea v-model="textareaSizeSm" placeholder="Write a comment.." />
    </i-form-group>
    <i-form-group>
        <i-select v-model="selectSizeSm" placeholder="Choose an option">
            <i-select-option value="a" label="Option A" />
            <i-select-option value="b" label="Option B" />
            <i-select-option value="c" label="Option C" disabled />
        </i-select>
    </i-form-group>
    <i-form-group>
        <i-checkbox-group v-model="checkboxSizeSm">
            <i-checkbox value="Football">Football</i-checkbox>
            <i-checkbox value="Volleyball">Volleyball</i-checkbox>
            <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
        </i-checkbox-group>
    </i-form-group>
    <i-form-group>
        <i-radio-group v-model="radioSizeSm">
            <i-radio value="Accept">Accept</i-radio>
            <i-radio value="Decline">Decline</i-radio>
        </i-radio-group>
    </i-form-group>
    <i-form-group>
        <i-button type="submit">Submit</i-button>
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form size="sm">
    <i-form-group>
        <i-input v-model="input" placeholder="Type something.." />
    </i-form-group>
    
    <i-form-group>
        <i-textarea v-model="textarea" placeholder="Write a comment.." />
    </i-form-group>
    
    <i-form-group>
        <i-select v-model="select" placeholder="Choose an option">
            <i-select-option value="a" label="Option A" />
            <i-select-option value="b" label="Option B" />
            <i-select-option value="c" label="Option C" disabled />
        </i-select>
    </i-form-group>
    
    <i-form-group>
        <i-checkbox-group v-model="checkbox">
            <i-checkbox value="Football">Football</i-checkbox>
            <i-checkbox value="Volleyball">Volleyball</i-checkbox>
            <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
        </i-checkbox-group>
    </i-form-group>
    
    <i-form-group>
        <i-radio-group v-model="radio">
            <i-radio value="Accept">Accept</i-radio>
            <i-radio value="Decline">Decline</i-radio>
        </i-radio-group>
    </i-form-group>
    
    <i-form-group>
        <i-button type="submit">Submit</i-button>
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      input: '',
      textarea: '',
      select: '',
      checkbox: ['Football'],
      radio: 'Decline'
    };
  }
}
~~~

</template>
</i-code-preview>


<i-code-preview title="Medium Form Size" link="https://github.com/inkline/inkline/tree/master/src/components/Form">

<i-form size="md">
    <i-form-group>
        <i-input v-model="inputSizeMd" placeholder="Type something.." />
    </i-form-group>
    <i-form-group>
        <i-textarea v-model="textareaSizeMd" placeholder="Write a comment.." />
    </i-form-group>
    <i-form-group>
        <i-select v-model="selectSizeMd" placeholder="Choose an option">
            <i-select-option value="a" label="Option A" />
            <i-select-option value="b" label="Option B" />
            <i-select-option value="c" label="Option C" disabled />
        </i-select>
    </i-form-group>
    <i-form-group>
        <i-checkbox-group v-model="checkboxSizeMd">
            <i-checkbox value="Football">Football</i-checkbox>
            <i-checkbox value="Volleyball">Volleyball</i-checkbox>
            <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
        </i-checkbox-group>
    </i-form-group>
    <i-form-group>
        <i-radio-group v-model="radioSizeMd">
            <i-radio value="Accept">Accept</i-radio>
            <i-radio value="Decline">Decline</i-radio>
        </i-radio-group>
    </i-form-group>
    <i-form-group>
        <i-button type="submit">Submit</i-button>
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form size="md">
    <i-form-group>
        <i-input v-model="input" placeholder="Type something.." />
    </i-form-group>
    
    <i-form-group>
        <i-textarea v-model="textarea" placeholder="Write a comment.." />
    </i-form-group>
    
    <i-form-group>
        <i-select v-model="select" placeholder="Choose an option">
            <i-select-option value="a" label="Option A" />
            <i-select-option value="b" label="Option B" />
            <i-select-option value="c" label="Option C" disabled />
        </i-select>
    </i-form-group>
    
    <i-form-group>
        <i-checkbox-group v-model="checkbox">
            <i-checkbox value="Football">Football</i-checkbox>
            <i-checkbox value="Volleyball">Volleyball</i-checkbox>
            <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
        </i-checkbox-group>
    </i-form-group>
    
    <i-form-group>
        <i-radio-group v-model="radio">
            <i-radio value="Accept">Accept</i-radio>
            <i-radio value="Decline">Decline</i-radio>
        </i-radio-group>
    </i-form-group>
    
    <i-form-group>
        <i-button type="submit">Submit</i-button>
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      input: '',
      textarea: '',
      select: '',
      checkbox: ['Football'],
      radio: 'Decline'
    };
  }
}
~~~

</template>
</i-code-preview>


<i-code-preview title="Large Form Size" link="https://github.com/inkline/inkline/tree/master/src/components/Form">

<i-form size="lg">
    <i-form-group>
        <i-input v-model="inputSizeLg" placeholder="Type something.." />
    </i-form-group>
    <i-form-group>
        <i-textarea v-model="textareaSizeLg" placeholder="Write a comment.." />
    </i-form-group>
    <i-form-group>
        <i-select v-model="selectSizeLg" placeholder="Choose an option">
            <i-select-option value="a" label="Option A" />
            <i-select-option value="b" label="Option B" />
            <i-select-option value="c" label="Option C" disabled />
        </i-select>
    </i-form-group>
    <i-form-group>
        <i-checkbox-group v-model="checkboxSizeLg">
            <i-checkbox value="Football">Football</i-checkbox>
            <i-checkbox value="Volleyball">Volleyball</i-checkbox>
            <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
        </i-checkbox-group>
    </i-form-group>
    <i-form-group>
        <i-radio-group v-model="radioSizeLg">
            <i-radio value="Accept">Accept</i-radio>
            <i-radio value="Decline">Decline</i-radio>
        </i-radio-group>
    </i-form-group>
    <i-form-group>
        <i-button type="submit">Submit</i-button>
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form size="lg">
    <i-form-group>
        <i-input v-model="input" placeholder="Type something.." />
    </i-form-group>
    
    <i-form-group>
        <i-textarea v-model="textarea" placeholder="Write a comment.." />
    </i-form-group>
    
    <i-form-group>
        <i-select v-model="select" placeholder="Choose an option">
            <i-select-option value="a" label="Option A" />
            <i-select-option value="b" label="Option B" />
            <i-select-option value="c" label="Option C" disabled />
        </i-select>
    </i-form-group>
    
    <i-form-group>
        <i-checkbox-group v-model="checkbox">
            <i-checkbox value="Football">Football</i-checkbox>
            <i-checkbox value="Volleyball">Volleyball</i-checkbox>
            <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
        </i-checkbox-group>
    </i-form-group>
    
    <i-form-group>
        <i-radio-group v-model="radio">
            <i-radio value="Accept">Accept</i-radio>
            <i-radio value="Decline">Decline</i-radio>
        </i-radio-group>
    </i-form-group>
    
    <i-form-group>
        <i-button type="submit">Submit</i-button>
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
  data () {
    return {
      input: '',
      textarea: '',
      select: '',
      checkbox: ['Football'],
      radio: 'Decline'
    };
  }
}
~~~

</template>
</i-code-preview>