import { Logger } from "log4js";

export const newHook = (logger: Logger) => {
  const name = "newHook";
  logger.info(`${name} loading started`);
  const r = () => {
    beforeAll(() => logger.info(`${name} 0 - beforeAll`));
    afterAll(() => logger.info(`${name} 0 - afterAll`));
    beforeEach(() => logger.info(`${name} 0 - beforeEach`));
    afterEach(() => logger.info(`${name} 0 - afterEach`));
  };
  logger.info(`${name} loading completed`);
  return r;
};

export default newHook;
