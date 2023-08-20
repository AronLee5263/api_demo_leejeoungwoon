import classes from "./NewPost.module.css";
import { useState } from "react";
// import { Form } from "react-router-dom";

import axios from "axios";

// import { Outlet } from "react-router-dom";

export default function NewPost({ onCloseModal, onAddPost }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  function changeContentHandler(e) {
    setContent(e.target.value);
  }

  function changeTitleHandler(e) {
    setTitle(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault(); // 기본 폼 제출을 막습니다.

    const postData = {
      title: title,
      content: content,
    };

    fetch("http://localhost:3000/library/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // 확인용
        onAddPost((prevPosts) => [data, ...prevPosts]); // 새 게시글 추가
        onCloseModal(); // 모달 닫기
      })
      .catch((error) => console.error("에러:", error));
  }

  return (
    <>
      {/* <Outlet /> */}
      <form method="post" onSubmit={submitHandler} className={classes.form}>
        <p>
          <label htmlFor="name">제목</label>
          <input type="text" id="name" required onChange={changeTitleHandler} />
        </p>

        <p>
          <label htmlFor="body">내용</label>
          <textarea id="body" required rows={6} onChange={changeContentHandler} />
        </p>

        <p className={classes.actions}>
          <button type="button" className={classes.cancelButton} onClick={onCloseModal}>
            취소
          </button>

          <button type="submit">업로드</button>
        </p>
      </form>
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await axios.post(SERVER_URL, {
    author: postData.postAuthor,
    body: postData.postContent,
  });

  return redirect("/");
}
