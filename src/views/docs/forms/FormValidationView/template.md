# Form Validation
Inkline provides you with helpful form validation utilities. { .lead }

## Basic Form

The `<i-form>` component is a wrapper that provides proper handling of form validation and form grouping.

<i-form :schema="form">
    <i-form-group>
        <i-input v-model="form.requiredInput.value" name="requiredInput" placeholder="Type something.." />
        {{ form.requiredInput }}
    </i-form-group>
    <i-form-group>
        <i-input v-model="form.formGroup.requiredInput.value" name="formGroup.requiredInput" placeholder="Type something.." />
        {{ form.formGroup.requiredInput }}
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
