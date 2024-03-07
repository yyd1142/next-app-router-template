const baseConfig = require('@ocloud/shop-nextjs-config');
const pkg = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = baseConfig({
  pkg,
  dir: process.cwd(),
  timeStamp,
});

module.exports = {...nextConfig, /** your custom configuration */};
