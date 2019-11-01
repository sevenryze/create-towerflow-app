module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  bail: true,
  collectCoverageFrom: ["./src/*"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 20,
      lines: 60,
      statements: 60,
    },
  },
  testMatch: ["**/?(*.)+(spec).ts?(x)"],
  setupFilesAfterEnv: ["./jest-config/setup.js"],
};
