import classes from "./PostDetails.module.css";
import axios from "axios";

import { useState } from "react";
import { useLocation } from "react-router-dom";
// import { Outlet } from "react-router-dom";

export default function PostDetails() {
  const location = useLocation();
  const { id, title, content } = location.state;
  const [likes, setLikes] = useState(location.state.likes);
  //   console.log("location : " + id, title, content, likes);

  function IncreaseLikeCount(id) {
    fetch(`http://localhost:3000/library/content/${id}/like`, {
      method: "PUT",
    })
      .then((response) => response.text())
      .then(() => {
        setLikes(likes + 1); // likes 상태 변수를 업데이트합니다.
      })
      .catch((error) => {
        console.error("좋아요 업데이트 에러:", error);
      });
  }

  return (
    <>
      {/* <Outlet /> */}
      <main>
        <div className={classes.box}>
          <div className={classes.post}>
            <div className={classes.top}>
              <p className={classes.id}> {id}번</p>
              <p className={classes.title}>{title}</p>
            </div>
            <hr />
            <div className={classes.middle}>
              <p className={classes.content}>{content}</p>
            </div>
            <div className={classes.bottom}>
              <button className={classes.like_button} onClick={() => IncreaseLikeCount(id)}></button>

              <p className={classes.likes}>좋아요 {likes} 개</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function loader({ params }) {
  const response = await axios.get(SERVER_URL + "/" + params.contentId);
  //   console.log("response.data : ", response.data);

  //   return response.data.post;
  return response.data;
}
