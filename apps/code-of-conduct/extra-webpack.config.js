const {
  SharedLibraryWebpackPlugin,
} = require('@tinkoff/shared-library-webpack-plugin');

module.exports = {
  output: {
    jsonpFunction: 'codeOfConductWebpackJsonp',
  },
  plugins: [
    new SharedLibraryWebpackPlugin({
      libs: [
        { name: '@angular/core', usedExports: [] },
        { name: '@angular/common', usedExports: [] },
        { name: '@angular/common/http', usedExports: [] },
        { name: '@angular/platform-browser', usedExports: ['DomSanitizer'] },
        { name: '@angular/platform-browser/animations', usedExports: [] },
        { name: '@angular/animations', usedExports: [] },
        { name: '@angular/animations/browser', usedExports: [] },
        'zone.js/dist/zone',
      ],
    }),
  ],
};
