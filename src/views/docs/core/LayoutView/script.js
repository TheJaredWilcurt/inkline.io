import View from '@components/View';
import { ILayout, ILayoutHeader, ILayoutContent, ILayoutAside, ILayoutFooter } from 'inkline';

export default {
    name: 'LayoutView',
    extends: View,
    components: {
        ILayout,
        ILayoutHeader,
        ILayoutContent,
        ILayoutAside,
        ILayoutFooter
    }
};
