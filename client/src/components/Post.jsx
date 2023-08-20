import classes from "./Post.module.css";

import { Link } from "react-router-dom";

export default function Post({ id, title, content, likes, onNewPost }) {
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
        <button className={classes.like_button} onClick={onNewPost}></button>
        <p className={classes.likes}>좋아요 {likes} 개</p>
      </div>
    </li>
  );
}
