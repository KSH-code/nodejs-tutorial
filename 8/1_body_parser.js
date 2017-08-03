/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-03 09:57:56
 * @modify date 2017-08-03 09:57:56
 * @desc [post 요청 데이터를 추출한다.]
 */
var express = require('express')
var body_parser = require('body-parser')
var cookie_parser = require('cookie-parser')
var fs = require('fs')

var app = express()

app.use(cookie_parser())
app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())

app.get('/login', (req, res) => {
    fs.readFile('login.html', (err, data) => {
        res.send(data.toString())
    })
})
app.post('/login', (req, res) => {
    var id = req.body.id,
        pw = req.body.pw
    if (id == 'admin' && pw == 'root')
        res.cookie('auth', true)
    else
        res.cookie('auth', false)
    res.redirect('/')
})
app.get('/', (req, res) => {
    if (req.cookies.auth === 'true') { //문자열이다.
        res.send('<h1>로그인 성공</h1>')
    } else res.send('<h1>로그인 실패</h1>')

})
app.listen(4000)