// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
module.exports = baseConfig => {
  baseConfig.resolve = {
    extensions: [
      '.js', '.jsx'],
  }
  baseConfig.module.rules = [{
    test: /\.jsx?$/,
    exclude: /.*node_modules.*/,
    loader: 'babel-loader' // this will use your `babel-loader@8`
  },

  {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url-loader',
    options: {
      limit: 8192
    }
  }
  ];
  return baseConfig;
};
