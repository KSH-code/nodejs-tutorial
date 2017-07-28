/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-28 10:10:36
 * @modify date 2017-07-28 10:10:36
 * @desc [express의 유용한 라우팅 기능]
*/
var express = require('express')
var app = express()

app.get('/page/:id', (req, res) => {
    var home = req.params.id
    res.send(`<h1>${home}Page</h1>`)
})
app.listen(4000)
