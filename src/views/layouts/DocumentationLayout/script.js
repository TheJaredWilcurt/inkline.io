import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/autolinker/prism-autolinker';
import 'prismjs/plugins/autolinker/prism-autolinker.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/previewers/prism-previewers';
import 'prismjs/plugins/previewers/prism-previewers.css';

import Layout from '@/components/Layout';
import TableOfContents from '@/components/TableOfContents';

export default {
    name: 'DocumentationLayout',
    extends: Layout,
    components: {
        TableOfContents
    },
    mounted () {
        Prism.highlightAll();
    },
    updated () {
        Prism.highlightAll();
    }
};
