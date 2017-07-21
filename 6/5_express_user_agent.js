/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-21 10:48:03
 * @modify date 2017-07-21 10:48:03
 * @desc [express user agent]
*/
var express = require('express');
var app = express();
app.use((req, res) => {
    let agent = req.header('User-Agent');
    res.write('<h1>')
    if (agent.toLocaleLowerCase().match(/chrome/))
        res.write('Hello Chrome')
    else
        res.write('Please View Chrome')
    res.write('</h1>')
    res.send();
});
app.listen(4000);