/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-28 10:15:05
 * @modify date 2017-07-28 10:15:05
 * @desc [전체 선택자를 사용해 라우팅]
*/
var express = require('express')
var app = express()

app.get('/index', (req, res) => {
    res.send('<h1>Index Page</h1>')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Error</h1>')
})

app.listen(4000)