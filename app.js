const express = require('express')
const app = express();

// dotenv 설정파일
const dotenv = require('dotenv')
dotenv.config();
const session = require('express-session');





// 세션 라이브러리 불러오기
require("./setting/session")(app)

// 각 세션의 고유한 색상을 가짐.
require("./setting/color-hash")(app)


// 포트정보 설정
app.set('port', process.env.PORT || 8082);


app.get("/", (req, res ) =>{
    req.session.user="namjung"
    res.send(req.session.color)
})
 

const server = app.listen(app.get('port'), () => { // server
    console.log(app.get('port'), '번 포트에서 대기중')
})