/**
 * Created date 2017-06-26.
 * File name CreateHttpServer.js
 * github http://https://github.com/KSH-code/nodejs-tutorial
 * blog http://ksh-code.tistory.com
 */
'use strict';
const http = require('http');//http moudle

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(4000, () => {//open 4000 port
    console.log('Server running at http://127.0.0.1:4000');
});