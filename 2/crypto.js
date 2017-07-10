const crypto = require('crypto');
//해쉬 생성
var shasum = crypto.createHash('sha256');
shasum.update('test');
var output = shasum.digest('base64');

console.log('test:', output);//n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=

shasum = crypto.createHash('sha256');
shasum.update('testfff');
output = shasum.digest('base64');

console.log('testfff:', output);//xibcMsB+VNHmtpNIajzACn8MoqQI3BMNcPE0l32+3WE=
//출력되는 길이는 같다. base64를 사용해서