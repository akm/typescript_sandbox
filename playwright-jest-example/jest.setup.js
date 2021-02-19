// 最大3回リトライする(== 4回失敗したら諦める)
// https://jestjs.io/docs/ja/jest-object#jestretrytimes
jest.retryTimes(Number(process.env["RETRY_TIMES"] || 3));
