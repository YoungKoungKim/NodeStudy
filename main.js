//node 에서는 모듈을 불러오기 위해 require를 쓴다
//require 합수는 module.exports를 리턴한다.
/*Console: 콘솔 로깅
Crypto: 암호화
Events: 이벤트 관리
File System: 파일 관리
Http: 네트웍 기능
OS: 운영체제 정보
Path: 경로 관리
Stream: 스트림 관리*/
var http = require('http'); //네트웍 기능
var fs = require('fs'); //파일 관리
var url = require('url'); //url모듈(queryString 관리)

var app = http.createServer(function(request,response){ //웹 서버 객체
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);

});
app.listen(3000);

// node js에서 사용하는 키워드
// var, let, const
// var, let : 변수 선언
// const : 상수 선언
// var와 다르게 let, const는 변수 재선언이 불가
// const는 선언과 동시에 리터럴 값을 할당 해 주어야 함
