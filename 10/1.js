/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-20 09:49:02
 * @modify date 2017-08-20 09:49:02
 * @desc [socketio server listen]
 */
var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/1.html')
})

io.on('connection', function(socket) {
    console.log('a user connected') //유저가 연결되면 출력 됨
    socket.on('close', () => {
        console.log('a user disconnected') //연결이 끊기면 출력된다.
    })
    socket.on('chat', msg => {
        //socket.emit('chat', msg) 전송한 사람한테 보내기
        io.emit('chat', msg) //모두한테 보내기
    })
})

http.listen(4000, function() {
    console.log('listening on *:4000')
})