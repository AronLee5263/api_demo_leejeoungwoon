const express = require("express");
const app = express();

const database = [
  { id: 1, title: "글1" },
  { id: 2, title: "글2" },
  { id: 3, title: "글3" },
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/database", function (req, res) {
  //   res.send("Hello World !!! 시작");
  res.send(database);
});

app.get("/database/:id", function (req, res) {
  const id = req.params.id;
  const data = database.find((item) => {
    return item.id === Number(id);
  });
  res.send(data);
});

app.post("/products", function (req, res) {
  const title = req.body.title;
  database.push({
    id: database.length + 1,
    title,
  });
  res.send("값 추가가 정상적으로 되었슴");
});

app.listen(3000, () => {
  console.log("server On !!!!!!");
});

// http://localhost:3000
