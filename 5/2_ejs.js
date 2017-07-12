/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-12 09:17:24
 * @modify date 2017-07-12 09:17:24
 * @desc [ejs 동적 페이지]
*/
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
http.createServer((req, res) => {
    fs.readFile(__dirname + '/2.ejs', 'utf8', function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(ejs.render(data, {
            'KSHCode': [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
        }));
    });
}).listen(4000);