import classes from "./NewPost.module.css";
import { Form } from "react-router-dom";

import axios from "axios";

// import { Outlet } from "react-router-dom";

export default function NewPost({ onTitleChange, onContentChange, onCloseModal }) {
  return (
    <>
      {/* <Outlet /> */}
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="name">제목</label>
          <input type="text" id="name" required onChange={onTitleChange} />
        </p>

        <p>
          <label htmlFor="body">내용</label>
          <textarea id="body" required rows={6} onChange={onContentChange} />
        </p>

        <p className={classes.actions}>
          <button type="button" className={classes.cancelButton} onClick={onCloseModal}>
            취소
          </button>

          <button type="submit">업로드</button>
        </p>
      </Form>
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
