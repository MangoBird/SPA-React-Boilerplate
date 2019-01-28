const express = require('express');
const path = require('path');
const app = express();
const portNumber = 3000;
const sourceDir = 'dist';
const bowser = require('bowser');

app.get('/incompatible', (req, res) => {
  console.log('redirected');
  res.sendFile(
    path.join(__dirname + '/' + sourceDir + '/incompatible/index.html')
  );
});

app.use((req, res, next) => {
  const browser = bowser.getParser(req.headers['user-agent']);
  const isValidBrowser = browser.satisfies({
    chrome: '>46', // window 10 checked, release date: 2015.10.13
    firefox: '>53', // window 10 checked, release date: 2017.01.23
    opera: '>42', // window 10 checked, release date: 2017.02.7
    'internet explorer': '>10', // window 10 checked,
    'microsoft edge': '>14' // window 10 checked
  });
  const info = browser.parse();
  console.log('user agent: ', req.headers['user-agent']);
  console.log(info);
  console.log('valid? ', isValidBrowser);

  if (isValidBrowser || info.parsedResult.platform.type === 'mobile') {
    console.log('sending website');
    next();
  } else {
    console.log('sending incompatiblity notice');
    res.redirect('/incompatible');
  }
});

// Handles any requests that don't match the ones above
app.use(express.static(sourceDir));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/' + sourceDir + '/index.html'));
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
