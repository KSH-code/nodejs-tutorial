/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-21 10:18:26
 * @modify date 2017-07-21 10:18:26
 * @desc [express 기본 서버]
*/
//모듈 추출
var express = require('express');
//서버 생성
var app = express();

app.use((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })
    res.end('<h1>하이요</h1>');
});
app.listen(4000, () => {
    console.log('Server Start');
});