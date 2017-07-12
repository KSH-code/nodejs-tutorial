/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-12 09:23:30
 * @modify date 2017-07-12 09:23:30
 * @desc [jade를 사용해보자]
*/
const http = require('http');
const fs = require('fs');
const jade = require('jade');
http.createServer((req, res) => {
    fs.readFile(__dirname + '/3.jade', 'utf8', (e, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(jade.compile(data)());
    });
}).listen(4000);
