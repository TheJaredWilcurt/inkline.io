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
import PopoverView from '@views/docs/components/PopoverView';
import TooltipView from '@views/docs/components/TooltipView';

import CheckboxView from '@views/docs/forms/CheckboxView';
import InputView from '@views/docs/forms/InputView';
import InputNumberView from '@views/docs/forms/InputNumberView';
import RadioView from '@views/docs/forms/RadioView';
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
                path: 'code',
                name: 'docs.code',
                component: CodeView
            },
            {
                path: 'colors',
                name: 'docs.colors',
                component: ColorsView
            },
            {
                path: 'grid',
                name: 'docs.grid',
                component: GridView
            },
            {
                path: 'images',
                name: 'docs.images',
                component: ImagesView
            },
            {
                path: 'layout',
                name: 'docs.layout',
                component: LayoutView
            },
            {
                path: 'tables',
                name: 'docs.tables',
                component: TablesView
            },
            {
                path: 'typography',
                name: 'docs.typography',
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
                path: 'components/popover',
                name: 'docs.components.popover',
                component: PopoverView
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
                path: 'components/checkbox',
                name: 'docs.components.checkbox',
                component: CheckboxView
            },
            {
                path: 'components/input',
                name: 'docs.components.input',
                component: InputView
            },
            {
                path: 'components/input-number',
                name: 'docs.components.input-number',
                component: InputNumberView
            },
            {
                path: 'components/radio',
                name: 'docs.components.radio',
                component: RadioView
            },
            {
                path: 'components/textarea',
                name: 'docs.components.textarea',
                component: TextareaView
            }
        ]
    }
];
