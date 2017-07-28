/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-28 10:07:37
 * @modify date 2017-07-28 10:07:37
 * @desc [express 내장 미들웨어를 사용해 라우팅]
*/
var express = require('express')
var app = express()

app.get('/a', (req, res) => {
    res.send('<a href="/b">Go to B</a>')
})
app.get('/b', (req, res) => {
    res.send('<a href="/a">Go to A</a>')
})

app.listen(4000)