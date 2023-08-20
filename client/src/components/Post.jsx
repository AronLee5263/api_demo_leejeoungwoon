import classes from "./Post.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Post({ id, title, content, likes, onIncreaseLike }) {
  return (
    <li className={classes.post}>
      <Link to={`/library/content/${id}`} state={{ id: id, title: title, content: content, likes: likes }}>
        <div className={classes.top}>
          <p className={classes.id}> {id}번</p>
          <p className={classes.title}>{title}</p>
        </div>
        <hr />
        <div className={classes.middle}>{/* <p className={classes.content}>{content}</p> */}</div>
      </Link>
      <div className={classes.bottom}>
        <button className={classes.like_button} onClick={onIncreaseLike}></button>
        <p className={classes.likes}>좋아요 {likes} 개</p>
      </div>
    </li>
  );
}
