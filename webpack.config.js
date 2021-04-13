module.exports = {
  mode: 'development',
  entry: {
    main: ['./source/js/form.js', './source/js/menu.js', './source/js/utils.js'],
    vendor: ['picturefill','inputmask']
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build/js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
};
