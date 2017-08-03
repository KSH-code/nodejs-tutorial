/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-03 09:43:55
 * @modify date 2017-08-03 09:43:55
 * @desc [cookie-parser]
 */
var express = require('express')
var cookie_parser = require('cookie-parser')

var app = express()
app.use(cookie_parser())
app.get('/cookie', (req, res) => {
    res.send(req.cookies)
})
app.get('/scookie', (req, res) => {
    res.cookie('string', 'hello')
    res.cookie('json', {
        hello: 'world',
        foo: 'bar'
    })
    res.cookie('string', 'zz', {
        maxAge: 1234, //ms
        secure: true
    })
    res.redirect('/cookie')
})
app.listen(4000)