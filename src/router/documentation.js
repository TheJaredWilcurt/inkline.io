import DocumentationLayout from '@/views/layouts/DocumentationLayout';
import ColorsView from '@/views/docs/core/ColorsView';
import GridView from '@/views/docs/core/GridView';
import LayoutView from '@/views/docs/core/LayoutView';

export default [
    {
        name: 'docs',
        path: '/docs',
        component: DocumentationLayout,
        children: [
            {
                path: 'grid',
                name: 'docs.grid',
                component: GridView
            },
            {
                path: 'layout',
                name: 'docs.layout',
                component: LayoutView
            },
            {
                path: 'colors',
                name: 'docs.colors',
                component: ColorsView
            }
        ]
    }
];
