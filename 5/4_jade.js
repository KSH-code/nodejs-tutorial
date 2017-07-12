/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-12 09:46:43
 * @modify date 2017-07-12 09:46:43
 * @desc [jade 동적 페이지]
*/
const http = require('http');
const fs = require('fs');
const jade = require('jade');
http.createServer((req, res) => {
    fs.readFile(__dirname + '/4.jade', 'utf8', (e, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(jade.compile(data)({
            anchor: 'http://ksh-code.tistory.com'
        }));
    });
}).listen(4000);