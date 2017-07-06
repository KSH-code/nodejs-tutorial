/**
 * @author [김성훈]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-06 09:52:58
 * @modify date 2017-07-06 09:53:46
 * @desc [http 서버 생성 10초 후 종료]
*/

//http module 추출
var http = require('http');

//web server create
var server = http.createServer();

server.listen(1234, () => {
    console.log('Create Server');
});
setTimeout(() => {
    console.log('Close Server');
    server.close();
}, 10000);