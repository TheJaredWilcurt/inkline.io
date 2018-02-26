import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';

export default {
    name: 'DocumentationLayout',
    extends: Layout,
    computed: {
        items: function () {
            return [
                {
                    title: 'Components',
                    children: [
                        {
                            title: 'TEST',
                            header: true
                        },
                        {
                            title: 'TEST',
                            url: this.$router.resolve('test')
                        }
                    ]
                }
            ];
        }
    },
    components: {
        Sidebar
    }
};
