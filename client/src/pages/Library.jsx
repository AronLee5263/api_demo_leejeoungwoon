import classes from "./Library.module.css";
import { AiOutlinePlus, AiOutlineStar, AiOutlineLineChart, AiOutlineBell, AiOutlineUser } from "react-icons/ai";

import NewPost from "./NewPost";
import { useState, useEffect } from "react";
import axios from "axios";

import Post from "../components/Post";
import Modal from "../components/Modal";

// import { Outlet } from "react-router-dom";

// const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";
// const SERVER_URL = "http://localhost:3000/library/content";
// const Like_URL = "http://localhost:3000/library/content/:contentId/like";

export default function Library() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);

  const [modalOpen, setModalOpen] = useState(true);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/library/content")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  function IncreaseLikeCount(id) {
    fetch(`http://localhost:3000/library/content/${id}/like`, {
      method: "POST",
    })
      .then((response) => response.text())
      .then(() => {
        const updatedPosts = posts.map((post) => {
          if (post.id === id) {
            return { ...post, likes: post.likes + 1 };
          }
          return post;
        });
        setPosts(updatedPosts);
      })
      .catch((error) => {
        console.error("좋아요 업데이트 에러:", error);
      });
  }

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

  function changeContentHandler(e) {
    setContent(e.target.value);
  }

  function changeTitleHandler(e) {
    setTitle(e.target.value);
  }

  function NewPostHandler() {
    setNewPost(true);
  }

  function showModalHandler() {
    setModalOpen(true);
  }

  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <>
      {posts.length > 0 && (
        <>
          {modalOpen && (
            <Modal onOpen={showModalHandler} onClose={closeModalHandler}>
              <NewPost onContentChange={changeContentHandler} onTitleChange={changeTitleHandler} />
            </Modal>
          )}

          <button
            type="button"
            className={classes.newPostButton}
            onClick={() => {
              showModalHandler(true);
            }}
          >
            <AiOutlinePlus size={40} className={classes.newPostIcon} />
          </button>
          <ul className={classes.posts}>
            {posts.reverse().map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                likes={post.likes}
                onNewPost={NewPostHandler}
                onIncreaseLike={() => IncreaseLikeCount(post.id)}
              />
            ))}
          </ul>
        </>
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

      <div className={classes.temp}></div>
    </>
  );
}

// export async function loader() {
//   const response = await axios.get("http://localhost:3000/library/content");

//   // const response = await fetch("http://localhost:8080/posts");
//   const resData = await response.json();
//   return resData.Posts;
// }
