module.exports = {
  module: {
    rules: [
      {
          test: /\.js$/,
          use: 'webpack-import-glob-loader'
      },
      {
          test: /\.scss$/,
          use: 'webpack-import-glob-loader'
      },
    ]
  }
};