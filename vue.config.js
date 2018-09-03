// vue.config.js
const path = require('path');

module.exports = {
    pages: {
        index: {
            entry: 'src/index.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.module
            .rule('stylus')
            .oneOf('normal')
            .use('stylus-loader')
            .tap((options) => Object.assign(options, {
                import: [
                    path.join(__dirname, 'src/css/config/index.styl')
                ]
            }));

        config.module
            .rule('md')
            .test(/\.md$/)
            .use('markdown-complete-loader')
            .loader('markdown-complete-loader')
            .options({ configFile: path.join(__dirname, 'markdown.config.js') })
            .end();

        config.resolve
            .set('symlinks', true);

        config.resolve.alias
            .set('@', path.join(__dirname, 'src'))
            .set('@components', path.join(__dirname, 'src', 'components'))
            .set('@resources', path.join(__dirname, 'src', 'resources'))
            .set('@routes', path.join(__dirname, 'src', 'routes'))
            .set('@views', path.join(__dirname, 'src', 'views'))
            .set('@inkline', 'inkline/src')
            .set('vue$', 'vue/dist/vue.esm.js')
            .end();
    }
};
