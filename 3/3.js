/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-06 09:58:25
 * @modify date 2017-07-06 09:58:25
 * @desc [http response]
*/
var http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });//content-type setting
    res.end('<h1>제목 입니다.</h1>');
}).listen(4000);
