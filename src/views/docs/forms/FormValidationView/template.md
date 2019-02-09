# Form Validation
Inkline provides you with some powerful form validation utilities. { .lead }

### Schema Example
The `<i-form>` component and all input components have a `schema` property that can be used to provide form schema validation. The schema object provides form validation status fields such as `valid`, `invalid`, `touched`, `untouched`, `dirty`, `pristine` and `errors`.

The `<i-form>` component needs to take the form itself as a `schema`. Each input needs to take the `form.inputName` as a schema and `form.inputName.value` as a model. This will ensure that form validation is working properly.

<i-code-preview title="Form Schema Example" link="https://github.com/inkline/inkline/blob/master/src/factories/FormBuilder.js">

<i-form :schema="basicForm">
    <i-form-group>
        <i-input :schema="basicForm.input" v-model="basicForm.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                input: {
                    value: 'John Doe',
                    validators: [
                        { rule: 'required' }
                    ]
                }
            })
        };
    }
}
~~~

</template>
<template slot="output">

<pre>
<code>
<span class="_text-muted">// console.log(this.form);</span>

{{ basicForm | prettify }}
</code>
</pre>

</template>
</i-code-preview>

### Input Default Value
Providing a default value for a schema field can be done using the `value` field as follows:

<i-code-preview title="Form Schema Input Default Value" link="https://github.com/inkline/inkline/blob/master/src/factories/FormBuilder.js">

<i-form :schema="defaultValueForm">
    <i-form-group>
        <i-input :schema="defaultValueForm.input" v-model="defaultValueForm.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                input: {
                    value: 'Default Value'
                }
            })
        };
    }
}
~~~

</template>
<template slot="output">
<span class="_text-muted">// console.log(this.form);</span>

<pre>
<code>
{{ defaultValueForm | prettify }}
</code>
</pre>

</template>
</i-code-preview>

### Input Validation Message
Using the `validators` field, you can specify an array of validators to be used on the input. You can use the `validateOn` field to specify the event that triggers the validation.

<i-code-preview title="Input Validation Message" link="https://github.com/inkline/inkline/blob/master/src/factories/FormBuilder.js">

<i-form :schema="validateValueForm">
    <i-form-group>
        <i-input :schema="validateValueForm.input" v-model="validateValueForm.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                input: {
                    validators: [
                        { rule: 'required', message: 'Input is required' }
                    ]
                }
            })
        };
    }
}
~~~

</template>
<template slot="output">
<span class="_text-muted">// console.log(this.form);</span>

<pre>
<code>
{{ validateValueForm | prettify }}
</code>
</pre>

</template>
</i-code-preview>

### Schema Groups

You can define schema groups to determine the validation of a group of inputs.

##### Object Form Groups
Objects that aren't empty and don't have a `value` or `validators` field are treated as form groups. Form groups can be used to see the validation status of specific fields.

<i-code-preview title="Form Schema Form Groups" link="https://github.com/inkline/inkline/blob/master/src/factories/FormBuilder.js">

<i-form :schema="groupedValueForm">
    <i-form-group>
        <i-input :schema="groupedValueForm.input" v-model="groupedValueForm.input.value" placeholder="Enter your first name.." />
    </i-form-group>
    <i-form-group>
        <i-input :schema="groupedValueForm.group.input" v-model="groupedValueForm.group.input.value" placeholder="Enter your address.." />
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="Enter your first name.." />
    </i-form-group>
    <i-form-group>
        <i-input :schema="form.group.input" v-model="form.group.input.value" placeholder="Enter your address.." />
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                input: {},
                group: {
                    input: {}
                }
            })
        };
    }
}
~~~

</template>
<template slot="output">
<span class="_text-muted">// console.log(this.form);</span>

<pre>
<code>
{{ groupedValueForm | prettify }}
</code>
</pre>

</template>
</i-code-preview>

##### Array Form Groups
Form groups can be an `Array` of fields, allowing you to loop over them using `v-for`.

<i-code-preview title="Form Schema Array Form Groups" link="https://github.com/inkline/inkline/blob/master/src/factories/FormBuilder.js">

<i-form :schema="arrayValueForm">
    <i-form-group v-for="field in arrayValueForm.group" :key="field.name">
        <i-input :schema="field" v-model="field.value" placeholder="Type something.." />
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group v-for="field in form.group" :key="field.name">
        <i-input :schema="field" v-model="field.value" placeholder="Type something.." />
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                group: [
                    { value: 'First Field' },
                    { value: 'Second Field' }
                ]
            })
        };
    }
}
~~~

</template>
<template slot="output">
<span class="_text-muted">// console.log(this.form);</span>

<pre>
<code>
{{ arrayValueForm | prettify }}
</code>
</pre>

