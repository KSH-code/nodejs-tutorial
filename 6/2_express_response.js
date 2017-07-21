/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-21 10:22:15
 * @modify date 2017-07-21 10:22:15
 * @desc [express response]
*/
var express = require('express');
var app = express();

app.use((req, res) => {
    let output = [];
    for (let i = 0; i < 3; i++) {
        output.push({
            count: i,
            name: 'name - ' + i
        });
    }
    res.send(output);
});
app.listen(4000);