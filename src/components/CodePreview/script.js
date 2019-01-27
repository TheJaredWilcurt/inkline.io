import { IButton, IButtonGroup } from '@inkline/inkline';

export default {
    name: 'ICodePreview',
    components: {
        IButton,
        IButtonGroup
    },
    data() {
        return {
            active: this.defaultActive || 'default',
            tabs: [
                { id: 'default', title: 'Result' },
                { id: 'html', title: 'HTML' },
                { id: 'css', title: 'CSS' },
                { id: 'js', title: 'JS' }
            ]
        };
    },
    props: {
        defaultActive: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        },
        expanded: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        setActive(id) {
            this.active = id;
        }
    }
};
