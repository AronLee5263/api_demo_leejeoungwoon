import classes from "./NewPost.module.css";
import axios from "axios";

// import { Outlet } from "react-router-dom";

export default function NewPost({ onTitleChange, onContentChange }) {
  return (
    <>
      {/* <Outlet /> */}
      <main>
        <form className={classes.form}>
          <p>
            <label htmlFor="name">제목</label>
            <input type="text" id="name" required onChange={onTitleChange} />
          </p>

          <p>
            <label htmlFor="body">내용</label>
            <textarea id="body" required rows={6} onChange={onContentChange} />
          </p>
        </form>
      </main>
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
