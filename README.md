# api_demo_leejeoungwoon

api_demo_leejeoungwoon

1. npm init
2. npm install express
3. node app.js (실행)

4. docker 설치 (환경설정 제외하고 바로 mysql만 이미지 다운하려면 2,3 제외하고 보기)

   1. 도커 홈페이지에서 pc버전 설치 https://www.docker.com/
   2. 윈도우 경우 powershell에서 도커 버전 확인 (docker --version)
   3. 도커 전용 파일 만들고 , 터미널에서 클론받기 git clone https://gitlab.com/yalco/practice-docker.git
   4. mysql 설치 : powershell 에서 docker pull mysql:5.7
   5. mysql image 다운 확인 : docker images
   6. mysql 인스턴스 생성 및 비밀번호, 포트설정 : docker run --name my-database -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:5.7
   7. 인스턴스 실행 : docker exec -it my-database bash (가상환경 접속 성공)
   8. 바뀐 명령줄 부분에 mysql 실행 : mysql -u root -p
   9. 패스워드 입력 : root
   10. 기존 db 확인 : show databases; (세미콜론) 6:44

5. MySQL 테이블 수정
   https://blog.naver.com/pjok1122/221539169731
   https://spiderwebcoding.tistory.com/3

<!-- https://www.youtube.com/watch?v=oJZETsl6gQY&t=1s -->

6. api 서버 테이블 조작 vscode- npm i mysql2
   https://www.npmjs.com/package/mysql2
