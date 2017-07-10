/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-10 08:12:27
 * @modify date 2017-07-10 08:12:27
 * @desc [URL로 페이지 나누기]
*/
const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    res.writeHead(200, {
        'Context-Type': 'text/html; charset=utf-8'
    });
    switch (pathname) {
        case '/':
            res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8').toString());
            break;
        case '/favicon.ico':
            res.end();
            break;
        default:
            res.end(fs.readFileSync(__dirname + '/login_page.html', 'utf-8').toString());
            break;
    }
}).listen(4000);