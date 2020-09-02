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
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/cypress/",
    "<rootDir>/src/test.ts",
  ]
};
