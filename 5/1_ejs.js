/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-12 08:32:34
 * @modify date 2017-07-12 08:32:34
 * @desc [ejs 모듈을 사용해보기]
*/
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
http.createServer((req, res) => {
    fs.readFile(__dirname + '/1.ejs', 'utf8', function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(ejs.render(data));
    });
}).listen(4000);