var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'src',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
      exclude: path.join(__dirname, 'node_modules'),
      query: {
        presets: [
          'babel-preset-es2015',
          'babel-preset-stage-1'
        ].map(require.resolve)
      }
    }]
  }
};
