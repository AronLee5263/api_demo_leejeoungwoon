import classes from "./PostDetails.module.css";
import axios from "axios";

// import { Outlet } from "react-router-dom";

export default function PostDetails() {
  return (
    <>
      {/* <Outlet /> */}
      <main>
        <div className={classes.temp}> PostDetails 페이지 구현중</div>
      </main>
    </>
  );
}

export async function loader({ params }) {
  const response = await axios.get(SERVER_URL + "/" + params.postId);
  //   console.log("response.data : ", response.data);

  return response.data.post;
}
