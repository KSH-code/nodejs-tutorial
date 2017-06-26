/**
 * Created by kimseonghoon on 2017-06-26.
 * How to run?
 * node CreateHttpServer.js
 */
'use strict';
const http = require('http');//http moudle

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(1234, () => {//open 1234 port
    console.log('Server running at http://127.0.0.1:1234');
});