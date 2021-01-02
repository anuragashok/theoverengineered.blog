const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

module.exports = withPlugins(
  [
    withSvgr,
    withBundleAnalyzer,
    // your other plugins here
  ],
  {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.plugins.push(new DuplicatePackageCheckerPlugin());
      return config;
    },
  }
);
