import DocumentationLayout from '@/views/layouts/documentation/DocumentationLayout';
import ColorsView from '@/views/docs/core/colors/ColorsView';
import GridView from '@/views/docs/core/grid/GridView';

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
                path: 'colors',
                name: 'docs.colors',
                component: ColorsView
            }
        ]
    }
];
