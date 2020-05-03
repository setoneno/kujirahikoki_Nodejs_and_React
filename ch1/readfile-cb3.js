const fs = require('fs')
//a.txtの読み込み
fs.readFile('a,txt', 'utf-8', function (err, data) {
    console.log('a.txtを読み込みました', data)
    //b.txtの読み込み
    fs.readFile('b.txt', 'utf-8', function (err, data) {
        console.log('b.txtを読み込みました', data)
        //c.txtの読み込み
        fs.readFile('c.txt', 'utf-8', function (err, data) {
            console.log('c.txtを読み込みました', data)
        })
    })
})