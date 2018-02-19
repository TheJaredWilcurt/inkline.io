'use strict';

const utils = require('../helpers/utils');
const config = require('./index');
const isProduction = process.env.NODE_ENV === 'production';
const sourceMapEnabled = isProduction
    ? config.production.productionSourceMap
    : config.development.cssSourceMap;

const loaders = utils.vueStyleLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
});

loaders['md'] = [utils.markdownLoader()];

module.exports = {
    loaders: loaders,
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.development.cacheBusting,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
};
