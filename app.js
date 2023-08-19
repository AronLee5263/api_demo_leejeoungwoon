const express = require("express");
const app = express();
const mysql = require("mysql2/promise");

// create the connection to database
let connection;

const database = [
  { id: 1, title: "글1" },
  { id: 2, title: "글2" },
  { id: 3, title: "글3" },
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/database", async function (req, res) {
  //   res.send("Hello World !!! 시작");
  const [rows, fields] = await connection.execute(`SELECT * FROM user`);
  console.log("rows: ", rows);
  res.send(rows);
});

app.get("/database/:id", async function (req, res) {
  const id = req.params.id;
  const [rows, fields] = await connection.execute(`SELECT * FROM user WHERE id=?`, [id]);

  res.send(rows);
});

app.post("/database", async function (req, res) {
  const { name, age, content } = req.body;
  const [rows, fields] = await connection.execute(`INSERT INTO user(name, age, content) VALUES(?,?,?)`, [
    name,
    age,
    content,
  ]);

  res.send("값 추가가 성공 ! ");
});

app.put("/database", async function (req, res) {
  const { id, name, age, content } = req.body;
  const [rows, fields] = await connection.execute(`UPDATE user SET name=?, age=?, content=? WHERE id=?`, [
    name,
    age,
    content,
    id,
  ]);

  res.send("값 수정이 정상적으로 완료되었습니다");
});

app.delete("/database/:id", async function (req, res) {
  const id = req.params.id;
  const [rows, fields] = await connection.execute(`DELETE FROM user WHERE id=?`, [id]);

  res.send("값 삭제를 성공했습니다");
});

app.listen(3000, async () => {
  connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "myapp",
    password: "root",
  });
  console.log("server On !!!!!!");
});

// http://localhost:3000
