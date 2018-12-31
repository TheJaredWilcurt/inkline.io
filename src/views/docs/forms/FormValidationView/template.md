# Form Validation
Inkline provides you with helpful form validation utilities. { .lead }

## Basic usage
The `<i-form>` component and all input components have a `schema` property that can be used to provide form schema validation. The schema object provides form validation status fields such as `valid`, `invalid`, `touched`, `untouched`, `dirty`, `pristine` and `errors`.

The `<i-form>` component needs to take the form itself as a `schema`. Each input needs to take the `form.inputName` as a schema and `form.inputName.value` as a model. This will ensure that form validation is working properly.

<i-form :schema="basicForm">
    <i-form-group>
        <i-input :schema="basicForm.input" v-model="basicForm.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>
~~~

~~~js
export default {
    data () {
        return {
            form: this.$form({
                input: {}
            })
        };
    }
}
~~~

<pre>
<code>
{{ basicForm | prettify }}
</code>
</pre>

## Default Input Value
Providing a default value for a schema field can be done using the `value` field as follows:

<i-form :schema="defaultValueForm">
    <i-form-group>
        <i-input :schema="defaultValueForm.input" v-model="defaultValueForm.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>
~~~

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

<pre>
<code>
{{ defaultValueForm | prettify }}
</code>
</pre>

## Input Validation
Using the `validators` field, you can specify an array of validators to be used on the input. You can use the `validateOn` field to specify the event that triggers the validation.

<i-form :schema="validateValueForm">
    <i-form-group>
        <i-input :schema="validateValueForm.input" v-model="validateValueForm.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>

~~~html
<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="Enter your first name.." />
    </i-form-group>
</i-form>
~~~

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

<pre>
<code>
{{ validateValueForm | prettify }}
</code>
</pre>

## Form Groups
Objects that aren't empty and don't have a `value` or `validators` field are treated as form groups. Form groups can be used to see the validation status of specific fields.

<i-form :schema="groupedValueForm">
    <i-form-group>
        <i-input :schema="groupedValueForm.input" v-model="groupedValueForm.input.value" placeholder="Enter your first name.." />
    </i-form-group>
    <i-form-group>
        <i-input :schema="groupedValueForm.group.input" v-model="groupedValueForm.group.input.value" placeholder="Enter your address.." />
    </i-form-group>
</i-form>

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

<pre>
<code>
{{ groupedValueForm | prettify }}
</code>
</pre>

## Array Form Groups
Form groups can be an `Array` of fields, allowing you to loop over them using `v-for`.

<i-form :schema="arrayValueForm">
    <i-form-group v-for="field in arrayValueForm.group" :key="field.name">
        <i-input :schema="field" v-model="field.value" placeholder="Type something.." />
    </i-form-group>
</i-form>

~~~html
<i-form :schema="form">
    <i-form-group v-for="field in form.group" :key="field.name">
        <i-input :schema="field" v-model="field.value" placeholder="Type something.." />
    </i-form-group>
</i-form>
~~~

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

<pre>
<code>
{{ arrayValueForm | prettify }}
</code>
</pre>

## Complete Form Example

The `<i-form>` component and all input components have a `schema` property that can be used to provide form schema validation. The schema object provides form validation status fields such as `valid`, `invalid`, `touched`, `untouched`, `dirty`, `pristine` and `errors`.

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
                <i-radio value="Accept">Accept</i-radio>
                <i-radio value="Decline">Decline</i-radio>
            </i-radio-group>
        </i-form-group>
    </i-form-group>
</i-form>

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
                <i-radio value="Accept">Accept</i-radio>
                <i-radio value="Decline">Decline</i-radio>
            </i-radio-group>
        </i-form-group>
    </i-form-group>
</i-form>
~~~

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
                        { rule: 'required', message: 'Textarea is required.', enabled: false }
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
                            { rule: 'required', message: 'Checkbox is required.' }
                        ]
                    },
                    radio: {
                        value: 'Accept',
                        validators: [
                            { rule: 'required', message: 'Radio is required.' }
                        ]
                    }
                }
            })
        };
    }
}
~~~

The schema object `this.form` contains the validation state of the `<i-form>`, and is updated as soon as the input changes. The object looks as follows: 

<pre>
<code>
{{ form | prettify }}
</code>
</pre>

## Dynamically Added Fields and Groups
The form validation framework wouldn't be complete without dynamically added fields and groups. Inkline provides a simple API for adding and removing fields.

### Array Group Operations
Inkline provides you with custom implementations for Array group operations using `$push` and`$splice`. These two methods will take care of registering events and making sure your form schema is always up to date.

<code>this.form.group.$push(item, options)</code><br/>
<code>this.form.group.$splice(index, deleteCount, item, options)</code>

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

<pre>
<code>
{{ listForm | prettify }}
</code>
</pre>

### Object Group Operations
Just like Arrays, Objects can be manipulated and kept up to date using a custom API. You can use the `$set` method to update an object field. To enable reactivity, we'll need to also pass in the current Vue instance inside the options to take advantage of it's internal methods.

<code>this.form.group.$set(name, item, options)</code>

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

<pre>
<code>
{{ objectForm | prettify }}
</code>
</pre>