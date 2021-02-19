// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
  // テストをそれぞれchromiumとfirefoxで実行する
  browsers: ["chromium", "firefox"],
  exitOnPageError: false, // GitHub currently throws errors
  launchOptions: {
    headless: true
  }
}
