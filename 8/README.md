# 2017-08-03

## static
폴더를 웹 서버에 올릴 수 있다.<br>
[1](./1_static.js)<br>
[2](./2_static.js)
## morgan
morgan은 웹 요청이 들어왔을 때, 로그를 출력해준다.<br>
[1](./1_morgan.js)<br>
[2](./2_morgan.js)
## cookie-parser
쿠키를 생성하고 추출하는 미들웨어다.<br>
[1](./1_cookie_parser.js)
## body-parser
post요청 & enctype이 application/x-www-form-urlencodede이여야 된다.<br>
    app.post('/', multipart, (req,res))//특정 페이지 라우팅만 미들웨어 적용
[1](./1_body_parser.js)
## express-session
쿠키가 클라이언트에 저장하는 거라면, session은 서버에 저장한다.
<ul>
    <li>resave: 세션이 변경되지 않았어도 세션 저장소에 반영할지</li>
</ul>
    
    req.session.save() //저장
    req.session.reload() //다시 로드
    req.session.destroy() //파괴
    req.session.regenerate() //다시 생셩
    
[1](./1_express_session.js)