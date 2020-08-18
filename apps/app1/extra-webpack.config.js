const {
  SharedLibraryWebpackPlugin,
} = require('@tinkoff/shared-library-webpack-plugin');

module.exports = {
  plugins: [
    new SharedLibraryWebpackPlugin({
      libs: '@angular/**',
    }),
  ],
};
