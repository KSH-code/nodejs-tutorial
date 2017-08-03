/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-03 09:37:28
 * @modify date 2017-08-03 09:37:28
 * @desc [morgan]
 */

var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan(':response-time'))
app.use((req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(4000)

//6.555
//위 내용이 출력됐음