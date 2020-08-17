// commanderモジュールをprogramオブジェクトとしてインポートする
const program = require("commander");
// fsモジュールをfsオブジェクトとしてインポートする
const fs = require("fs");
// markedモジュールをmarkedオブジェクトとしてインポートする
const marked = require("marked");

// gfmオプションを定義する
program.option("--gfm", "GFMを有効にする");
// コマンドライン引数をパースする
program.parse(process.argv);
// ファイルパスをprogram.args配列から取り出す
const filePath = program.args[0];
// オプションのパース結果をオブジェクトとして取得する
const options = program.opts();
console.log(options.gfm);

// ファイルを非同期で読み込む
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    // 終了ステータス 1（一般的なエラー）としてプロセスを終了する
    process.exit(1);
    return;
  }
  const html = marked(file);
  console.log(html);
});
