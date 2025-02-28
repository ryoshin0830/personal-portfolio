const webpack = require('webpack');

module.exports = function override(config, env) {
  // Buffer, URL, and other Node polyfills
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "url": require.resolve("url/"),
    "buffer": require.resolve("buffer/"),
    "timers": require.resolve("timers-browserify"),
    "stream": require.resolve("stream-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "assert": require.resolve("assert/"),
    "util": require.resolve("util/"),
    "process": require.resolve("process/browser"),
  };

  // Buffer global
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ];

  return config;
};