/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-06 10:11:11
 * @modify date 2017-07-06 10:11:11
 * @desc [set cookie]
*/
var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Set-Cookie': ['Hello=World', 'KSH=Code']
    });
    res.write('<h1>');
    res.write(req.headers.cookie);
    res.end('</h1>');
}).listen(1234);