/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-10 08:06:38
 * @modify date 2017-07-10 08:06:38
 * @desc [404 Error]
*/
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(404);
    res.end();
}).listen(4000);