const express = require("express");
const app = express();

const database = [
  { id: 1, title: "글1" },
  { id: 2, title: "글2" },
  { id: 3, title: "글3" },
];

app.get("/database", function (req, res) {
  //   res.send("Hello World !!! 시작");
  res.send(database);
});

app.listen(3000, () => {
  console.log("server On !!!!!!");
});

// http://localhost:3000
