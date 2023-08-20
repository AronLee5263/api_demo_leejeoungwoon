import classes from "./Post.module.css";

export default function Post({ id, title, content, likes }) {
  return (
    <li className={classes.post}>
      <p className={classes.id}> id: {id}</p>
      <p className={classes.title}>{title}</p>
      <p className={classes.content}>{content}</p>
      <p className={classes.likes}>{likes}</p>
    </li>
  );
}
