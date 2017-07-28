/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-28 09:55:23
 * @modify date 2017-07-28 09:55:23
 * @desc [미들웨어를 사용해 속성 추가]
*/
var express = require('express')
var app = express()

app.use((req, res, next) => {
    req.number = 52
    res.number = 273
    next()
})

app.use((req, res, next) => {
    res.send(`<h1>${req.number}:${res.number}</h1>`)
})

app.listen(4000)