/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-10 09:00:38
 * @modify date 2017-07-10 09:00:38
 * @desc [쿠키 생성 및 추출]
*/
const http = require('http');
http.createServer((req, res) => {
    const cookie = req.headers.cookie;
    if (cookie) {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Set-Cookie': ['blog=http://ksh-code.tistory.com', 'git=http://github.com/ksh-code']
        });
    }
    res.end(cookie);
}).listen(4000);