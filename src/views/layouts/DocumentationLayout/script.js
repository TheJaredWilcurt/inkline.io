import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
// import 'prismjs/plugins/toolbar/prism-toolbar';
// import 'prismjs/plugins/toolbar/prism-toolbar.css';
// import 'prismjs/plugins/autolinker/prism-autolinker';
// import 'prismjs/plugins/autolinker/prism-autolinker.css';
// import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
// import 'prismjs/plugins/line-highlight/prism-line-highlight';
// import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

// import 'prismjs/plugins/previewers/prism-previewers';
// import 'prismjs/plugins/previewers/prism-previewers.css';

// import * as hljs from 'highlight.js';
// import 'highlight.js/lib/languages/htmlbars';
// import 'highlight.js/lib/languages/javascript';
// import 'highlightjs-line-numbers.js';
// import 'highlight.js/styles/default.css';

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
    },
    created: function () {
        // hljs.initHighlightingOnLoad();
    }
};
