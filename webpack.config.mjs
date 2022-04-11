import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const config = {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: '@enveru/icons',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: {
    react: 'react',
    dom: 'react-dom',
    styled: 'styled-components',
  },
};

export default config;
