exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'your user name',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'your key',

  updateJob: false,
  specs: ['./tests/specs/single_test.js'],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: 'parallel_test',
    build: 'webdriver-browserstack'
  },

  capabilities: [
    {
      browser: 'chrome'
    },
    {
      browser: 'firefox'
    },
    {
      browser: 'internet explorer'
    },
    {
      browser: 'safari'
    }
  ],

  logLevel: 'trace',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd'
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
