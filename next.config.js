const withTypescript = require('@zeit/next-typescript');
const withCss = require('@zeit/next-css');

module.exports = withTypescript(
    // para usar css con next
    withCss({
        cssModules: true,
        cssLoaderOptions:{
            camelCase: true,
        },
        target:'serverless',
    }),
    
);

