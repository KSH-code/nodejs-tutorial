/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-06 10:04:50
 * @modify date 2017-07-06 10:04:50
 * @desc [html file rendering]
*/
var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile(__dirname + '/4-1.html', (e, data) => {
        if (!e) {
            res.writeHead(200, {
                'Cotent-Type': 'text/html; charset=utf-8'
            });
            res.end(data);
        }
    });
}).listen(4000);