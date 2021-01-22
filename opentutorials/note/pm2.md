pm2 - Node.js의 프로세스 매니저, Node js를 무중단으로 운영할 수 있도록 도와줌

### NPM으로 설치
npm install pm2 -g
(-g 옵션 : )

### pm2시작
pm2 start XXX.js
pm2 start XXX.js --watch (수정되는 파일이 있을 시 자동 재시작)
pm2 start main.js --watch --ignore-watch="data/* sessions/*"  --no-daemon

### pm2로 구동중인 프로세스 확인
pm2 monit

### pm2 종료
pm2 stop main(프로세스id)

### pm2 log
pm2 log

### pm2로 구동중인 프로세스 확인
pm2 list

* 확인해야 할 사항
pm2를 watch 옵션과 함께 실행 시, 간헐적으로(?) 내부 오류가 발생하며 pm2 프로세스가 종료되어 버린다. win10의 문제인지 경로 문제인지 아무튼 원인을 파악해 봐야 한다
