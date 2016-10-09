// Requirejs Configuration Options
require.config({
  // to set the default folder
  baseUrl: '../../app', 
  // paths: maps ids with paths (no extension)
  paths: {
      'jasmine': ['../libs/jasmine/jasmine'],
      'jasmine-html': ['../libs/jasmine/jasmine-html'],
      'jasmine-boot': ['../libs/jasmine/boot']
  },
  // shim: makes external libraries compatible with requirejs (AMD)
  shim: {
    'jasmine-html': {
      deps : ['jasmine']
    },
    'jasmine-boot': {
      deps : ['jasmine', 'jasmine-html']
    }
  }
});