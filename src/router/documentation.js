import CodeView from '@/views/docs/core/CodeView';
import ColorsView from '@/views/docs/core/ColorsView';
import DocumentationLayout from '@/views/layouts/DocumentationLayout';
import GridView from '@/views/docs/core/GridView';
import ImagesView from '@/views/docs/core/ImagesView';
import LayoutView from '@/views/docs/core/LayoutView';
import RadioView from '@/views/docs/forms/RadioView';
import TypographyView from '@/views/docs/core/TypographyView';

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
                path: 'typography',
                name: 'docs.typography',
                component: TypographyView
            },

            /**
             * Component Views
             */
            {
                path: 'components/radio',
                name: 'docs.components.radio',
                component: RadioView
            }
        ]
    }
];
