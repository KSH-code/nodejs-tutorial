/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-10 08:38:28
 * @modify date 2017-07-10 08:38:28
 * @desc [POST METHOD DATA PARSE]
*/
const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    switch (req.method) {
        case 'GET':
            res.end(fs.readFileSync(__dirname + '/6.html', 'utf-8').toString());
            break;
        case 'POST':
            req.on('data', (data) => {
                data = '?' + data;
                const query = url.parse(data, true).query;
                res.end('<h1>' + JSON.stringify(query) + '</h1 > ');
            });
            break;
    }
}).listen(4000);