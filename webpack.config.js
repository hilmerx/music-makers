let path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist/assets/scripts"),
    filename: "[name].js",
    libraryTarget: 'var',
    library: 'EntryPoint'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
