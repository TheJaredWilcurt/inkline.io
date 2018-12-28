import View from '@components/View';
import { IBreadcrumb, IBreadcrumbItem } from 'inkline';

export default {
    name: 'BreadcrumbView',
    extends: View,
    components: {
        IBreadcrumb,
        IBreadcrumbItem
    },
    data() {
        return {
            items: [
                { id: 0, title: 'Home', href: '/' },
                { id: 1, title: 'Components', to: 'docs.components' },
                { id: 2, title: 'Breadcrumbs', active: true }
            ]
        };
    }
};