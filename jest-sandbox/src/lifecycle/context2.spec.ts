import { basename } from "path";

import { getLogger } from "log4js";

// See https://jestjs.io/docs/en/setup-teardown

const name = basename(__filename);
const logger = getLogger(`pid: ${process.pid} context: ${name}`);
logger.level = "info"

logger.info(`loading started`);

import newHook from "./hook";

beforeAll(() => logger.info(`0 - beforeAll`));
afterAll(() => logger.info(`0 - afterAll`));
beforeEach(() => logger.info(`0 - beforeEach`));
afterEach(() => logger.info(`0 - afterEach`));

newHook(logger)();

beforeAll(() => logger.info(`1 - beforeAll`));
afterAll(() => logger.info(`1 - afterAll`));
beforeEach(() => logger.info(`1 - beforeEach`));
afterEach(() => logger.info(`1 - afterEach`));
test("", () => logger.info(`1 - test`));

describe("Scoped / Nested block #2", () => {
  beforeAll(() => logger.info(`2 - beforeAll`));
  afterAll(() => logger.info(`2 - afterAll`));
  beforeEach(() => logger.info(`2 - beforeEach`));
  afterEach(() => logger.info(`2 - afterEach`));
  test("", () => logger.info(`2 - test`));
});

logger.info(`loading completed`);
