Package.describe({
  name: 'peerlibrary:fiber-utils',
  summary: "Various fiber utilities",
  version: '0.6.0',
  git: 'https://github.com/peerlibrary/meteor-fiber-utils.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.1');

  // Core dependencies.
  api.use([
    'coffeescript',
    'underscore'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:assert@0.2.5'
  ]);

  api.export('FiberUtils');

  api.addFiles([
    'src/base.coffee'
  ]);

  api.addFiles([
    'src/fence.coffee',
    'src/synchronize.coffee',
    'src/ensure.coffee'
  ], 'server');

  api.addFiles([
    'synchronize-stub.coffee'
  ], 'src/client');
});

Package.onTest(function (api) {
  // Core dependencies.
  api.use([
    'underscore',
    'coffeescript'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:classy-test@0.2.16'
  ]);

  // Internal dependencies.
  api.use([
    'peerlibrary:fiber-utils'
  ]);

  api.addFiles([
    'utils/tests.coffee'
  ]);
});
