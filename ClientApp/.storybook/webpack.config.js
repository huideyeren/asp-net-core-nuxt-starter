const path = require('path');
const rootPath = path.resolve(__dirname, '..');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = async ({ config, mode }) => {
  config.resolve.alias['@']           = rootPath;
  config.resolve.alias['@components'] = `${rootPath}/components`;
  config.resolve.alias['@assets']     = `${rootPath}/assets`;
  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html');

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true // used with ForkTsCheckerWebpackPlugin
        },
      }
    ],
  });

  config.module.rules.push({
    test: /\.?scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  });
  config.module.rules.push({
    test: /\.pug$/,
    loaders: 'pug-plain-loader'
  });
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  return config
};