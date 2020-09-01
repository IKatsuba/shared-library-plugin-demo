const {
  SharedLibraryWebpackPlugin,
} = require('@tinkoff/shared-library-webpack-plugin');

module.exports = {
  output: {
    jsonpFunction: 'mainWebpackJsonp'
  },
  plugins: [
    new SharedLibraryWebpackPlugin({
      libs: [
        '@angular/core',
        '@angular/common',
        '@angular/common/http',
        '@angular/platform-browser',
        '@angular/platform-browser/animations',
        '@angular/animations',
        '@angular/animations/browser',
        'zone.js/dist/zone',
      ],
    }),
  ],
};
