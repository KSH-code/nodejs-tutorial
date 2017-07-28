/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-28 10:26:25
 * @modify date 2017-07-28 10:26:25
 * @desc [라우팅 모듈화 활용]
*/
var express = require('express')
var app = express()

app.use('/a', require('./7_A').router)
app.use('/b', require('./7_B').router)

app.listen(4000)