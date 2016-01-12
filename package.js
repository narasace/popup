Package.describe({
  name: 'narasace:popup',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Zimolo's first meteor package",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/narasace/popup.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('popup.js');
  api.addFiles('popup.html',"client");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('narasace:popup');
  api.addFiles('popup-tests.js');
});
