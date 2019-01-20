import ICodePreview from '../CodePreview';

export default {
    name: 'IApiPreview',
    extends: ICodePreview,
    data() {
        return {
            active: 'props',
            tabs: [
                { id: 'props', title: 'Props' },
                { id: 'slots', title: 'Slots' },
                { id: 'events', title: 'Events' }
            ]
        };
    }
};
