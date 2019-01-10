import CodeView from '@views/docs/core/CodeView';
import ColorsView from '@views/docs/core/ColorsView';
import DocumentationLayout from '@views/layouts/DocumentationLayout';
import GridView from '@views/docs/core/GridView';
import ImagesView from '@views/docs/core/ImagesView';
import LayoutView from '@views/docs/core/LayoutView';
import TablesView from '@views/docs/core/TablesView';
import TypographyView from '@views/docs/core/TypographyView';

import AlertView from '@views/docs/components/AlertView';
import BadgeView from '@views/docs/components/BadgeView';
import BreadcrumbView from '@views/docs/components/BreadcrumbView';
import ButtonView from '@views/docs/components/ButtonView';
import ButtonGroupView from '@views/docs/components/ButtonGroupView';
import CardView from '@views/docs/components/CardView';
import CollapsibleView from '@views/docs/components/CollapsibleView';
import DropdownView from '@views/docs/components/DropdownView';
import HeaderView from '@views/docs/components/HeaderView';
import ModalView from '@views/docs/components/ModalView';
import NavView from '@views/docs/components/NavView';
import NavbarView from '@views/docs/components/NavbarView';
import PopoverView from '@views/docs/components/PopoverView';
import ProgressView from '@views/docs/components/ProgressView';
import TooltipView from '@views/docs/components/TooltipView';

import CheckboxView from '@views/docs/forms/CheckboxView';
import FormView from '@views/docs/forms/FormView';
import FormGroupView from '@views/docs/forms/FormGroupView';
import FormLabelView from '@views/docs/forms/FormLabelView';
import FormValidationView from '@views/docs/forms/FormValidationView';
import InputView from '@views/docs/forms/InputView';
import InputNumberView from '@views/docs/forms/InputNumberView';
import RadioView from '@views/docs/forms/RadioView';
import SelectView from '@views/docs/forms/SelectView';
import TextareaView from '@views/docs/forms/TextareaView';

export default [
    {
        name: 'docs',
        path: '/docs',
        component: DocumentationLayout,
        children: [
            /**
             * Core Views
             */
            {
                path: 'core/code',
                name: 'docs.core.code',
                component: CodeView
            },
            {
                path: 'core/colors',
                name: 'docs.core.colors',
                component: ColorsView
            },
            {
                path: 'core/grid',
                name: 'docs.core.grid',
                component: GridView
            },
            {
                path: 'core/images',
                name: 'docs.core.images',
                component: ImagesView
            },
            {
                path: 'core/layout',
                name: 'docs.core.layout',
                component: LayoutView
            },
            {
                path: 'core/tables',
                name: 'docs.core.tables',
                component: TablesView
            },
            {
                path: 'core/typography',
                name: 'docs.core.typography',
                component: TypographyView
            },

            /**
             * Component Views
             */
            {
                path: 'components/alert',
                name: 'docs.components.alert',
                component: AlertView
            },
            {
                path: 'components/badge',
                name: 'docs.components.badge',
                component: BadgeView
            },
            {
                path: 'components/breadcrumb',
                name: 'docs.components.breadcrumb',
                component: BreadcrumbView
            },
            {
                path: 'components/button',
                name: 'docs.components.button',
                component: ButtonView
            },
            {
                path: 'components/button-group',
                name: 'docs.components.button-group',
                component: ButtonGroupView
            },
            {
                path: 'components/card',
                name: 'docs.components.card',
                component: CardView
            },
            {
                path: 'components/collapsible',
                name: 'docs.components.collapsible',
                component: CollapsibleView
            },
            {
                path: 'components/dropdown',
                name: 'docs.components.dropdown',
                component: DropdownView
            },
            {
                path: 'components/header',
                name: 'docs.components.header',
                component: HeaderView
            },
            {
                path: 'components/modal',
                name: 'docs.components.modal',
                component: ModalView
            },
            {
                path: 'components/nav',
                name: 'docs.components.nav',
                component: NavView
            },
            {
                path: 'components/navbar',
                name: 'docs.components.navbar',
                component: NavbarView
            },
            {
                path: 'components/popover',
                name: 'docs.components.popover',
                component: PopoverView
            },
            {
                path: 'components/progress',
                name: 'docs.components.progress',
                component: ProgressView
            },
            {
                path: 'components/tooltip',
                name: 'docs.components.tooltip',
                component: TooltipView
            },

            /**
             * Form Component Views
             */
            {
                path: 'forms/checkbox',
                name: 'docs.forms.checkbox',
                component: CheckboxView
            },
            {
                path: 'forms/form',
                name: 'docs.forms.form',
                component: FormView
            },
            {
                path: 'forms/form-group',
                name: 'docs.forms.form-group',
                component: FormGroupView
            },
            {
                path: 'forms/form-label',
                name: 'docs.forms.form-label',
                component: FormLabelView
            },
            {
                path: 'forms/form-validation',
                name: 'docs.forms.form-validation',
                component: FormValidationView
            },
            {
                path: 'forms/input',
                name: 'docs.forms.input',
                component: InputView
            },
            {
                path: 'forms/input-number',
                name: 'docs.forms.input-number',
                component: InputNumberView
            },
            {
                path: 'forms/radio',
                name: 'docs.forms.radio',
                component: RadioView
            },
            {
                path: 'forms/select',
                name: 'docs.forms.select',
                component: SelectView
            },
            {
                path: 'forms/textarea',
                name: 'docs.forms.textarea',
                component: TextareaView
            }
        ]
    }
];
