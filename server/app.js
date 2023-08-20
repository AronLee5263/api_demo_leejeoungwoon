const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const cors = require("cors");

// create the connection to database
let connection;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/library/content", async function (req, res) {
  //   res.send("Hello World !!! 시작");
  const [rows, fields] = await connection.execute(`SELECT * FROM posts`);
  console.log("rows: ", rows);
  res.send(rows);
});

app.get("/library/content/:id", async function (req, res) {
  const id = req.params.id;
  const [rows, fields] = await connection.execute(`SELECT * FROM posts WHERE id=?`, [id]);

  res.send(rows[0]);
});

app.post("/library/content", async function (req, res) {
  const { title, content } = req.body;
  const [rows, fields] = await connection.execute(`INSERT INTO posts(title, content) VALUES(?,?)`, [title, content]);

  const newPost = {
    id: rows.insertId, // 새로 생성된 게시글의 ID
    title: title,
    content: content,
    likes: 0, // 좋아요 기본값
  };

  res.send(newPost);
});

app.post("/library/content/:id/like", async function (req, res) {
  const id = req.params.id;
  const { likes } = req.body;
  const [rows, fields] = await connection.execute(`UPDATE posts SET likes = likes + 1 WHERE id=?`, [id]);
  res.send("좋아요 업데이트가 성공 ! ");
});

app.put("/library/content", async function (req, res) {
  const { id, title, likes, content } = req.body;
  const [rows, fields] = await connection.execute(`UPDATE posts SET title=?, likes=?, content=? WHERE id=?`, [
    title,
    likes,
    content,
    id,
  ]);

  res.send("값 수정이 정상적으로 완료되었습니다");
});

app.delete("/library/content/:id", async function (req, res) {
  const id = req.params.id;
  const [rows, fields] = await connection.execute(`DELETE FROM posts WHERE id=?`, [id]);

  res.send("값 삭제를 성공했습니다");
});

app.listen(3000, async () => {
  connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "myapp",
    password: "root",
    charset: "utf8mb4",
  });
  console.log("server On !!!!!!");
});

// http://localhost:3000
