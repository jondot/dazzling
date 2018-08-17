const path = require('path')

module.exports = {
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400'
        }
      ],
      raw: '<style type="text/css">html { font-size: 10px; }</style>'
    }
  },
  theme: {
    fontFamily: {
      base: '"Open Sans", sans-serif'
    }
  },
  components: 'src/components/**/index.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/wrapper')
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    }
  }
}
