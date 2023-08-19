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

app.get("/database/:id", function (req, res) {
  const id = req.params.id;
  const data = database.find((item) => {
    return item.id === Number(id);
  });
  res.send(data);
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

app.put("/database", function (req, res) {
  const id = req.body.id;
  const title = req.body.title;
  database[id - 1].title = title;

  res.send("값 수정이 정상적으로 완료되었습니다");
});

app.delete("/database/:id", function (req, res) {
  const id = req.params.id;
  database.splice(id - 1, 1);

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
