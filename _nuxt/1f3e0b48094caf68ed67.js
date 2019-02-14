(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{406:function(e,r,t){"use strict";t.r(r);var l=t(50),o=t(9);r.default={extends:l.a,name:"FormValidationView",layout:"documentation",components:{IForm:o.t,IFormGroup:o.u,IFormLabel:o.v,IInput:o.x,ITextarea:o.X,ICheckbox:o.h,ICheckboxGroup:o.k,IRadio:o.Q,IRadioGroup:o.T},data:function(){return{basicForm:this.$form({input:{value:"John Doe",validators:[{rule:"required"}]}}),defaultValueForm:this.$form({input:{value:"Default Value"}}),validateValueForm:this.$form({input:{validators:[{rule:"required",message:"Input is required"}]}}),validateOnForm:this.$form({input1:{validateOn:"input",validators:[{rule:"minLength",value:6}]},input2:{validateOn:"blur",validators:[{rule:"minLength",value:6}]}}),alphaValidatorForm:this.$form({input:{validators:[{rule:"alpha"}]},inputSpaces:{validators:[{rule:"alpha",allowSpaces:!0}]},inputDashes:{validators:[{rule:"alpha",allowDashes:!0}]}}),alphanumericValidatorForm:this.$form({input:{validators:[{rule:"alphanumeric"}]},inputSpaces:{validators:[{rule:"alphanumeric",allowSpaces:!0}]},inputDashes:{validators:[{rule:"alphanumeric",allowDashes:!0}]}}),customValidatorForm:this.$form({input:{validators:[{rule:"custom",validator:function(e){return/inkline/.test(e)}}]}}),emailValidatorForm:this.$form({input:{validators:[{rule:"email"}]}}),maxValidatorForm:this.$form({input:{validators:[{rule:"max",value:100}]}}),maxLengthValidatorForm:this.$form({input:{validators:[{rule:"maxLength",value:12}]}}),minValidatorForm:this.$form({input:{validators:[{rule:"min",value:10}]}}),minLengthValidatorForm:this.$form({input:{validators:[{rule:"minLength",value:6}]}}),numberValidatorForm:this.$form({input:{validators:[{rule:"number"}]},inputNegative:{validators:[{rule:"number",allowNegative:!0}]},inputNegativeDecimal:{validators:[{rule:"number",allowNegative:!0,allowDecimal:!0}]}}),requiredValidatorForm:this.$form({input:{validators:[{rule:"required"}]}}),sameAsValidatorForm:this.$form({password:{},passwordConfirmation:{validators:[{rule:"sameAs",target:"password"}]}}),groupedValueForm:this.$form({input:{},group:{input:{}}}),arrayValueForm:this.$form({group:[{value:"First Field"},{value:"Second Field"}]}),form:this.$form({input:{validators:[{rule:"required",message:"Input is required."}]},textarea:{validators:[{rule:"required",message:"Textarea is required."}]},group:{select:{value:"a",validators:[{rule:"required",message:"Select is required."}]},checked:{value:!0,validators:[{rule:"required",message:"Checkbox is required.",invalidateFalse:!0}]},checkbox:{value:["Football"],validators:[{rule:"minLength",value:1,message:"At least one checkbox is required."}]},radio:{value:!0,validators:[{rule:"required",message:"Radio is required.",invalidateFalse:!0}]}}}),listForm:this.$form({items:[{value:"Existing Field"},{value:"Existing Field"}]}),objectForm:this.$form({name:{}})}},methods:{addField:function(){this.listForm.items.$push({value:"Added Field"})},removeField:function(){this.listForm.items.$splice(0,1)},replaceField:function(){this.listForm.items.$splice(0,1,{value:"Spliced Field"})},setEmail:function(){this.objectForm.$set("email",{validators:[{rule:"email"}]},{instance:this})},setAddress:function(){this.objectForm.$set("address",{value:"32 Inkline St."},{instance:this})}},filters:{prettify:function(e){return JSON.stringify(e,null,2)}}}}}]);