/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    setupFilesAfterEnv: ["./jest.setup.js"],
    preset: "ts-jest",
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".ts"],
    globals: {
      "ts-jest": {
        useESM: true,
      },
    },
    verbose: true,
    moduleNameMapper: {
      "^(\\.{1,2}/.*)\\.js$": "$1",
    },
  };