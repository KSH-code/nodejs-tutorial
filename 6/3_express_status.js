/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-21 10:38:43
 * @modify date 2017-07-21 10:38:43
 * @desc [express status]
*/
var express = require('express');
var app = express();
app.use((req, res, next) => {//미들웨어 설정
    res.status(404).send('<h1>ERROR</h1>');
});
app.listen(4000);