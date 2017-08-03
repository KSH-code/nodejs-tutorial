/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-03 09:25:56
 * @modify date 2017-08-03 09:25:56
 * @desc [static]
 */
var express = require('express')
var app = express()
app.use(express.static(__dirname + '/hello'))
app.use((req, res) => { //127.0.0.1:4000
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<img src="1.png">')
})
app.listen(4000)