</template>
</i-code-preview>


### Validators
There are several validation options available in the `validators` field. Here are your available options:

<!-- Alpha Validator -->

<i-code-preview title="Alpha Validator" markup="alpha" link="https://github.com/inkline/inkline/blob/master/src/validators">
<i-form :schema="alphaValidatorForm">
    <i-form-group>
        <i-input :schema="alphaValidatorForm.input" v-model="alphaValidatorForm.input.value" placeholder="This field should contain only letters" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="alphaValidatorForm.inputSpaces" v-model="alphaValidatorForm.inputSpaces.value" placeholder="This field should contain only letters and spaces" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="alphaValidatorForm.inputDashes" v-model="alphaValidatorForm.inputDashes.value" placeholder="This field should contain only letters and dashes" />
    </i-form-group>
</i-form>
<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="This field should contain only letters" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="form.inputSpaces" v-model="form.inputSpaces.value" placeholder="This field should contain only letters and spaces" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="form.inputDashes" v-model="form.inputDashes.value" placeholder="This field should contain only letters and dashes" />
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                input: {
                    validators: [
                        { rule: 'alpha' }
                    ]
                },
                inputSpaces: {
                    validators: [
                        { rule: 'alpha', allowSpaces: true },
                    ]
                },
                inputDashes: {
                    validators: [
                        { rule: 'alpha', allowDashes: true }
                    ]
                }
            })
        };
    }
}
~~~

</template>
<template slot="output">
<span class="_text-muted">// console.log(this.form);</span>
<pre>
<code>
{{ alphaValidatorForm | prettify }}
</code>
</pre>
</template>
</i-code-preview>


<!-- Alphanumeric Validator -->

<i-code-preview title="Alphanumeric Validator" markup="alphanumeric" link="https://github.com/inkline/inkline/blob/master/src/validators">
<i-form :schema="alphaValidatorForm">
    <i-form-group>
        <i-input :schema="alphanumericValidatorForm.input" v-model="alphanumericValidatorForm.input.value" placeholder="This field should contain only letters and numbers" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="alphanumericValidatorForm.inputSpaces" v-model="alphanumericValidatorForm.inputSpaces.value" placeholder="This field should contain only letters, numbers and spaces" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="alphanumericValidatorForm.inputDashes" v-model="alphanumericValidatorForm.inputDashes.value" placeholder="This field should contain only letters, numbers and dashes" />
    </i-form-group>
</i-form>
<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="This field should contain only letters and numbers" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="form.inputSpaces" v-model="form.inputSpaces.value" placeholder="This field should contain only letters, numbers and spaces" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="form.inputDashes" v-model="form.inputDashes.value" placeholder="This field should contain only letters, numbers and dashes" />
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                input: {
                    validators: [
                        { rule: 'alphanumeric' }
                    ]
                },
                inputSpaces: {
                    validators: [
                        { rule: 'alphanumeric', allowSpaces: true },
                    ]
                },
                inputDashes: {
                    validators: [
                        { rule: 'alphanumeric', allowDashes: true }
                    ]
                }
            })
        };
    }
}
~~~

</template>
<template slot="output">
<span class="_text-muted">// console.log(this.form);</span>
<pre>
<code>
{{ alphaValidatorForm | prettify }}
</code>
</pre>
</template>
</i-code-preview>


<!-- Number Validator -->

<i-code-preview title="Number Validator" markup="number" link="https://github.com/inkline/inkline/blob/master/src/validators">
<i-form :schema="numberValidatorForm">
    <i-form-group>
        <i-input :schema="numberValidatorForm.input" v-model="numberValidatorForm.input.value" placeholder="This field should contain positive numbers" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="numberValidatorForm.inputNegative" v-model="numberValidatorForm.inputNegative.value" placeholder="This field should contain positive or negative numbers" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="numberValidatorForm.inputNegativeDecimal" v-model="numberValidatorForm.inputNegativeDecimal.value" placeholder="This field should contain positive or negative decimal numbers" />
    </i-form-group>
</i-form>
<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="This field should contain only numbers" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="form.inputNegative" v-model="form.inputNegative.value" placeholder="This field should contain positive or negative numbers" />
    </i-form-group>
    <i-form-group>
        <i-input :schema="form.inputNegativeDecimal" v-model="form.inputNegativeDecimal.value" placeholder="This field should contain positive or negative decimal numbers" />
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                input: {
                    validators: [
                        { rule: 'number' }
                    ]
                },
                inputNegative: {
                    validators: [
                        { rule: 'number', allowNegative: true }
                    ]
                },
                inputNegativeDecimal: {
                    validators: [
                        { rule: 'number', allowNegative: true, allowDecimal: true }
                    ]
                }
            })
        };
    }
}
~~~

