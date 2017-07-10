/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-10 08:30:56
 * @modify date 2017-07-10 08:30:56
 * @desc [request 메소드 체크]
*/
const http = require('http');
http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            console.log('GET 요청');
            break;
        case 'POST':
            console.log('POST 요청');
            break;
    }
}).listen(4000);