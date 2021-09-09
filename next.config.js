const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

module.exports = withPlugins(
  [
    withSvgr,
    // your other plugins here
  ],
  {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      return config;
    },
    images: {
      domains: ['images.ctfassets.net'],
    },
  }
);
