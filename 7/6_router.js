/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-28 10:21:24
 * @modify date 2017-07-28 10:21:24
 * @desc [라우터 기능을 모듈화]
*/
var express = require('express')
var app = express()

var routerA = express.Router(), routerB = express.Router()

routerA.get('/index', (req, res) => {
    res.send('<h1>A index</h1>')
})
routerB.get('/index', (req, res) => {
    res.send('<h1>B index</h1>')
})

app.use('/a',routerA)
app.use('/b',routerB)

app.listen(4000)
