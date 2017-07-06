/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-06 09:54:53
 * @modify date 2017-07-06 09:54:53
 * @desc [http 서버 생성 후 이벤트 리스너들 바인딩]
*/

//http module 추출
var http = require('http');

//web server create
var server = http.createServer();

server.on('connection', (a) => {
    console.log('connection');
});
server.on('request', (a) => {
    console.log('request');
});

server.on('close', (a) => {
    console.log('close');
});
server.listen(1234);
setTimeout(() => server.close(), 10000);//on close