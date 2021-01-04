var http = require('http'); //네트웍 기능
var fs = require('fs'); //파일 관리
var url = require('url'); //url모듈(queryString 관리)

var app = http.createServer(function(request,response){ //웹 서버 객체
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
      fs.readFile(`data/${title}`, 'utf-8', function(err, data) {
          var template = `
                          <!doctype html>
                          <html>
                          <head>
                            <title>WEB1 - ${title}</title>
                            <meta charset="utf-8">
                          </head>
                          <body>
                            <h1><a href="/">WEB</a></h1>
                            <ul>
                              <li><a href="/?id=HTML">HTML</a></li>
                              <li><a href="/?id=CSS">CSS</a></li>
                              <li><a href="/?id=JavaScript">JavaScript</a></li>
                            </ul>
                            <h2>${title}</h2>
                            <p>${data}</p>
                          </body>
                          </html>
                          `;
          //200 : 전송 성공
          response.writeHead(200);
          //전달
          response.end(template);
      });
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
/*    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
*/
//    response.writeHead(200);

});
app.listen(3000);
