/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-21 10:45:42
 * @modify date 2017-07-21 10:45:42
 * @desc [express header set]
*/
var express = require('express');
var app = express();

app.use((req, res) => {
    let agent = req.header('User-Agent');
    res.sendStatus(200);
});
app.listen(4000);