const withSass = require('@zeit/next-sass')
module.exports = withSass({
    cssModules: true,
    typescriptLoaderOptions: {
        transpileOnly: false,
      },
})