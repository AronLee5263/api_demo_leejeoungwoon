import classes from "./PostDetails.module.css";
import axios from "axios";

import { useLocation } from "react-router-dom";
// import { Outlet } from "react-router-dom";

export default function PostDetails() {
  const location = useLocation();
  const { id, title, content, likes } = location.state;
  //   console.log("location : " + id, title, content, likes);

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
