import View from '@components/View';
import { IFormGroup, IFormLabel, IInput, ITextarea, ICheckbox, ICheckboxGroup, IRadio, IRadioGroup } from 'inkline';

export default {
    extends: View,
    name: 'FormLabelView',
    components: {
        IFormGroup,
        IFormLabel,
        IInput,
        ITextarea,
        ICheckbox,
        ICheckboxGroup,
        IRadio,
        IRadioGroup
    },
    data () {
        return {
            labelInputValue: '',
            labelDefaultInputValue: '',
            labelLeftInputValue: '',
            labelRightInputValue: '',
            labelSmInputValue: '',
            labelMdInputValue: '',
            labelLgInputValue: '',
        };
    }
};
