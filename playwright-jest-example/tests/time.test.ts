// Needs to be higher than the default Playwright timeout

jest.setTimeout(15 * 1000) // 3回リトライすれば、だいたい成功するはず

describe("http://time-time.net/timer/digital-clock.php", () => {
  it("N秒後が表示されることを確認", async () => {
      // '16:43:05' というような文字列を表示
      const t1 = new Date()
      // t1.setTime(Date.now() + (Number(process.env["EXPECTED_TIME_WAIT"] || 5) * 1000))

      // const expected = `${t1.getHours()}:${t1.getMinutes()}`

      const h = t1.getHours().toString() //.padStart(2, "0")
      const m = t1.getMinutes().toString().padStart(2, "0")
      const expected = `${h}:${m}:5` // **:**:5* 毎分の50秒台なら成功
      console.log("expected: ", expected)

      await page.goto("https://iwb.jp/t/");

      await page.waitForSelector(`#t:text("${expected}")`)
  })
})