</template>
<template slot="output">
<span class="_text-muted">// console.log(this.form);</span>
<pre>
<code>
{{ numberValidatorForm | prettify }}
</code>
</pre>
</template>
</i-code-preview>


<!-- Required Validator -->

<i-code-preview title="Required Validator" markup="required" link="https://github.com/inkline/inkline/blob/master/src/validators">
<i-form :schema="requiredValidatorForm">
    <i-form-group>
        <i-input :schema="requiredValidatorForm.input" v-model="requiredValidatorForm.input.value" placeholder="This field is required" />
    </i-form-group>
</i-form>
<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="This field is required" />
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                input: {
                    validators: [
                        { rule: 'required' }
                    ]
                }
            })
        };
    }
}
~~~

</template>
<template slot="output">
<span class="_text-muted">// console.log(this.form);</span>
<pre>
<code>
{{ requiredValidatorForm | prettify }}
</code>
</pre>
</template>
</i-code-preview>




### Complete Form Example

The `<i-form>` component and all input components have a `schema` property that can be used to provide form schema validation. The schema object provides form validation status fields such as `valid`, `invalid`, `touched`, `untouched`, `dirty`, `pristine` and `errors`.

The schema object `this.form` contains the validation state of the `<i-form>`, and is updated as soon as the input changes. The object looks as seen in the Output tab: 

<i-code-preview title="Complete Form Example" link="https://github.com/inkline/inkline/blob/master/src/factories/FormBuilder.js">

<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="Enter your first name.." />
    </i-form-group>
    <i-form-group>
        <i-textarea :schema="form.textarea" v-model="form.textarea.value" placeholder="Write a comment.." />
    </i-form-group>
    <i-form-group>
        <i-form-group>
            <i-select :schema="form.group.select" v-model="form.group.select.value" placeholder="Choose an option">
                <i-select-option value="a" label="Option A" />
                <i-select-option value="b" label="Option B" />
                <i-select-option value="c" label="Option C" disabled />
            </i-select>
        </i-form-group>
        <i-form-group>
            <i-checkbox :schema="form.group.checked" v-model="form.group.checked.value">I agree</i-checkbox>
        </i-form-group>
        <i-form-group>
            <i-checkbox-group :schema="form.group.checkbox" v-model="form.group.checkbox.value">
                <i-checkbox value="Football">Football</i-checkbox>
                <i-checkbox value="Volleyball">Volleyball</i-checkbox>
                <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
            </i-checkbox-group>
        </i-form-group>
        <i-form-group>
            <i-radio-group :schema="form.group.radio" v-model="form.group.radio.value">
                <i-radio :value="true">Accept</i-radio>
                <i-radio :value="false">Decline</i-radio>
            </i-radio-group>
        </i-form-group>
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="Enter your first name.." />
    </i-form-group>
    
    <i-form-group>
        <i-textarea :schema="form.textarea" v-model="form.textarea.value" placeholder="Write a comment.." />
    </i-form-group>
    
    <i-form-group>
        <i-form-group>
            <i-select :schema="form.group.select" v-model="form.group.select.value" placeholder="Choose an option">
                <i-select-option value="a" label="Option A" />
                <i-select-option value="b" label="Option B" />
                <i-select-option value="c" label="Option C" disabled />
            </i-select>
        </i-form-group>
        <i-form-group>
            <i-checkbox-group :schema="form.group.checkbox" v-model="form.group.checkbox.value">
                <i-checkbox value="Football">Football</i-checkbox>
                <i-checkbox value="Volleyball">Volleyball</i-checkbox>
                <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
            </i-checkbox-group>
        </i-form-group>
        <i-form-group>
            <i-radio-group :schema="form.group.radio" v-model="form.group.radio.value">
                <i-radio :value="true">Accept</i-radio>
                <i-radio :value="false">Decline</i-radio>
            </i-radio-group>
        </i-form-group>
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                input: {
                    validators: [
                        { rule: 'required', message: 'Input is required.' }
                    ]
                },
                textarea: {
                    validators: [
                        { rule: 'required', message: 'Textarea is required.' }
                    ]
                },
                group: {
                    select: {
                        value: 'a',
                        validators: [
                            { rule: 'required', message: 'Select is required.' }
                        ]
                    },
                    checkbox: {
                        value: ['Football'],
                        validators: [
                            { rule: 'minLength', value: 1, message: 'At least one checkbox is required.' }
                        ]
                    },
                    radio: {
                        value: true,
                        validators: [
                            { rule: 'required', message: 'Radio is required.', invalidateFalse: true }
                        ]
                    }
                }
            })
        };
    }
}
~~~

</template>
<template slot="output">

<span class="_text-muted">// console.log(this.form);</span>

