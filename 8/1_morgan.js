/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-03 09:32:43
 * @modify date 2017-08-03 09:32:43
 * @desc [morgan]
 */
var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan('combined'))
app.use((req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(4000)

//::ffff:127.0.0.1 - - [03/Aug/2017:00:35:01 +0000] "GET / HTTP/1.1" 200 20 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
//위 내용이 출력됐음