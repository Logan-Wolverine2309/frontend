const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the entry point as needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match both .js and .jsx files
        exclude: /node_modules/, // Don't process files in node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for these files
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these file extensions
  },
};