/**
 * @author [KSH-code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-10 08:34:08
 * @modify date 2017-07-10 08:34:08
 * @desc [GET METHOD DATA PARSE]
*/
const http = require('http');
const url = require('url');
http.createServer((req, res) => {
    /*
        true: json
        false: string
    */
    const query = url.parse(req.url, true).query;
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf=8'
    });
    console.log(query);
    res.end(JSON.stringify(query));
}).listen(4000);