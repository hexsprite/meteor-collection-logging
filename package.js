Package.describe({
  name: 'hexsprite:collection-logging',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
})

Package.onUse(function (api) {
  api.versionsFrom('2.3.5')
  api.use('ecmascript')
  api.use('lai:collection-extensions')
  api.use('matb33:collection-hooks')
  api.mainModule('collection-logging.js')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('hexsprite:collection-logging')
  api.mainModule('collection-logging-tests.js')
})
