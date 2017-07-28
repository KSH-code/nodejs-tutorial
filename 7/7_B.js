/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-28 10:26:15
 * @modify date 2017-07-28 10:26:15
 * @desc [7_router.js의 모듈 파일]
*/
var express = require('express')
var router = express.Router()

router.get('/index', (req, res) => {
    res.send('<h1>Index Page B')
})

exports.router = router