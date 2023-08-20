import classes from "./Post.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Post({ id, title, content, likes, onIncreaseLike, onDelete, onDetail }) {
  const navigate = useNavigate();

  const handleDetail = () => {
    onDetail(id);
    navigate(`/library/content/${id}`, { state: { id: id, title: title, content: content, likes: likes } });
  };

  return (
    <li className={classes.post}>
      {/* <Link
        className={classes.linkdeco}
        to={`/library/content/${id}`}
        state={{ id: id, title: title, content: content, likes: likes }}
      > */}
      <div className={classes.top} onClick={handleDetail}>
        <p className={classes.id}> {id}번</p>
        <p className={classes.title}>{title}</p>
      </div>
      <hr />
      <div className={classes.middle} onClick={handleDetail}>
        {/* <p className={classes.content}>{content}</p> */}
      </div>
      {/* </Link> */}
      <div className={classes.bottom}>
        <button className={classes.like_button} onClick={onIncreaseLike}></button>
        <p className={classes.likes} onClick={handleDetail}>
          좋아요 {likes} 개
        </p>

        <button className={classes.delete} onClick={onDelete}>
          삭제
        </button>
      </div>
    </li>
  );
}
