Package.describe({
  name: 'maxharris9:template-instance-utils',
  summary: "Wraps Tracker and Template.instance()",
  version: "1.0.4",
  git: "https://github.com/max-leportlabs/maxharris9-template-instance-utils.git",
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use(['standard-app-packages', 'tracker', 'templating', 'underscore' ], [ 'client', 'server' ] );
  api.addFiles('maxharris9:template-instance-utils.js', [ 'client', 'server' ]);

  api.export([ 'checkProperty', 'generateGuid', 'TrackedItems' ], [ 'client', 'server' ] );
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('maxharris9:template-instance-utils');
  api.addFiles('maxharris9:template-instance-utils-tests.js');
});
