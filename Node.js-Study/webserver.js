const http = require('http');
//http 모듈이 요구된다.
//const 상수로 지정한다. java의 final

const hostname = '127.0.0.1';
//hostname 지정

const port = 3000;
//개발할 port 지정
//hostname과 port를 개방해도 외부에서 접속하려면 추가 기능 필요

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/* (https://nodejs.org/dist/latest-v8.x/docs/api/http.html
    에서 http에 관한 모듈 설명 참고*/
