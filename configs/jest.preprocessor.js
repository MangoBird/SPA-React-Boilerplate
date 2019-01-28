const path = require('path');
const fs = require('fs');
const stripJsonComments = require('strip-json-comments');
const tsc = require('typescript');
const tsConfig = stripJsonComments(
  fs.readFileSync(path.resolve(__dirname, './../tsconfig.json')).toString()
);

module.exports = {
  process(src, path) {
    const isTs = path.endsWith('.ts');
    const isTsx = path.endsWith('.tsx');
    const isTypescriptFile = isTs || isTsx;

    if (isTypescriptFile) {
      src = tsc.transpileModule(src, {
        compilerOptions: tsConfig.compilerOptions,
        fileName: path
      }).outputText;

      // update the path so babel can try and process the output
      path =
        path.substr(0, path.lastIndexOf('.')) + (isTs ? '.js' : '.jsx') || path;
    }

    return src;
  }
};
