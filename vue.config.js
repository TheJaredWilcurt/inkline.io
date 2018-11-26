// vue.config.js
const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, "docs"),
    pages: {
        index: {
            entry: 'src/index.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.output
                .filename('[name].[hash].js')
                .end()
        }

        ['normal', 'normal-modules', 'vue', 'vue-modules'].forEach((oneOf) => config.module
            .rule('stylus')
            .oneOf(oneOf)
            .use('stylus-loader')
            .tap((options) => Object.assign(options, {
                import: [
                    path.join(__dirname, 'src/css/config/index.styl')
                ]
            })));

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
            .set('inkline', 'inkline/src')
            .set('vue$', 'vue/dist/vue.esm.js')
            .end();
    },
    devServer: {
        allowedHosts: [
            '.ngrok.io',
            '.serveo.net'
        ]
    }
};
