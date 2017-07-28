# 2017-07-28 학습 내용

## 미들웨어란?
요청의 응답을 완료하기 전까지 요청 중간중간에 여러 가지 일을 처리하는 것이다.<br>
express에서는 app.use를 미들웨어라고 한다.

## 써드파티 미들웨어
+ body-parser: post 요청 값을 json으로 파싱해준다.
+ compression: 아직 사용해보지 않았다.
+ connect-image-optimus: 말 그대로 이미지를 최적화 해준다.
+ connect-timeout: 사용해보지 않았다.

이 외에도 [Express 홈페이지](http://expressjs.com/ko/resources/middleware.html)에 여러가지가 있다.

## 라우팅
app.get 또는 app.post를 사용해서 한다.<br>
URL에 값을 req.params.(identifier)로 받을 수 있다.<br>
req.query는 ?name=A와 같은 파라매터의 값을 저장한다.

    app.all('*',(req,res)=>{
        res.status(404).send('<h1>Error</h1>')
    })
위 코드를 맨 마지막에 작성하면 구현된 페이지가 아닐경우 다 에러메시지를 띄운다.<br>
app.Router()를 통해 라우팅을 모듈로 분리해 구현이 가능하다.
    
    var routerA = express.Router(), routerB = express.Router()

    routerA.get('/index', (req, res) => {
        res.send('<h1>A index</h1>')
    })
    routerB.get('/index', (req, res) => {
        res.send('<h1>B index</h1>')
    })

    app.use('/a',routerA)
    app.use('/b',routerB)
127.0.0.1:4000/a/index<br>
127.0.0.1:4000/b/index<br>
의 내용이 다르게 출력된다.<br>
7_router.js, 7_A.js, 7_B.js 에서 라우팅을 모듈화해서 구현했다.