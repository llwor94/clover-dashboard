const withSass = require('@zeit/next-sass')
const withTypeScript = require('@zeit/next-typescript')

module.exports = withTypeScript(withSass({ cssModules: true }))
