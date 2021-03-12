// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    './cucumber/features/*.feature'
  ],
  cucumberOpts: {
    require: [
      './e2e/*.po.ts',
      './cucumber/features/step_definitions/*.steps.ts',
    ]
  },
  onPrepare: function () {
    require('ts-node').register({
      project: 'cucumber/tsconfig.json'
    });
  },

  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4201/',
};
