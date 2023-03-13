const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  //This property defines where the application starts
  entry: {
    index: './src/index.js'
  },
    
  //This property defines the file path and the file name which will be used for deploying the bundled file
  output:{
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
    
  //Setup loaders
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
    
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Browser Assistant',
      template: 'popup.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve('src/assets/manifest.json'), to: path.resolve('dist') },
        { from: path.resolve('src/assets/images'), to: path.resolve('dist') },
      ],
    }),
  ]
}