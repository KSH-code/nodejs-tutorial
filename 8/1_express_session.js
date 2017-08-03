/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-03 10:34:58
 * @modify date 2017-08-03 10:34:58
 * @desc [express session]
 */
var express = require('express')
var session = require('express-session')

var app = express()

app.use(session({
    secret: 'keyhelloasdifnalsdknglaskdnglaskdjgl',
    resave: false,
    saveUninitilized: true
}))

app.use((req, res) => {
    req.session.now = new Date().toUTCString()
    res.send(req.session)
})

app.listen(4000)