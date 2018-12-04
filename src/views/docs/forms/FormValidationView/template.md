# Form Validation
Inkline provides you with helpful form validation utilities. { .lead }

## Basic Form

The `<i-form>` component is a wrapper that provides proper handling of form validation and form grouping.

<i-form :schema="form">
    <i-form-group>
        <i-input :schema="form.input" v-model="form.input.value" placeholder="Enter your first name.." />
        {{ form.input }}
    </i-form-group>
    <i-form-group>
        <i-textarea :schema="form.textarea" v-model="form.textarea.value" placeholder="Write a comment.." />
        {{ form.textarea }}
    </i-form-group>
    <i-form-group>
        <i-form-group>
            <i-select :schema="form.group.select" v-model="form.group.select.value" placeholder="Choose an option">
                <i-select-option value="a" label="Option A" />
                <i-select-option value="b" label="Option B" />
                <i-select-option value="c" label="Option C" disabled />
            </i-select>
            {{ form.group.select }}
        </i-form-group>
        <i-form-group>
            <i-checkbox :schema="form.group.checked" v-model="form.group.checked.value">I agree</i-checkbox>
            {{ form.group.checked }}
        </i-form-group>
        <i-form-group>
            <i-checkbox-group :schema="form.group.checkbox" v-model="form.group.checkbox.value">
                <i-checkbox value="Football">Football</i-checkbox>
                <i-checkbox value="Volleyball">Volleyball</i-checkbox>
                <i-checkbox value="Tennis" disabled>Tennis</i-checkbox>
            </i-checkbox-group>
            {{ form.group.checkbox }}
        </i-form-group>
        <i-form-group>
            <i-radio-group :schema="form.group.radio" v-model="form.group.radio.value">
                <i-radio value="Accept">Accept</i-radio>
                <i-radio value="Decline">Decline</i-radio>
            </i-radio-group>
            {{ form.group.radio }}
        </i-form-group>
        <br/>{{form.group}}
    </i-form-group>
</i-form>

{{form}}

~~~html
<i-form>
    <i-form-group>
        <i-input v-model="input" validate="form.input" placeholder="Type something.." />
    </i-form-group>
</i-form>
~~~

~~~js
export default {
    data () {
        return {
            form: this.$form({
                requiredInput: {
                    value: '',
                    validators: [
                        { rule: 'required', message: 'Input is required.' }
                    ]
                },
                emailInput: {
                    value: '',
                    validators: [
                        { rule: 'email', message: 'Email is not valid.' }
                    ]
                },
                minMaxInput: {
                    validators: [
                        { rule: 'min', value: 1, message: 'Value must be greater than 1.' },
                        { rule: 'max', value: 100, message: 'Value must be smaller than 100.' },
                    ]
                }
            })
        };
    }
}
~~~
