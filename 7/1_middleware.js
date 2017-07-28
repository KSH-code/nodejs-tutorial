/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-28 09:43:39
 * @modify date 2017-07-28 09:43:39
 * @desc [미들웨어 사용이유]
*/
var express = require('express')
var app = express()
app.use((req, res, next) => {
    console.log('첫 번째 미들웨어')
    next()
})
app.use((req, res, next) => {
    console.log('두 번째 미들웨어')
    next()
})
app.use((req, res, next) => {
    console.log('세 번째 미들웨어0')
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end('<h1>Hello</h1>')
})

app.listen(4000)