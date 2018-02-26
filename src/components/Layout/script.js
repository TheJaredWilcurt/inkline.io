import View from '@/components/View';
import { Layout, LayoutAside, LayoutFooter, LayoutHeader } from 'inkline';

export default {
    name: 'View',
    extends: View,
    components: {
        Layout,
        LayoutAside,
        LayoutContent,
        LayoutFooter,
        LayoutHeader
    }
};
