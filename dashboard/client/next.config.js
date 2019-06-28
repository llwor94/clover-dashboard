const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withTypeScript = require('@zeit/next-typescript')

module.exports = withTypeScript(
  withSass(
    withCSS({
      cssModules: false,
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(otf|ttf)$/,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'static/',
              limit: 100000
            }
          }
        })

        return config
      }
    })
  )
)
