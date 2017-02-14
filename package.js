Package.describe({
  name: 'jwz-common',
  version: '0.0.1',
  summary: 'Code shared both by jwz-live and jwz-live-admin',
  git: 'git@github.com:Turing-X/jwz-live-common.git',
  documentation: 'README.md',
});

Package.onUse((api) => {
  api.versionsFrom('1.4.2.6');
  api.use('ecmascript');
  api.use('mongo');
  api.mainModule('server.js', ['server']);
  api.mainModule('main.js');
});
