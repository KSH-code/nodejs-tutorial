/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-10 08:03:42
 * @modify date 2017-07-10 08:03:42
 * @desc [페이지 이동]
*/
const http = require('http');
http.createServer((req, res) => {
    /*
        Http Status Code
        1XX Continue
        2XX OK
        3XX Redirect
        4XX Bad Request
        5XX Server Error
    */
    res.writeHead(302, { 'Location': 'http://github.com/ksh-code' });
    res.end();
}).listen(4000);