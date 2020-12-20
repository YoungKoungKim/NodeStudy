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
