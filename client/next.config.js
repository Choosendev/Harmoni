const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@src'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@components'] = path.join(
      __dirname,
      'src/components'
    );
    return config;
  },
};
