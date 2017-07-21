/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-21 10:53:03
 * @modify date 2017-07-21 10:53:03
 * @desc [express query]
*/
var express = require('express');
var app = express();
//http://127.0.0.1:4000?name=124&region=sakdlgnalsdg
app.use((req, res) => {
    let name = req.query.name;
    let region = req.query.region;
    res.send('<h1>' + name + ' - ' + region + '</h1>')
})
app.listen(4000)