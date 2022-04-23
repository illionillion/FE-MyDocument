'use strict'
const fs = require('fs')
// フォルダから.htmlファイルを取得
fs.readdir('./md', (err, files) => {
    if (err) throw err
    // console.log(files);
    const jsondata = files.filter((file)=>{
        return /.*\.html$/.test(file); //絞り込み
    })
    // console.log(json);
    const data = JSON.stringify(jsondata)
    // 配列にしてJSONファイルに保存
    fs.writeFile('./js/lib/md.json', data, 'utf-8', (err) => {
        if (err) console.log(err);
        else console.log('出力完了');
    })
})
