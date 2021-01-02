const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withPlugins(
  [
    withSvgr,
    withBundleAnalyzer,
    // your other plugins here
  ],
  {
    experimental: {
      optimizeFonts: true,
      optimizeImages: true,
    },
  }
);
