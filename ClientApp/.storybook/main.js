const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        vueDocgenOptions: {
          alias: {
            '@': path.resolve(__dirname, '../'),
          }
        }
      }
    }
  ],
};
