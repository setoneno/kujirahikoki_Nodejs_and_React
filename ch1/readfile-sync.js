const fs = require('fs')

//同期的
const data = fs.readFileSync('kakugen.txt', 'utf-8')
console.log(data)

//非同期
fs.readFile('kakugen.txt', 'utf-8', readHandler)
function readHandler (err, data) {
	console.log(data)
}