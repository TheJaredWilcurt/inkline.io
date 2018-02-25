import DocumentationLayout from '@/views/layouts/DocumentationLayout';
import ColorsView from '@/views/docs/core/ColorsView';
import GridView from '@/views/docs/core/GridView';

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
