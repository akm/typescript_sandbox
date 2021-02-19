const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment')
  .default

// const logger = require('bs-logger/dist').default


class CustomEnvironment extends PlaywrightEnvironment {
  async setup() {
    await super.setup()
  }

  async teardown() {
    await super.teardown()
  }

  testFullPath(test) {
    return test.parent ? `${this.testFullPath(test.parent)}/${test.name}` : "" // test.name
  }

  async handleTestEvent(event) {
    console.log(`event.name: ${event.name}`)
    // await jestPlaywright.saveCoverage(page)

    if (event.name === 'test_fn_failure') {
      const t = event.test
      const fullpath = this.testFullPath(t)
      for(let i=0; i < t.errors.length; i++) {
        console.log(`${fullpath} ERROR [${i} / ${t.errors.length}]:`, t.errors[i])
      }
    }

    // if (event.name === 'test_done' && event.test.errors.length > 0) {
    //   const parentName = event.test.parent.name.replace(/\W/g, '-')
    //   const specName = event.test.name.replace(/\W/g, '-')
    //   await this.global.page.screenshot({
    //     path: `screenshots/${parentName}_${specName}.png`,
    //   })
    // }
  }
}




module.exports = CustomEnvironment
