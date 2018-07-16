module.exports = {
  components: 'src/components/**/index.js',
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