<pre>
<code>
{{ form | prettify }}
</code>
</pre>

</template>
</i-code-preview>

### Dynamically Added Fields and Groups
The form validation framework wouldn't be complete without dynamically added fields and groups. Inkline provides a simple API for adding and removing fields.

##### Object Group Operations
Just like Arrays, Objects can be manipulated and kept up to date using a custom API. You can use the `$set` method to update an object field. To enable reactivity, we'll need to also pass in the current Vue instance inside the options to take advantage of it's internal methods.

<code>this.form.group.$set(name, item, options)</code>

<i-code-preview title="Form Schema Object Group Operations" link="https://github.com/inkline/inkline/blob/master/src/factories/FormBuilder.js">

<i-form :schema="objectForm">
    <i-form-group>
        <i-input :schema="objectForm.name" v-model="objectForm.name.value" placeholder="Enter your name.." />
    </i-form-group>
    <i-form-group v-if="objectForm.email">
        <i-input :schema="objectForm.email" v-model="objectForm.email.value" placeholder="Enter your email.." />
    </i-form-group>
    <i-form-group v-if="objectForm.address">
        <i-input :schema="objectForm.address" v-model="objectForm.address.value" placeholder="Enter your address.." />
    </i-form-group>
    <i-form-group>
        <i-button @click="setEmail" type="button">Set Email</i-button>&nbsp;
        <i-button @click="setAddress" type="button">Set Address</i-button>&nbsp;
    </i-form-group>
</i-form>


<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.name" v-model="form.name.value" placeholder="Enter your name.." />
    </i-form-group>
    <i-form-group v-if="form.email">
        <i-input :schema="form.email" v-model="form.email.value" placeholder="Enter your email.." />
    </i-form-group>
    <i-form-group v-if="form.address">
        <i-input :schema="form.address" v-model="form.address.value" placeholder="Enter your address.." />
    </i-form-group>
    
    <i-form-group>
        <i-button @click="setEmail" type="button">Set Email</i-button>&nbsp;
        <i-button @click="setAddress" type="button">Set Address</i-button>&nbsp;
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                name: {}
            })
        };
    },
    methods: {
        setEmail() {
            this.form.$set('email', {
                validators: [
                    { rule: 'email' }
                ]
            }, { instance: this });
        },
        setAddress() {
            this.form.$set('address', {
                value: '32 Inkline St.'
            }, { instance: this });
        }
    }
}
~~~

</template>
<template slot="output">
<span class="_text-muted">// console.log(this.form);</span>

<pre>
<code>
{{ objectForm | prettify }}
</code>
</pre>

</template>
</i-code-preview>


##### Array Group Operations
Inkline provides you with custom implementations for Array group operations using `$push` and`$splice`. These two methods will take care of registering events and making sure your form schema is always up to date.

<code>this.form.group.$push(item, options)</code><br/>
<code>this.form.group.$splice(index, deleteCount, item, options)</code>

<i-code-preview title="Form Schema Array Group Operations" link="https://github.com/inkline/inkline/blob/master/src/factories/FormBuilder.js">

<i-form :schema="listForm">
    <i-form-group v-for="item in listForm.items" :key="item.name">
        <i-input :schema="item" v-model="item.value" placeholder="Type something.." />
    </i-form-group>
    <i-form-group>
        <i-button @click="addField" type="button">Add</i-button>&nbsp;
        <i-button @click="removeField" type="button">Remove First</i-button>&nbsp;
        <i-button @click="replaceField" type="button">Replace First</i-button>
    </i-form-group>
</i-form>

<template slot="html">

~~~html
<i-form :schema="form">
    <i-form-group v-for="item in form.items" :key="item.name">
        <i-input :schema="item" v-model="item.value" placeholder="Type something.." />
    </i-form-group>
    
    <i-form-group>
        <i-button @click="addField" type="button">Add</i-button>
        <i-button @click="removeField" type="button">Remove First</i-button>
        <i-button @click="replaceField" type="button">Replace First</i-button>
    </i-form-group>
</i-form>
~~~

</template>
<template slot="js">

~~~js
export default {
    data () {
        return {
            form: this.$form({
                items: [
                    { value: 'Existing Field' },
                    { value: 'Existing Field' }
                ]
            })
        };
    },
    methods: {
        addField() {
            this.listForm.items.$push({ value: 'Added Field' });
        },
        removeField() {
            this.listForm.items.$splice(0, 1);
        },
        replaceField() {
            this.listForm.items.$splice(0, 1, { value: 'Spliced Field' });
        }
    }
}
~~~

</template>
<template slot="output">
<span class="_text-muted">// console.log(this.form);</span>

<pre>
<code>
{{ listForm | prettify }}
</code>
</pre>

</template>
</i-code-preview>