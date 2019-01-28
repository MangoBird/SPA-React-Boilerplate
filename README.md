# SPA React Boilerplate

## Contains
- [x] [Typescript](https://www.typescriptlang.org/) 
- [x] [React](https://facebook.github.io/react/) 
- [x] [Redux](https://github.com/reactjs/redux) 
- [x] [Redux Saga](https://redux-saga.js.org/)
- [x] [Immer](https://github.com/mweststrate/immer)
- [x] [React Router](https://github.com/ReactTraining/react-router) 
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

### Build tools
- [x] [Webpack](https://webpack.github.io) 4
  - [x] [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [x] [Typescript Loader](https://github.com/TypeStrong/ts-loader)
- [x] [Sass Loader](https://github.com/webpack-contrib/sass-loader)

### Linter/Formatter
- [x] [TSLint](https://www.typescriptlang.org/)
- [x] [Prettier](https://facebook.github.io/react/) 
- [x] [Stylelint](https://github.com/reactjs/redux) 
  - [x] [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)

### Testing tools
- [x] [Jest](https://github.com/facebook/jest)
- [x] [Redux Saga Test Plan](https://github.com/jfairbank/redux-saga-test-plan) 
- [x] [Stylelint](https://github.com/SimenB/stylint) 
  - [x] [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)


## Installation
1. Clone/download repo
2. `npm install`


## Usage
**Development**
`npm run start`
* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080`

**Production**
`npm run start-prod`
* App served @ `http://localhost:3000`

---

**All commands**

| Command                | Description                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| `npm run start`        | (alias of `npm run start-dev`)                                           |
| `npm run start-dev`    | Build app continuously (HMR enabled) and serve @ `http://localhost:8080` |
| `npm run start-prod`   | Build app once (HMR disabled) and serve @ `http://localhost:3000`        |
| `npm run build`        | Build app to `/dist/`                                                    |
| `npm run lint`         | Run Typescript and SASS linter                                           |
| `npm run lint:ts`      | Run Typescript linter                                                    |
| `npm run lint:sass`    | Run SASS linter                                                          |
| `npm run test`         | Run jest tests                                                           |
| `npm run e2e:local`    | Run end-to-end test on local machine                                     |
| `npm run e2e:single`   | Run single end-to-end test on browserstack grid                          |
| `npm run e2e:parallel` | Run parallel end-to-end test on browserstack grid                        |
| `npm run e2e:multiple` | Run multiple end-to-end test on browserstack grid                        |

