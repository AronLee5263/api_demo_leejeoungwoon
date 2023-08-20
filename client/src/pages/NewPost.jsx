import classes from "./NewPost.module.css";
import axios from "axios";

// import { Outlet } from "react-router-dom";

export default function NewPost() {
  return (
    <>
      {/* <Outlet /> */}
      <main>
        <div className={classes.temp}> NewPost 페이지 구현중</div>
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
