## Jest lifecycle

```
$ npm t src/lifecycle

> jest-sandbox@1.0.0 test path/to/typescript_sandbox/jest-sandbox
> jest "src/lifecycle"

 PASS  src/lifecycle/context2.spec.ts
[2021-02-14T17:51:52.905] [INFO] pid: 76515 context: context1.spec.ts - loading started
[2021-02-14T17:51:52.909] [INFO] pid: 76516 context: context2.spec.ts - loading started
[2021-02-14T17:51:52.916] [INFO] pid: 76515 context: context1.spec.ts - newHook loading started
[2021-02-14T17:51:52.916] [INFO] pid: 76515 context: context1.spec.ts - newHook loading completed
[2021-02-14T17:51:52.919] [INFO] pid: 76516 context: context2.spec.ts - newHook loading started
[2021-02-14T17:51:52.919] [INFO] pid: 76516 context: context2.spec.ts - newHook loading completed
[2021-02-14T17:51:52.931] [INFO] pid: 76515 context: context1.spec.ts - loading completed
[2021-02-14T17:51:52.933] [INFO] pid: 76516 context: context2.spec.ts - loading completed
[2021-02-14T17:51:52.933] [INFO] pid: 76515 context: context1.spec.ts - 0 - beforeAll
[2021-02-14T17:51:52.934] [INFO] pid: 76515 context: context1.spec.ts - newHook 0 - beforeAll
[2021-02-14T17:51:52.934] [INFO] pid: 76515 context: context1.spec.ts - 1 - beforeAll
[2021-02-14T17:51:52.935] [INFO] pid: 76515 context: context1.spec.ts - 0 - beforeEach
[2021-02-14T17:51:52.935] [INFO] pid: 76515 context: context1.spec.ts - newHook 0 - beforeEach
[2021-02-14T17:51:52.935] [INFO] pid: 76515 context: context1.spec.ts - 1 - beforeEach
[2021-02-14T17:51:52.935] [INFO] pid: 76515 context: context1.spec.ts - 1 - test
[2021-02-14T17:51:52.936] [INFO] pid: 76515 context: context1.spec.ts - 1 - afterEach
[2021-02-14T17:51:52.936] [INFO] pid: 76515 context: context1.spec.ts - newHook 0 - afterEach
[2021-02-14T17:51:52.936] [INFO] pid: 76515 context: context1.spec.ts - 0 - afterEach
[2021-02-14T17:51:52.937] [INFO] pid: 76515 context: context1.spec.ts - 2 - beforeAll
[2021-02-14T17:51:52.937] [INFO] pid: 76515 context: context1.spec.ts - 0 - beforeEach
[2021-02-14T17:51:52.937] [INFO] pid: 76515 context: context1.spec.ts - newHook 0 - beforeEach
[2021-02-14T17:51:52.937] [INFO] pid: 76515 context: context1.spec.ts - 1 - beforeEach
[2021-02-14T17:51:52.937] [INFO] pid: 76516 context: context2.spec.ts - 0 - beforeAll
[2021-02-14T17:51:52.937] [INFO] pid: 76515 context: context1.spec.ts - 2 - beforeEach
[2021-02-14T17:51:52.937] [INFO] pid: 76516 context: context2.spec.ts - newHook 0 - beforeAll
[2021-02-14T17:51:52.938] [INFO] pid: 76516 context: context2.spec.ts - 1 - beforeAll
[2021-02-14T17:51:52.938] [INFO] pid: 76515 context: context1.spec.ts - 2 - test
[2021-02-14T17:51:52.938] [INFO] pid: 76515 context: context1.spec.ts - 2 - afterEach
[2021-02-14T17:51:52.938] [INFO] pid: 76515 context: context1.spec.ts - 1 - afterEach
[2021-02-14T17:51:52.938] [INFO] pid: 76516 context: context2.spec.ts - 0 - beforeEach
[2021-02-14T17:51:52.938] [INFO] pid: 76516 context: context2.spec.ts - newHook 0 - beforeEach
[2021-02-14T17:51:52.938] [INFO] pid: 76516 context: context2.spec.ts - 1 - beforeEach
[2021-02-14T17:51:52.938] [INFO] pid: 76515 context: context1.spec.ts - newHook 0 - afterEach
[2021-02-14T17:51:52.939] [INFO] pid: 76516 context: context2.spec.ts - 1 - test
[2021-02-14T17:51:52.939] [INFO] pid: 76515 context: context1.spec.ts - 0 - afterEach
[2021-02-14T17:51:52.939] [INFO] pid: 76516 context: context2.spec.ts - 1 - afterEach
[2021-02-14T17:51:52.939] [INFO] pid: 76516 context: context2.spec.ts - newHook 0 - afterEach
[2021-02-14T17:51:52.939] [INFO] pid: 76516 context: context2.spec.ts - 0 - afterEach
[2021-02-14T17:51:52.939] [INFO] pid: 76515 context: context1.spec.ts - 2 - afterAll
[2021-02-14T17:51:52.940] [INFO] pid: 76515 context: context1.spec.ts - 3 - beforeAll
[2021-02-14T17:51:52.940] [INFO] pid: 76516 context: context2.spec.ts - 2 - beforeAll
[2021-02-14T17:51:52.940] [INFO] pid: 76516 context: context2.spec.ts - 0 - beforeEach
[2021-02-14T17:51:52.940] [INFO] pid: 76516 context: context2.spec.ts - newHook 0 - beforeEach
[2021-02-14T17:51:52.940] [INFO] pid: 76516 context: context2.spec.ts - 1 - beforeEach
[2021-02-14T17:51:52.940] [INFO] pid: 76515 context: context1.spec.ts - 0 - beforeEach
[2021-02-14T17:51:52.940] [INFO] pid: 76516 context: context2.spec.ts - 2 - beforeEach
[2021-02-14T17:51:52.940] [INFO] pid: 76516 context: context2.spec.ts - 2 - test
[2021-02-14T17:51:52.941] [INFO] pid: 76516 context: context2.spec.ts - 2 - afterEach
[2021-02-14T17:51:52.941] [INFO] pid: 76516 context: context2.spec.ts - 1 - afterEach
[2021-02-14T17:51:52.941] [INFO] pid: 76515 context: context1.spec.ts - newHook 0 - beforeEach
[2021-02-14T17:51:52.941] [INFO] pid: 76516 context: context2.spec.ts - newHook 0 - afterEach
[2021-02-14T17:51:52.941] [INFO] pid: 76516 context: context2.spec.ts - 0 - afterEach
[2021-02-14T17:51:52.941] [INFO] pid: 76516 context: context2.spec.ts - 2 - afterAll
[2021-02-14T17:51:52.941] [INFO] pid: 76515 context: context1.spec.ts - 1 - beforeEach
[2021-02-14T17:51:52.941] [INFO] pid: 76515 context: context1.spec.ts - 3 - beforeEach
[2021-02-14T17:51:52.941] [INFO] pid: 76516 context: context2.spec.ts - 1 - afterAll
[2021-02-14T17:51:52.941] [INFO] pid: 76516 context: context2.spec.ts - newHook 0 - afterAll
[2021-02-14T17:51:52.941] [INFO] pid: 76516 context: context2.spec.ts - 0 - afterAll
[2021-02-14T17:51:52.943] [INFO] pid: 76515 context: context1.spec.ts - 3 - test
[2021-02-14T17:51:52.944] [INFO] pid: 76515 context: context1.spec.ts - 3 - afterEach
[2021-02-14T17:51:52.944] [INFO] pid: 76515 context: context1.spec.ts - 1 - afterEach
[2021-02-14T17:51:52.944] [INFO] pid: 76515 context: context1.spec.ts - newHook 0 - afterEach
[2021-02-14T17:51:52.944] [INFO] pid: 76515 context: context1.spec.ts - 0 - afterEach
 PASS  src/lifecycle/context1.spec.ts
[2021-02-14T17:51:52.944] [INFO] pid: 76515 context: context1.spec.ts - 3 - afterAll
[2021-02-14T17:51:52.956] [INFO] pid: 76515 context: context1.spec.ts - 1 - afterAll
[2021-02-14T17:51:52.956] [INFO] pid: 76515 context: context1.spec.ts - newHook 0 - afterAll
[2021-02-14T17:51:52.956] [INFO] pid: 76515 context: context1.spec.ts - 0 - afterAll

Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        6.223 s
Ran all test suites matching /src\/lifecycle/i.
```
