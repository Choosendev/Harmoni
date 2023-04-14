const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@src'] = path.resolve(__dirname, 'src');
    return config;
  },
};
