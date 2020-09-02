# Angular9Jest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Set Up Jest
1. Remove Jasmine/Karma packages running the next command:
```
npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter jasmine-core jasmine-spec-reporter @types/jasminewd2 @types/jasmine
```
2. Install Jest Preset and Types, running the next command:
```
npm install --save-dev jest jest-preset-angular @types/jest @types/node
```
3. Create a file `setup-jest.ts` into root directory, and fill in with the following:
```typescript
import 'jest-preset-angular';
```
4. Create a file `jest.config.js` into root directory, and fill in with the following:
```javascript
module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: [
        "<rootDir>/setup-jest.ts"
    ],
    transformIgnorePatterns: [
        "node_modules/(?!@ngrx|ngx-socket-io)" // List any packages here that error
    ],
    transform: {
        "^.+\\.(ts|js|html)$": "ts-jest"
    },
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/cypress/",
        "<rootDir>/src/test.ts",
    ]
};
```
5. Add the following `types` array to `compilerOptions` in `tsconfig.json`:
```
"compilerOptions": {
  "types": [
    "jest"
  ]
}
```
6. Replace `jasmine` with `jest` in `types` array to `compilerOptions` in `tsconfig.spec.json`:
```
"compilerOptions": {
  "types": [
    "jest"
  ]
}
```
7. Add `jest` scripts to `package.json`:
```
"scripts": { 
    "test": "jest",
    "test-watch": "jest --watch"
}
```
8. Remove karma.conf.js and test.ts:
```
rm ./karma.conf.js ./src/test.ts
```


Add jest scripts to package.json:
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
