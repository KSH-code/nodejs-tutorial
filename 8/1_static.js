/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-03 09:14:22
 * @modify date 2017-08-03 09:14:22
 * @desc [static 폴더 선언]
 */
var express = require('express')
var app = express()
app.use(express.static(__dirname + '/hello')) //127.0.0.1:4000/1.txt
app.listen(4000)