import classes from "./Library.module.css";
import axios from "axios";

// import { Outlet } from "react-router-dom";

export default function Library() {
  return (
    <>
      {/* <Outlet /> */}
      <main>
        <div className={classes.temp}> 라이브러리 페이지 구현중</div>
      </main>
    </>
  );
}

export async function loader() {
  const response = await axios.get(SERVER_URL);

  const { documents: docss } = useCollectionnn("POST");

  console.log("docss : ", docss);
  return docss.reverse();
}
