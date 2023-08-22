# 게시판 프로젝트

- client, server 각각의 README.md 가 있습니다.

- client : react
- server : express
- DB : MySQL
- etc : docker, powershell
- 개발기간 : 3일 (8.18 ~ 8.20)

<br>

< service flow >

- 메인 페이지 진입 (포스팅 된 콘텐츠들 렌더링 된 상태)
- 글을 작성을 위해 NewPost 페이지로 이동
- 메인 페이지에 글이 포스팅 된다.
- 해당 개별 포스팅 선택시 상세페이지로 이동.

<br><br>

# - server

### API 엔드포인트 
<br>

GET /library/content : 모든 게시글을 가져옵니다. <br>
GET /library/content/id : 특정 게시글을 가져옵니다.<br><br>
POST /library/content : 새로운 게시글을 추가합니다.<br>
POST /library/content/id/like : 특정 게시글의 좋아요 수를 증가시킵니다.<br><br>
PUT /library/content : 게시글을 수정합니다.<br><br>
DELETE /library/content/id : 특정 게시글을 삭제합니다.<br>



<br><br>

# - client

<br>

### 클라이언트 플로우 
<br>

1) 첫 진입시 App 컴포넌트 렌더링 
2) 메인페이지 (Library 컴포넌트) 에서 포스팅 된 게시물 목록 렌더링
3) 메인페이지에서 추가할 게시물 컴포넌트 생성 (NewPost 컴포넌트)
4) 메인페이지에서 게시물 된 좋아요 버튼 클릭시 좋아요 숫자 1 증가
5) 메인페이지에서 게시물 클릭시 해당 포스트 상세 페이지로 이동
6) 상세페이지에서 (PostDatail 컴포넌트) 좋아요 버튼 클릭시 좋아요 숫자 1 증가

<br><br>

### Library 컴포넌트 
<br>

useEffect를 사용하여 초기 게시글 목록을 가져옵니다.<br>

GetDetails: 특정 게시글을 가져옵니다. <br>
IncreaseLikeCount: 특정 게시글의 좋아요 수를 증가시킵니다.<br>
NewPostHandler: 새 게시글을 작성합니다.<br><br>
DeletePost: 특정 게시글을 삭제합니다.<br>

showModalHandler: 모달을 엽니다.<br>
closeModalHandler: 모달을 닫습니다.<br><br>

Library 컴포넌트는 게시글 목록을 렌더링하고, 새 게시글을 추가하거나, 게시글의 좋아요 수를 증가시키거나, 게시글을 삭제하는 기능을 제공합니다. 



<br><br>
