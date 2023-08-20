import classes from "./Library.module.css";

import { useState, useEffect } from "react";
import axios from "axios";

import Post from "../components/Post";

// import { Outlet } from "react-router-dom";

// const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";
const SERVER_URL = "http://localhost:3000/library/content";

export default function Library() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // useEffect(() => {
  //   async function axiosPosts() {
  //     try {
  //       await axios.get(SERVER_URL).then((response) => {
  //         console.log("response : ", response);
  //         setPosts(response.data.reverse());
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   axiosPosts();
  // }, []);

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.reverse().map((post) => (
            <Post key={post.id} title={post.title} content={post.content} likes={post.likes} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            color: "black",
          }}
        >
          <h2>게시글이 없어요</h2>
          <p> 내용을 추가해보세요 🙂</p>
        </div>
      )}
    </>
  );
}

// export async function loader() {
//   const response = await axios.get("http://localhost:3000/library/content");

//   // const response = await fetch("http://localhost:8080/posts");
//   const resData = await response.json();
//   return resData.Posts;
// }
