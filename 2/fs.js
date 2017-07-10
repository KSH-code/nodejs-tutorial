const fs = require('fs');
//비동기로 읽기
fs.readFile(__dirname + '/greet.txt', 'utf-8', (e, data) => {
    console.log(e);//파일을 못찾으면 값이 생김 원래는 null
    console.log(data);//e값이 null이 아니면 txt를 불러올 수 있다.
});
const data = '입력 값';
fs.writeFile(__dirname + '/Async.txt', data, 'utf8', (e) => {
    console.log('Async.txt Write End');//비동기라서 파일이 다 써지면 callback method를 호출 받는다.
});
fs.writeFileSync(__dirname + '/Sync.txt', data, 'utf8');
console.log('Sync.txt Write End');//절차지향을 따른다.