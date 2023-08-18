const express = require("express");
const app = express();

app.get("/", function (req, res) {
  //   res.send("Hello World !!! 시작");
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => {
  console.log("server On !!!!!!");
});

// http://localhost:3000
